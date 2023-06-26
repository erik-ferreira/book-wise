"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import classnames from "classnames"
import { LogOut, Menu, X } from "lucide-react"

import { Profile } from "./Profile"
import { OptionsSidebar } from "./OptionsSidebar"

import logoPng from "../assets/logo.png"

export function Sidebar() {
  const isSigned = true

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      {!showSidebar && (
        <button
          className="w-8 h-8 items-center justify-center z-20 hidden
        max-[650px]:flex max-[650px]:absolute max-[650px]:top-5 max-[650px]:left-12"
          onClick={() => setShowSidebar(true)}
        >
          <Menu className="w-7 h-7 text-green-100" />
        </button>
      )}

      <aside
        className={classnames(
          "max-w-sidebar w-full h-sidebar pt-10 pb-6 rounded-lg bg-gray-700 flex flex-col items-center bg-[url(../assets/background-sidebar.png)] bg-no-repeat bg-cover",
          { "responsive-sidebar-without-toggle": !showSidebar },
          { "responsive-sidebar-with-toggle peer": showSidebar }
        )}
      >
        <button
          className="w-8 h-8 items-center justify-center z-20 hidden
        max-[650px]:flex max-[650px]:absolute max-[650px]:top-5 max-[650px]:right-5"
          onClick={() => setShowSidebar(false)}
        >
          <X className="w-7 h-7 text-green-100" />
        </button>

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
    </>
  )
}
