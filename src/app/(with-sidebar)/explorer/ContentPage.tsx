"use client"

import { useState } from "react"
import { Glasses } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

import { getBooks } from "@/requests/books"

import { Category } from "@/dtos/Category"
import { BookFormattedProps } from "@/dtos/Book"

import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { FormSearchBookOrAuthor } from "@/components/Form/FormSearchBookOrAuthor"

interface ContentPageProps {
  categories: Category[]
  userId: string
}

export function ContentPage({ categories, userId }: ContentPageProps) {
  const [categoryNameSelected, setCategoryNameSelected] = useState("")
  const [searchBookOrAuthor, setSearchBookOrAuthor] = useState("")

  const { data: books, isLoading: isLoadingBooks } = useQuery<
    BookFormattedProps[]
  >(["books", categoryNameSelected, searchBookOrAuthor], async () => {
    const paramsToGetBooks = new URLSearchParams()
    if (userId) {
      paramsToGetBooks.append("userId", userId)
    }

    if (searchBookOrAuthor) {
      paramsToGetBooks.append("bookOrAuthor", searchBookOrAuthor)
    }

    if (categoryNameSelected) {
      paramsToGetBooks.append("category", categoryNameSelected)
    }

    const books = await getBooks(paramsToGetBooks)

    return books
  })

  function handleChangeCategoryNameSelected(name: string) {
    setCategoryNameSelected((prevName) => {
      if (prevName === name) {
        return ""
      }

      return name
    })
  }

  return (
    <>
      <Header
        label="Explorar"
        icon={Glasses}
        elementRight={
          <FormSearchBookOrAuthor onRefetchBooks={setSearchBookOrAuthor} />
        }
      />

      <Categories
        categories={categories}
        categorySelected={categoryNameSelected}
        onChangeCategorySelected={handleChangeCategoryNameSelected}
      />

      {isLoadingBooks ? (
        <div className="flex items-center justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-books gap-5 mt-12">
          {books?.map((book) => (
            <PopularBookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  )
}
