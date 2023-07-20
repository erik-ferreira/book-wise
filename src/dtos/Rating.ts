import { Prisma } from "@prisma/client"

import { Book } from "./Book"
import { User, UserRatingProps } from "./User"

export interface Rating extends Prisma.RatingGetPayload<Prisma.RatingArgs> {
  book?: Book
  user?: User
}

// ----------------------- types response -----------------------

export interface GetRecentBooksRatingsResponse {
  ratings: Rating[]
}

export interface GetLastUserRating {
  lastUserRating: UserRatingProps
}

export interface ResponseCreateRating {
  message: string
}
