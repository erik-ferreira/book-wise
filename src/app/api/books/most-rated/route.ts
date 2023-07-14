import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const books = await prisma.book.findMany({
    take: 4,
    include: {
      ratings: {
        include: {
          user: true,
        },
      },
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
  })

  const booksMostRated = books
    .map((book) => {
      const amountRatings = book.ratings?.length
      const totalStarOnRating = book.ratings.reduce(
        (sum, rating) => sum + rating.rate,
        0
      )
      const ratingAverage =
        amountRatings > 0 ? Math.floor(totalStarOnRating / amountRatings) : 0

      const categories = book.categories.map(
        (category) => category.category.name
      )

      const newBook = {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        created_at: book.created_at,
        ratingAverage,
        amountRatings,
        categories,
        ratings: book.ratings,
      }

      return newBook
    })
    .sort((a, b) => b.ratingAverage - a.ratingAverage)

  return NextResponse.json({ booksMostRated })
}
