"use client"

import { z } from "zod"
import { Glasses } from "lucide-react"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Book } from "@/dtos/Book"
import { Category } from "@/dtos/Category"

import { Header } from "@/components/Header"
import { Input } from "@/components/Form/Input"
import { Categories } from "@/components/Categories"
import { PopularBookCard } from "@/components/Books/PopularBookCard"

const searchFormSchema = z.object({
  search: z
    .string()
    .min(1, { message: "Preencha o campo para realizar a busca" }),
})

type SearchFormData = z.infer<typeof searchFormSchema>

export interface AllBooksProps extends Book {
  ratingAverage: number
  categories: string[]
}

interface ContentPageProps {
  categories: Category[]
  books: AllBooksProps[]
}

export function ContentPage({ categories, books }: ContentPageProps) {
  const [categorySelected, setCategorySelected] = useState("")

  const filterBooks: AllBooksProps[] = useMemo(() => {
    const listBooks = categorySelected
      ? books.filter((book) => book.categories.includes(categorySelected))
      : books

    return listBooks
  }, [categorySelected, books])

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitSearch(data: SearchFormData) {
    console.log(data)
  }

  function handleChangeCategorySelected(id: string) {
    setCategorySelected((prevId) => {
      if (prevId === id) {
        return ""
      }

      return id
    })
  }

  return (
    <>
      <Header
        label="Explorar"
        icon={Glasses}
        elementRight={
          <form
            className="max-w-[27rem] w-full"
            onSubmit={handleSubmit(handleSubmitSearch)}
          >
            <Input
              placeholder="Buscar"
              error={errors?.search?.message}
              {...register("search", { onBlur: () => clearErrors() })}
            />
          </form>
        }
      />

      <Categories
        categories={categories}
        categorySelected={categorySelected}
        onChangeCategorySelected={handleChangeCategorySelected}
      />

      <div className="grid grid-cols-books gap-5 mt-12">
        {filterBooks.map((book) => (
          <PopularBookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}
