import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

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
    // include: {
    //   ratings: {
    //     take: 1,
    //     orderBy: {
    //       created_at: "desc",
    //     },
    //     include: {
    //       book: true,
    //     },
    //   },
    // },
  })

  if (!user) {
    return NextResponse.json(
      {
        message: "User not exists",
      },
      { status: 400 }
    )
  }

  return NextResponse.json({ user })
}
