import { Sidebar } from "@/components/Sidebar"
import { ReactNode } from "react"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}
