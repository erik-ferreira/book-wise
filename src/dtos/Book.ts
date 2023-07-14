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

export interface BookMostRated extends Book {
  ratingAverage: number
  wasRead: boolean
  amountRatings: number
  categories: string[]
  ratings: Rating[]
}

export interface AllPropsBook extends Book {
  ratingAverage: number
  categories: string[]
  wasRead: boolean
}

export interface GetBooksResponse {
  books: AllPropsBook[]
}
