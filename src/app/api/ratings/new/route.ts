import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const ratingDataSchema = z.object({
  userId: z
    .string()
    .regex(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      { message: "Id do usuário inválido" }
    ),
  bookId: z
    .string()
    .regex(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      { message: "Id do livro inválido" }
    ),
  rate: z
    .number()
    .int()
    .min(1, { message: "O menor valor da avaliação é 1." })
    .max(5, { message: "O maior valor da avaliação é 5" }),
  description: z.string().min(1, { message: "Descrição inválida" }),
})

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
  })

  if (!userExists) {
    return NextResponse.json(
      { message: "Usuário não encontrado" },
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

  return NextResponse.json({ message: "Avaliação criada com sucesso" })
}
