"use client"

import { useState } from "react"

import { Book } from "@/dtos/Book"
import { Category } from "@/dtos/Category"

import { Categories } from "@/components/Categories"
import { PopularBookCard } from "@/components/Books/PopularBookCard"

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
  const filterBooks = categorySelected
    ? books.filter((book) => book.categories.includes(categorySelected))
    : books

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
