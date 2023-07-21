import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

import { formatBooks } from "@/utils/format-books"

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const bookOrAuthorSearch = queryParams.get("bookOrAuthor") || ""
  const userId = queryParams.get("userId") || ""
  const categoryName = queryParams.get("category") || ""

  const allBooks = await prisma.book.findMany({
    where: {
      categories: {
        some: { category: { name: { contains: categoryName } } },
      },
      AND: [
        {
          OR: [
            { name: { contains: bookOrAuthorSearch } },
            { author: { contains: bookOrAuthorSearch } },
          ],
        },
      ],
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      categories: {
        select: {
          category: true,
        },
      },
      ratings: {
        orderBy: {
          created_at: "desc",
        },
        include: {
          user: true,
        },
      },
    },
  })

  const books = formatBooks({ hasSession: !!userId, userId, books: allBooks })

  return NextResponse.json({ books }, { status: 200 })
}
