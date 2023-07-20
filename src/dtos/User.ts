import { Prisma } from "@prisma/client"

export interface User {
  id: string
  name: string
  email: string
  avatar_url: string
  created_at: string
}

export type UserProfile = Omit<User, "id" | "email"> & {
  totalPagesRead: number
  totalRatedBooks: number
  totalAuthorsRead: number
  mostReadCategory: string
}

export interface UserRatingProps {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    name: string
    author: string
    cover_url: string
  }
}

export type DefaultResponseDbUserProps =
  Prisma.UserGetPayload<Prisma.UserArgs> & {
    ratings: Array<
      Prisma.RatingGetPayload<Prisma.RatingArgs> & {
        book: Prisma.BookGetPayload<Prisma.BookArgs> & {
          categories: Array<{
            category: Prisma.CategoryGetPayload<Prisma.CategoryArgs>
          }>
        }
      }
    >
  }

// ----------------------- types response -----------------------

export interface GetProfileDataResponse {
  user: UserProfile
}

export interface GetUserRatingsResponse {
  userRatings: any[]
}
