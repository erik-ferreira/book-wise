import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"
import { ratingDataSchema } from "@/schemas/api/rating-data"

export async function POST(req: NextRequest) {
  const body = await req.json()

  const result = ratingDataSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { message: result.error.errors[0].message },
      { status: 400 }
    )
  }
  const { userId, bookId, description, rate } = result.data

  const userExists = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      ratings: {
        where: {
          book_id: bookId,
        },
      },
    },
  })

  if (!userExists) {
    return NextResponse.json(
      { message: "Usuário não encontrado" },
      { status: 400 }
    )
  }

  if (userExists.ratings.length > 0) {
    return NextResponse.json(
      { message: "Você já fez uma avaliação sobre este livro." },
      { status: 400 }
    )
  }

  const bookExists = await prisma.book.findUnique({
    where: { id: bookId },
  })

  if (!bookExists) {
    return NextResponse.json(
      { message: "Livro não encontrado" },
      { status: 400 }
    )
  }

  await prisma.rating.create({
    data: {
      description,
      rate,
      user_id: userId,
      book_id: bookId,
    },
  })

  return NextResponse.json(
    { message: "Avaliação criada com sucesso" },
    { status: 201 }
  )
}
