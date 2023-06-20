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
        "w-full px-5 flex items-center rounded border border-gray-500 focus-within:border-green-200",
        {
          "max-w-[27rem]": !isFullWidth,
        }
      )}
    >
      <input
        type="text"
        className="peer bg-transparent flex-1 py-[0.875rem] pr-2 outline-none
        text-gray-200 text-sm
        placeholder:text-gray-400 placeholder:text-sm placeholder:leading-base"
        {...rest}
      />

      <Search className="w-5 h-5 text-gray-500 peer-focus:text-green-200" />
    </label>
  )
}
