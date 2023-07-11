import { NextResponse } from "next/server"

import { prisma } from "../../../lib/prisma"

export async function GET(request: Request) {
  const teste = await prisma.user.findMany()

  return NextResponse.json({ data: "ok", teste })
}
