import { NextResponse, NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const userIdOnCookies = req.cookies.get("@bookwise:userId")?.value
  const routeIsHome = req.url.endsWith("/")
  const routeIsProfile = req.url.endsWith("/profile")

  /**
   * if user is logged, or user access route /profile, and not logged navigated to the home
   */
  if (
    (routeIsHome && userIdOnCookies) ||
    (routeIsProfile && !userIdOnCookies)
  ) {
    return NextResponse.redirect(new URL("/home", req.url))
  }

  return NextResponse.next()
}

export const config = { matcher: ["/", "/profile"] }
