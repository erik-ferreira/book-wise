"use client"

import { z } from "zod"
import { Glasses } from "lucide-react"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "@/lib/api"

import { Category } from "@/dtos/Category"
import { AllPropsBook, GetBooksResponse } from "@/dtos/Book"

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

interface ContentPageProps {
  categories: Category[]
  books: AllPropsBook[]
}

export function ContentPage({ categories, books }: ContentPageProps) {
  const [categorySelected, setCategorySelected] = useState("")
  const [listBooks, setListBooks] = useState(books)

  const filterBooks: AllPropsBook[] = useMemo(() => {
    const booksFiltered = categorySelected
      ? listBooks.filter((book) => book.categories.includes(categorySelected))
      : listBooks

    return booksFiltered
  }, [categorySelected, listBooks])

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitSearch(data: SearchFormData) {
    const dataResponse = await api<GetBooksResponse>(
      `/books?bookOrAuthor=${data.search}`
    )

    setListBooks(dataResponse.books)
  }

  function handleChangeCategorySelected(id: string) {
    setCategorySelected((prevId) => {
      if (prevId === id) {
        return ""
      }

      return id
    })
  }

  function onChangeInput(value: string) {
    if (value === "") {
      handleSubmitSearch({ search: "" })
    }
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
              {...register("search", {
                onBlur: () => clearErrors(),
                onChange: (e) => onChangeInput(e.target.value),
              })}
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
        {/* {filterBooks.map((book) => (
          <PopularBookCard key={book.id} book={book} />
        ))} */}
      </div>
    </>
  )
}
