import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { authOptions } from "../auth/[...nextauth]/route"

import { formatBooks } from "@/utils/format-books"

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const bookOrAuthorSearch = queryParams.get("bookOrAuthor") || ""

  const session = await getServerSession(authOptions)
  const userId = session?.user.id

  const allBooks = await prisma.book.findMany({
    where: {
      OR: [
        { name: { contains: bookOrAuthorSearch } },
        { author: { contains: bookOrAuthorSearch } },
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

  const books = formatBooks({ hasSession: !!session, userId, books: allBooks })

  return NextResponse.json({ books })
}
