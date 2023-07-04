import { ReactNode } from "react"

import { NextAuthProvider } from "./provider"
import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <main className="flex pl-5 h-screen items-center max-[650px]:relative max-[650px]:pl-0">
      <NextAuthProvider>
        <Sidebar />

        {children}
      </NextAuthProvider>
    </main>
  )
}
