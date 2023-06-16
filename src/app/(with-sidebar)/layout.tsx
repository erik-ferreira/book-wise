import { ReactNode } from "react"

import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="flex p-5">
      <Sidebar />
      {children}
    </div>
  )
}
