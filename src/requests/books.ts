import { api } from "@/lib/api"

import {
  BookFormattedProps,
  GetBooksResponse,
  GetBooksMostRatedResponse,
} from "@/dtos/Book"

export async function getBooksMostRated(): Promise<BookFormattedProps[]> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<GetBooksMostRatedResponse>("/books/most-rated", {
    next: { revalidate },
  })

  return data.booksMostRated
}

// ----------------------------------------------------

export async function getBooks(
  params?: URLSearchParams
): Promise<BookFormattedProps[]> {
  const revalidate = 60 * 60 * 24 * 7 // 7 days
  const data = await api<GetBooksResponse>(`/books?${params?.toString()}`, {
    next: { revalidate },
  })

  return data.books
}
