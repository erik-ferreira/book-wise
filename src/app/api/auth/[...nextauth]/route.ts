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
    async redirect({ baseUrl }) {
      if (baseUrl.endsWith("/home")) {
        return "/"
      }

      return "/home"
    },
    async session({ session, user }) {
      return { ...session, user }
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
