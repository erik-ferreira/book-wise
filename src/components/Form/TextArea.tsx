import { TextareaHTMLAttributes } from "react"

import { twMerge } from "@/utils/tw-merge"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <label className="block w-full h-36 mt-6 mb-3 bg-gray-800 border border-gray-500 rounded focus-within:border-green-200 relative">
      <textarea
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
  )
}
