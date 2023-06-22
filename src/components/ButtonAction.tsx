import { ButtonHTMLAttributes } from "react"
import { X, Check } from "lucide-react"

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: "cancel" | "confirm"
}

export function ButtonAction({ icon = "confirm", ...rest }: ButtonActionProps) {
  const icons = {
    cancel: <X className="w-6 h-6 text-purple-100" />,
    confirm: <Check className="w-6 h-6 text-green-100" />,
  }

  return (
    <button
      className="bg-gray-600 p-2 rounded-sm hover:bg-gray-500 transition-colors"
      {...rest}
    >
      {icons[icon]}
    </button>
  )
}
