import { ReactNode } from "react"

import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <main className="flex pl-5 h-screen items-center max-[650px]:relative max-[650px]:pl-0">
      <Sidebar />

      <div
        className="w-full h-screen pt-18 px-24 pb-[3.25rem] overflow-y-scroll
        max-lg:px-18 max-md:px-12 max-md:relative max-[400px]:pr-0
        peer-[.responsive-sidebar-with-toggle]:overflow-y-hidden"
      >
        {children}
      </div>
    </main>
  )
}
