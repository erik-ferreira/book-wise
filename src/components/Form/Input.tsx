import { Search } from "lucide-react"
import { InputHTMLAttributes, forwardRef } from "react"

import { twMerge } from "@/utils/tw-merge"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isFullWidth?: boolean
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isFullWidth = false, error, ...rest }, ref) => {
    return (
      <>
        <label
          className={twMerge(
            "w-full px-5 flex items-center rounded border border-gray-500 ",
            {
              "max-w-[27rem]": !isFullWidth,
              "border-red-500": !!error,
              "focus-within:border-green-200": !error,
            }
          )}
        >
          <input
            type="text"
            ref={ref}
            className="peer bg-transparent flex-1 py-[0.875rem] pr-2 outline-none text-gray-200 text-sm placeholder:text-gray-400 placeholder:text-sm placeholder:leading-base"
            {...rest}
          />

          <button type="submit">
            <Search className="w-5 h-5 text-gray-500 peer-focus:text-green-200" />
          </button>
        </label>

        <span
          className={twMerge("text-xs text-gray-300", {
            "text-red-500": error,
          })}
        >
          {error || "Informe o nome do livro ou author desejado"}
        </span>
      </>
    )
  }
)
