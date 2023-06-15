import { LucideIcon, Search } from "lucide-react"
import { InputHTMLAttributes } from "react"

interface HeaderProps {
  icon: LucideIcon
  label: string
  showInputSearch?: boolean
  inputSearchProps?: InputHTMLAttributes<HTMLInputElement>
}

export function Header({
  icon: Icon,
  label,
  showInputSearch = false,
  inputSearchProps,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between mb-10">
      <h1 className="flex items-center gap-3 font-bold text-2xl leading-short">
        <Icon className="w-8 h-8 text-green-100" />
        {label}
      </h1>

      {showInputSearch && (
        <label className="max-w-[27rem] w-full px-5 flex items-center border border-gray-500 rounded focus-within:outline">
          <input
            type="text"
            className="bg-transparent flex-1 py-[0.875rem] pr-2 outline-none placeholder:text-gray-400 placeholder:text-sm"
            {...inputSearchProps}
          />

          <Search className="text-gray-500 w-5 h-5" />
        </label>
      )}
    </header>
  )
}
