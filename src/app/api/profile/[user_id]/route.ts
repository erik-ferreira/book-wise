import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

import { UserProfile } from "@/dtos/User"
import { UserRatingProps } from "@/dtos/Rating"

import { formatOptionsProfile } from "@/utils/format-options-profile"

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
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
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

  const {
    totalAuthorsRead,
    totalPagesRead,
    totalRatedBooks,
    mostReadCategory,
  } = formatOptionsProfile(user)

  const ratings: UserRatingProps[] = user.ratings.map((rating) => {
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

  const userProfile = {
    name: user.name,
    avatar_url: user.avatar_url,
    created_at: user.created_at.toString(),
    totalAuthorsRead,
    totalPagesRead,
    totalRatedBooks,
    mostReadCategory,
    ratings,
  } as UserProfile

  return NextResponse.json({ user: userProfile })
}
