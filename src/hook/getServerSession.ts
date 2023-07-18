import { getServerSession as getSSLib } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function getServerSession() {
  const session = await getSSLib(authOptions)

  return session
}
