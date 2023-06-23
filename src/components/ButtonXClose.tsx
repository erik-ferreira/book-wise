import { X } from "lucide-react"
import classnames from "classnames"
import { ButtonHTMLAttributes } from "react"

interface ButtonXCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isAbsolute?: boolean
}

export function ButtonXClose({
  className,
  isAbsolute = true,
  ...rest
}: ButtonXCloseProps) {
  return (
    <button
      className={classnames(
        `w-6 h-6 text-gray-400 rounded-sm transition-colors hover:bg-gray-600 ${className}`,
        {
          "absolute op-6 right-12": isAbsolute,
        }
      )}
      {...rest}
    >
      <X className="w-6 h-6" />
    </button>
  )
}
