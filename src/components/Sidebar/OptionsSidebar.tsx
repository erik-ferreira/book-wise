"use client"

import Link from "next/link"
import { useMemo } from "react"
import classnames from "classnames"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { LineChart, Glasses, User, LucideIcon } from "lucide-react"

interface OptionsProps {
  id: number
  label: string
  href: string
  icon: LucideIcon
}

interface OptionsSidebarProps {
  onHandleNavigate?: () => void
}

export function OptionsSidebar({ onHandleNavigate }: OptionsSidebarProps) {
  const pathname = usePathname()
  const session = useSession()

  const isSigned = session.status === "authenticated"

  const optionsSidebar = useMemo<OptionsProps[]>(() => {
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
    <ul className="space-y-3">
      {optionsSidebar.map(({ icon: Icon, ...option }) => {
        const isRouteActive = pathname === option.href

        return (
          <li key={option.id}>
            <Link
              href={option.href}
              prefetch={false}
              className={classnames(
                "flex gap-3 py-2 font-bold leading-base before:w-1 before:h-6 before:rounded-full before:bg-gradient-to-b hover:text-gray-100 transition-colors",
                {
                  "text-gray-100 before:from-start before:to-end":
                    isRouteActive,
                },
                { "text-gray-400": !isRouteActive }
              )}
              onClick={onHandleNavigate}
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
