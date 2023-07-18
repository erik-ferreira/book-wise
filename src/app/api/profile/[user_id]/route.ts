import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

import { UserProfile } from "@/dtos/User"

interface CategoryReadProps {
  [key: string]: number
}

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

  const totalPagesRead = user.ratings.reduce(
    (sum, rating) => sum + rating.book.total_pages,
    0
  )

  const totalRatedBooks = user.ratings.length

  const allAuthors = user.ratings.map((rating) => rating.book.author)
  const totalAuthorsRead = allAuthors.filter(
    (author, index) => allAuthors.indexOf(author) === index
  ).length

  // to calculate most read category
  const categories = user.ratings.flatMap((rating) => {
    return rating.book.categories.map((category) => category.category.name)
  })
  const categoriesRead = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1

    return acc
  }, {} as CategoryReadProps)

  let mostReadCategory = ""
  let maxValue = 0
  for (const prop in categoriesRead) {
    if (categoriesRead[prop] > maxValue) {
      maxValue = categoriesRead[prop]
      mostReadCategory = prop
    }
  }

  const userProfile = {
    name: user.name,
    avatar_url: user.avatar_url,
    created_at: user.created_at.toString(),
    totalAuthorsRead,
    totalPagesRead,
    totalRatedBooks,
    mostReadCategory,
    // profileOptions,
  } as UserProfile

  return NextResponse.json({ user: userProfile })
}
