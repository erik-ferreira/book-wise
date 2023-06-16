import { ReactNode } from "react"

import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="flex p-5">
      <Sidebar />

      <main className="w-full pt-[4.5rem] pl-24 pr-[4.75rem]">{children}</main>
    </div>
  )
}
