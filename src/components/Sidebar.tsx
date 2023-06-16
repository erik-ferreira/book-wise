import Image from "next/image"
import { LogOut } from "lucide-react"

import { Avatar } from "./Avatar"
import { OptionsSidebar } from "./OptionsSidebar"

import logoPng from "../assets/logo.png"

export function Sidebar() {
  const isSigned = true

  return (
    <aside
      className="max-w-sidebar w-full h-sidebar
      pt-10 pb-6 rounded-lg bg-gray-700
      flex flex-col items-center bg-[url(../assets/background-sidebar.png)] bg-no-repeat bg-cover"
    >
      <Image src={logoPng} alt="Book Wise" width={128} height={32} />

      <OptionsSidebar />

      <button className="flex gap-3 items-center py-2 mt-auto" type="button">
        {isSigned ? (
          <>
            <Avatar
              username="Erik Ferreira"
              src="https://github.com/erik-ferreira.png"
            />
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
    </aside>
  )
}
