import { ReactNode } from "react"

import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <main className="flex pl-5 h-screen items-center max-[650px]:relative max-[650px]:pl-0">
      <Sidebar />

      {children}
    </main>
  )
}
