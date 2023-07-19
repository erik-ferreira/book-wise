import { TextareaHTMLAttributes, forwardRef } from "react"

import { twMerge } from "@/utils/tw-merge"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...rest }, ref) => {
    return (
      <>
        <label
          className={twMerge(
            "block w-full h-36 mt-6  bg-gray-800 border border-gray-500 rounded relative",
            {
              "border-red-500": !!error,
              "focus-within:border-green-200": !error,
            }
          )}
        >
          <textarea
            ref={ref}
            className={twMerge(
              "w-full h-full bg-transparent px-5 py-[0.875rem] outline-none resize-none text-sm leading-base text-gray-200",
              className
            )}
            {...rest}
          />

          <span className="text-xs text-gray-400 leading-base absolute right-1.5 bottom-1">
            0/450
          </span>
        </label>

        <span
          className={twMerge("text-xs text-gray-300 mb-3", {
            "text-red-500": error,
          })}
        >
          {error || "Informe o que achou do livro"}
        </span>
      </>
    )
  }
)
