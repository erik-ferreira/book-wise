import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

interface HeaderProps {
  icon: LucideIcon
  label: string
  elementRight?: ReactNode
}

export function Header({ icon: Icon, label, elementRight }: HeaderProps) {
  return (
    <header className="flex gap-4 items-center justify-between mb-10 max-[400px]:flex-col">
      <h1 className="flex items-center gap-3 font-bold text-2xl leading-short">
        <Icon className="w-8 h-8 text-green-100" />
        {label}
      </h1>

      {elementRight}
    </header>
  )
}
