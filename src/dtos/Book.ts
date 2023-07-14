import { Prisma } from "@prisma/client"

import { Rating } from "./Rating"
export interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
}

export interface DefaultResponseDbBookProps
  extends Prisma.BookGetPayload<Prisma.BookArgs> {
  ratings: Prisma.RatingGetPayload<Prisma.RatingArgs>[]
  categories: Array<{
    category: Prisma.CategoryGetPayload<Prisma.CategoryArgs>
  }>
}

export interface BookFormattedProps extends Book {
  ratingAverage: number
  wasRead: boolean
  amountRatings: number
  categoriesIds: string[]
  categoriesNames: string[]
  ratings: Rating[]
}

export interface GetBooksResponse {
  books: BookFormattedProps[]
}
