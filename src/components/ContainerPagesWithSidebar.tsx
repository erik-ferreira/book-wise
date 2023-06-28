import { twMerge } from "@/utils/tw-merge"
import { HTMLAttributes } from "react"

interface ContainerPagesWithSidebarProps
  extends HTMLAttributes<HTMLDivElement> {}

export function ContainerPagesWithSidebar({
  className,
  ...rest
}: ContainerPagesWithSidebarProps) {
  return (
    <div
      className={twMerge(
        "w-full h-screen pt-18 px-24 pb-[3.25rem] overflow-y-scroll max-lg:px-18 max-md:px-12 max-md:relative peer-[.responsive-sidebar-with-toggle]:overflow-y-hidden",
        className
      )}
      {...rest}
    />
  )
}
