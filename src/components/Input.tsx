import classnames from "classnames"
import { Search } from "lucide-react"
import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isFullWidth?: boolean
}

export function Input({ isFullWidth = false, ...rest }: InputProps) {
  return (
    <label
      className={classnames(
        "w-full px-5 flex items-center border border-gray-500 rounded focus-within:outline",
        {
          "max-w-[27rem]": !isFullWidth,
        }
      )}
    >
      <input
        type="text"
        className="bg-transparent flex-1 py-[0.875rem] pr-2 outline-none placeholder:text-gray-400 placeholder:text-sm"
        {...rest}
      />

      <Search className="text-gray-500 w-5 h-5" />
    </label>
  )
}
