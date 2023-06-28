import { LucideIcon } from "lucide-react"

import { Input } from "./Input"

interface HeaderProps {
  icon: LucideIcon
  label: string
  showInputSearch?: boolean
}

export function Header({
  icon: Icon,
  label,
  showInputSearch = false,
}: HeaderProps) {
  return (
    <header className="flex gap-4 items-center justify-between mb-10 max-[400px]:flex-col">
      <h1 className="flex items-center gap-3 font-bold text-2xl leading-short">
        <Icon className="w-8 h-8 text-green-100" />
        {label}
      </h1>

      {showInputSearch && <Input placeholder="Buscar livro avaliado" />}
    </header>
  )
}
