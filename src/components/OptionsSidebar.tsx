"use client"

import Link from "next/link"
import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { LineChart, Glasses, User, LucideIcon } from "lucide-react"

interface OptionsSidebarProps {
  id: number
  label: string
  href: string
  icon: LucideIcon
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
        icon: LineChart,
      },
      {
        id: 2,
        label: "Explorar",
        href: "/explorer",
        icon: Glasses,
      },
    ]

    if (isSigned) {
      options = [
        ...options,
        {
          id: 3,
          label: "Perfil",
          href: "/profile",
          icon: User,
        },
      ]
    }

    return options
  }, [isSigned])

  return (
    <ul className="mt-16 space-y-3">
      {optionsSidebar.map(({ icon: Icon, ...option }) => {
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
              <Icon className="w-6 h-6" />
              {option.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
