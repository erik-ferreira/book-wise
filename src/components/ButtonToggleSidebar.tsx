import { Menu, X } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

import { twMerge } from "@/utils/tw-merge"

interface ButtonToggleSidebarProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "open" | "close"
}

export function ButtonToggleSidebar({
  className,
  variant = "open",
  ...rest
}: ButtonToggleSidebarProps) {
  const Icon = variant === "open" ? Menu : X

  return (
    <button
      className={twMerge(
        "w-8 h-8 items-center justify-center z-10 hidden max-[650px]:flex max-[650px]:absolute max-[650px]:top-5",
        { "max-[650px]:left-3": variant === "open" },
        { "max-[650px]:right-5": variant === "close" }
      )}
      {...rest}
    >
      <Icon className="w-7 h-7 text-green-100" />
    </button>
  )
}
