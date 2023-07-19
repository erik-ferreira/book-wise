import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

import { formatBooks } from "@/utils/format-books"

export async function GET(req: NextRequest) {
  const books = await prisma.book.findMany({
    take: 4,
    include: {
      ratings: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: "desc",
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
    },
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
  })

  const booksMostRated = formatBooks({ books, sortOrder: true })

  return NextResponse.json({ booksMostRated }, { status: 200 })
}
