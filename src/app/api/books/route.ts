import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const allBooks = await prisma.book.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      categories: {
        select: {
          category: true,
        },
      },
      ratings: {
        orderBy: {
          created_at: "desc",
        },
        select: {
          rate: true,
        },
      },
    },
  })

  const books = allBooks.map((book) => {
    const amountRatings = book.ratings?.length
    const totalStarOnRating = book.ratings.reduce(
      (sum, rating) => sum + rating.rate,
      0
    )
    const ratingAverage =
      amountRatings > 0 ? Math.floor(totalStarOnRating / amountRatings) : 0

    const categories = book.categories.map((category) => category.category.id)

    const newBook = {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at,
      ratingAverage,
      categories,
    }

    return newBook
  })

  return NextResponse.json({ books, allBooks })
}
