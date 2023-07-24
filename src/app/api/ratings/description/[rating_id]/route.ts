import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
  { params }: { params: { rating_id: string } }
) {
  const { rating_id } = params

  if (!rating_id) {
    return NextResponse.json(
      {
        message: "Rating not found",
      },
      { status: 400 }
    )
  }

  const rating = await prisma.rating.findUnique({
    where: {
      id: rating_id,
    },
    select: {
      description: true,
    },
  })

  if (!rating) {
    return NextResponse.json(
      {
        message: "Rating not exists",
      },
      { status: 400 }
    )
  }

  const { description } = rating

  return NextResponse.json({ description })
}
