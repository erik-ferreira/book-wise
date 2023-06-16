"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, ReactNode } from "react"
import { LineChart, Glasses, User } from "lucide-react"

interface OptionsSidebarProps {
  id: number
  label: string
  href: string
  icon: ReactNode
}

export function OptionsSidebar() {
  const pathname = usePathname()

  const isSigned = true

  const optionsSidebar = useMemo<OptionsSidebarProps[]>(() => {
    let options = [
      {
        id: 1,
        label: "Início",

        href: "/home",
        icon: <LineChart className="w-6 h-6" />,
      },
      {
        id: 2,
        label: "Explorar",

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

          href: "/profile",
          icon: <User className="w-6 h-6" />,
        },
      ]
    }

    return options
  }, [isSigned])

  return (
    <ul className="mt-16 space-y-3">
      {optionsSidebar.map((option) => {
        const stylesCondition =
          pathname === option.href
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
  )
}
