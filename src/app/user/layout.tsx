import { ReactNode } from "react"

import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="h-screen p-5 flex">
      <Sidebar />
      {children}
    </div>
  )
}
