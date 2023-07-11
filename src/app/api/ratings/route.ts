import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const ratings = await prisma.rating.findMany({
    include: {
      user: true,
      book: true,
    },
    orderBy: {
      created_at: "desc",
    },
  })

  return NextResponse.json({ ratings })
}
