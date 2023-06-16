import Link from "next/link"
import Image from "next/image"
import { useMemo, ReactNode } from "react"
import { LineChart, Glasses, LogOut, User } from "lucide-react"

import { Avatar } from "./Avatar"

import logoPng from "../assets/logo.png"

interface OptionsSidebarProps {
  id: number
  label: string
  active: boolean
  href: string
  icon: ReactNode
}

export function Sidebar() {
  const isSigned = true

  const optionsSidebar = useMemo<OptionsSidebarProps[]>(() => {
    let options = [
      {
        id: 1,
        label: "Início",
        active: true,
        href: "/home",
        icon: <LineChart className="w-6 h-6" />,
      },
      {
        id: 2,
        label: "Explorar",
        active: false,
        href: "/explorer",
        icon: <Glasses className="w-6 h-6" />,
      },
    ]

    if (isSigned) {
      options = [
        ...options,
        {
          id: 3,
          label: "Perfil",
          active: false,
          href: "/profile",
          icon: <User className="w-6 h-6" />,
        },
      ]
    }

    return options
  }, [isSigned])

  return (
    <aside
      className="max-w-sidebar w-full max-h-sidebar
      pt-10 pb-6 rounded-lg bg-gray-700
      flex flex-col items-center bg-[url(../assets/background-sidebar.png)] bg-no-repeat bg-cover"
    >
      <Image src={logoPng} alt="Book Wise" width={128} height={32} />

      <ul className="mt-16 space-y-3">
        {optionsSidebar.map((option) => {
          const stylesCondition = option.active
            ? "text-gray-100 before:from-start before:to-end"
            : "text-gray-400"

          return (
            <li key={option.id}>
              <Link
                href={option.href}
                className={`flex gap-3 py-2 font-bold leading-base 
              before:w-1 before:h-6 before:rounded-full
              before:bg-gradient-to-b ${stylesCondition}`}
              >
                {option.icon}
                {option.label}
              </Link>
            </li>
          )
        })}
      </ul>

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
