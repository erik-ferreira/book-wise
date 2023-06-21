import { X } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

interface ButtonXCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonXClose({ ...rest }: ButtonXCloseProps) {
  return (
    <button
      className="w-6 h-6 text-gray-400 rounded-sm absolute top-6 right-12 transition-colors hover:bg-gray-600"
      {...rest}
    >
      <X className="w-6 h-6" />
    </button>
  )
}
