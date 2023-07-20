import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const ratingsDb = await prisma.rating.findMany({
    include: {
      user: true,
      book: true,
    },
    orderBy: {
      created_at: "desc",
    },
  })

  const ratings = ratingsDb.map((rating) => {
    const { description } = rating

    const formatDescription =
      description.length > 230
        ? description.slice(0, 230).concat("...")
        : description

    return {
      ...rating,
      description: formatDescription,
    }
  })

  return NextResponse.json({ ratings })
}
