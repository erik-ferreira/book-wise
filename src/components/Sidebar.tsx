import Link from "next/link"
import Image from "next/image"
import { LogOut } from "lucide-react"

import { Profile } from "./Profile"
import { OptionsSidebar } from "./OptionsSidebar"

import logoPng from "../assets/logo.png"

export function Sidebar() {
  const isSigned = true

  return (
    <aside
      className="max-w-sidebar w-full h-sidebar
      pt-10 pb-6 rounded-lg bg-gray-700
      flex flex-col items-center responsive-sidebar
      bg-[url(../assets/background-sidebar.png)] bg-no-repeat bg-cover"
    >
      <Link href="/" className="relative w-32 h-8 mb-16 max-lg:mb-10">
        <Image src={logoPng} alt="Book Wise" fill />
      </Link>

      <OptionsSidebar />

      <button
        className="flex gap-3 items-center py-2 mt-auto teste"
        type="button"
      >
        {isSigned ? (
          <>
            <Profile size="small" username="Erik Ferreira" />
            <LogOut className="w-6 h-6 text-red-400 max-lg:w-5 max-lg:h-5" />
          </>
        ) : (
          <>
            <span className="text-gray-200 font-bold leading-base">
              Fazer Login
            </span>
            <LogOut className="w-6 h-6 text-green-100 max-lg:w-5 max-lg:h-5" />
          </>
        )}
      </button>
    </aside>
  )
}
