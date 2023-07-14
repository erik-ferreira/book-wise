"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { LogOut } from "lucide-react"
import { useSession, signOut } from "next-auth/react"

import { Profile } from "../Profile"
import { OptionsSidebar } from "./OptionsSidebar"
import { ButtonToggleSidebar } from "../ButtonToggleSidebar"

import { twMerge } from "@/utils/tw-merge"

import logoPng from "../../assets/logo.png"

export function Sidebar() {
  const { status, data } = useSession()
  const isSigned = status === "authenticated"

  const [showSidebar, setShowSidebar] = useState(false)

  function handleOpenSidebar() {
    setShowSidebar(true)
  }

  function handleCloseSidebar() {
    setShowSidebar(false)
  }

  return (
    <>
      {!showSidebar && <ButtonToggleSidebar onClick={handleOpenSidebar} />}

      <aside
        className={twMerge(
          "max-w-sidebar w-full h-sidebar pt-10 pb-6 rounded-lg bg-gray-700 flex flex-col items-center bg-[url(../assets/background-sidebar.png)] bg-no-repeat bg-cover",
          {
            "responsive-sidebar-without-toggle": !showSidebar,
          },
          {
            "responsive-sidebar-with-toggle peer": showSidebar,
          }
        )}
      >
        <ButtonToggleSidebar variant="close" onClick={handleCloseSidebar} />

        <Link href="/" className="relative w-32 h-8 mb-16 max-lg:mb-10">
          <Image src={logoPng} alt="Book Wise" fill />
        </Link>

        <OptionsSidebar onHandleNavigate={handleCloseSidebar} />

        {isSigned ? (
          <button
            className="flex gap-3 items-center py-2 mt-auto"
            type="button"
            onClick={() => signOut()}
          >
            <Profile
              size="small"
              username={data?.user.name || ""}
              src={data?.user.avatar_url || ""}
            />
            <LogOut className="w-6 h-6 text-red-400 max-lg:w-5 max-lg:h-5" />
          </button>
        ) : (
          <Link href="/" className="flex gap-3 items-center py-2 mt-auto">
            <span className="text-gray-200 font-bold leading-base">
              Fazer Login
            </span>
            <LogOut className="w-6 h-6 text-green-100 max-lg:w-5 max-lg:h-5" />
          </Link>
        )}
      </aside>
    </>
  )
}
