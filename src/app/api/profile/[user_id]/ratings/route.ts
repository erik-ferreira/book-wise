import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

import { UserRatingProps } from "@/dtos/Rating"

export async function GET(
  req: NextRequest,
  { params }: { params: { user_id: string } }
) {
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

  const userRatings: UserRatingProps[] = user.ratings.map((rating) => {
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

  return NextResponse.json({ userRatings })
}
