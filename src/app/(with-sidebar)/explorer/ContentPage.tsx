"use client"

import { Glasses } from "lucide-react"

import { useBooks } from "@/contexts/BooksContext"

import { Category } from "@/dtos/Category"

import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { FormSearchBookOrAuthor } from "@/components/Form/FormSearchBookOrAuthor"

interface ContentPageProps {
  categories: Category[]
}

export function ContentPage({ categories }: ContentPageProps) {
  const {
    books,
    isLoadingBooks,

    onUpdateSearchBookOrAuthor,
  } = useBooks()

  return (
    <>
      <Header
        label="Explorar"
        icon={Glasses}
        elementRight={
          <FormSearchBookOrAuthor onRefetchBooks={onUpdateSearchBookOrAuthor} />
        }
      />

      <Categories categories={categories} />

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
