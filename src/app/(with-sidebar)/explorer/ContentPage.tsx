"use client"

import { Glasses } from "lucide-react"
import { useMemo, useState } from "react"

import { Category } from "@/dtos/Category"
import { BookFormattedProps } from "@/dtos/Book"

import { Header } from "@/components/Header"
import { FormSearchBookOrAuthor } from "@/components/Form/FormSearchBookOrAuthor"
import { Categories } from "@/components/Categories"
import { PopularBookCard } from "@/components/Books/PopularBookCard"

interface ContentPageProps {
  categories: Category[]
  books: BookFormattedProps[]
}

export function ContentPage({ categories, books }: ContentPageProps) {
  const [categorySelected, setCategorySelected] = useState("")
  const [listBooks, setListBooks] = useState(books)

  const filterBooks: BookFormattedProps[] = useMemo(() => {
    const booksFiltered = categorySelected
      ? listBooks.filter((book) =>
          book.categoriesIds.includes(categorySelected)
        )
      : listBooks

    return booksFiltered
  }, [categorySelected, listBooks])

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
        elementRight={<FormSearchBookOrAuthor onUpdateBooks={setListBooks} />}
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
