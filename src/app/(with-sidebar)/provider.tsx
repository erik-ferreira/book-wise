"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "../../lib/query-client"

interface NextAuthProviderProps {
  children: ReactNode
}

export function NextAuthProvider({ children }: NextAuthProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  )
}
