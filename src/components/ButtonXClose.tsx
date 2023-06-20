import { X } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

interface ButtonXCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonXClose({ ...rest }: ButtonXCloseProps) {
  return (
    <button
      className="w-10 h-10 p-2 bg-gray-600 text-purple-100 rounded-sm relative top-4 right-4 transition-colors hover:bg-gray-500"
      {...rest}
    >
      <X />
    </button>
  )
}
