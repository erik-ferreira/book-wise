import { ReactNode } from "react"

import { Sidebar } from "@/components/Sidebar"

interface UserLayoutProps {
  children: ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <main className="flex p-5">
      <Sidebar />

      <div
        className="w-full pt-[4.5rem] pl-24 pr-[4.75rem] h-sidebar overflow-y-scroll 
        max-lg:pl-[4.5rem] max-lg:pr-[3.25rem] max-md:pl-12 max-md:pr-7"
      >
        {children}
      </div>
    </main>
  )
}

/**
 * pl 96px
 *
 * pr 76px + 20px
 *
 * pl 72px
 *
 * pr 72 - 20 = 52px
 *
 */
