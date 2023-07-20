import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

import { UserRatingProps } from "@/dtos/User"

import { removeAccentsAndToLowerCaseText } from "@/utils/remove-accents-and-to-lower-case-text"

export async function GET(
  req: NextRequest,
  { params }: { params: { user_id: string } }
) {
  const queryParams = req.nextUrl.searchParams
  const bookOrAuthorSearch = queryParams.get("bookOrAuthor") || ""
  const { user_id } = params

  if (!user_id) {
    return NextResponse.json(
      {
        message: "Session not found",
      },
      { status: 400 }
    )
  }

  const user = await prisma.user.findUnique({
    where: { id: user_id },
    include: {
      ratings: {
        include: {
          book: true,
        },
      },
    },
  })

  if (!user) {
    return NextResponse.json(
      {
        message: "User not exists",
      },
      { status: 400 }
    )
  }

  const userRatings: UserRatingProps[] = user.ratings
    .map((rating) => {
      return {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        created_at: rating.created_at.toString(),
        book: {
          name: rating.book.name,
          author: rating.book.author,
          cover_url: rating.book.cover_url,
        },
      }
    })
    .filter((rating) => {
      const name = removeAccentsAndToLowerCaseText(rating.book.name)
      const author = removeAccentsAndToLowerCaseText(rating.book.name)
      const bookOrAuthorSearchFormat =
        removeAccentsAndToLowerCaseText(bookOrAuthorSearch)

      return (
        name.includes(bookOrAuthorSearchFormat) ||
        author.includes(bookOrAuthorSearchFormat)
      )
    })

  return NextResponse.json({ userRatings })
}
