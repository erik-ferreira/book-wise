import { Prisma } from "@prisma/client"

import { Book } from "./Book"
import { User } from "./User"

export interface Rating extends Prisma.RatingGetPayload<Prisma.RatingArgs> {
  book?: Book
  user?: User
}
