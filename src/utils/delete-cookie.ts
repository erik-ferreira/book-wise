"use server"

import { cookies } from "next/headers"

interface DeleteCookieProps {
  cookieName: string
}

export async function deleteCookie({ cookieName }: DeleteCookieProps) {
  cookies().delete(cookieName)
}
