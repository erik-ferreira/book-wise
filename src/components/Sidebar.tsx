import Image from "next/image"
import { LogOut } from "lucide-react"

import { Profile } from "./Profile"
import { OptionsSidebar } from "./OptionsSidebar"

import logoPng from "../assets/logo.png"
import Link from "next/link"

export function Sidebar() {
  const isSigned = true

  return (
    <div
      className="max-w-sidebar w-full h-sidebar
      pt-10 pb-6 rounded-lg bg-gray-700
      flex flex-col items-center bg-[url(../assets/background-sidebar.png)] bg-no-repeat bg-cover"
    >
      <Link href="/">
        <Image src={logoPng} alt="Book Wise" width={128} height={32} />
      </Link>

      <OptionsSidebar />

      <button className="flex gap-3 items-center py-2 mt-auto" type="button">
        {isSigned ? (
          <>
            <Profile size="small" username="Erik Ferreira" />
            <LogOut className="w-6 h-6 text-red-400" />
          </>
        ) : (
          <>
            <span className="text-gray-200 font-bold leading-base">
              Fazer Login
            </span>
            <LogOut className="w-6 h-6 text-green-100" />
          </>
        )}
      </button>
    </div>
  )
}
