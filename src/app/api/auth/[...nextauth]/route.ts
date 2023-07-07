import { cookies } from "next/headers"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

import { PrismaAdapter } from "@/lib/prisma-adapter"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      cookies().set("@bookwise:userId", user?.id)

      return true
    },
    async session({ session, user }) {
      return { ...session, user }
    },
  },
  pages: {
    signIn: "/",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
