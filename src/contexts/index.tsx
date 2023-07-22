"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/lib/query-client"
import { BooksContextProvider } from "./BooksContext"

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <BooksContextProvider>{children}</BooksContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
