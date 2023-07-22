import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext, useState } from "react"

import { getBooks } from "@/requests/books"

import { BookFormattedProps } from "@/dtos/Book"

interface BooksContextData {
  categoryNameSelected: string
  onUpdateCategoryNameSelected: (value: string) => void

  searchBookOrAuthor: string
  onUpdateSearchBookOrAuthor: (value: string) => void

  books: BookFormattedProps[] | undefined
  isLoadingBooks: boolean
  onRefetchBooks: () => void
}

export const BooksContext = createContext({} as BooksContextData)

interface BooksContextProviderProps {
  children: ReactNode
}

export function BooksContextProvider({ children }: BooksContextProviderProps) {
  const session = useSession()
  const userId = session?.data?.user?.id || ""

  const [categoryNameSelected, setCategoryNameSelected] = useState("")
  const [searchBookOrAuthor, setSearchBookOrAuthor] = useState("")

  const {
    data: books,
    isLoading: isLoadingBooks,
    refetch: onRefetchBooks,
  } = useQuery<BookFormattedProps[]>(
    ["books", categoryNameSelected, searchBookOrAuthor],
    async () => {
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
    }
  )

  function onUpdateCategoryNameSelected(value: string) {
    setCategoryNameSelected(value)
  }

  function onUpdateSearchBookOrAuthor(value: string) {
    setSearchBookOrAuthor(value)
  }

  return (
    <BooksContext.Provider
      value={{
        categoryNameSelected,
        onUpdateCategoryNameSelected,

        searchBookOrAuthor,
        onUpdateSearchBookOrAuthor,

        books,
        isLoadingBooks,
        onRefetchBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export function useBooks() {
  const context = useContext(BooksContext)

  return context
}
