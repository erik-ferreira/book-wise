"use client"

import classnames from "classnames"
import * as AvatarUI from "@radix-ui/react-avatar"

import { cutFirstLetterOfFirstTwoNames } from "@/utils/cut-first-letter-of-first-two-names"

export type SizeProps = "small" | "normal" | "large"

interface AvatarProps {
  src?: string
  size: SizeProps
  username: string
}

export function Avatar({ src, size, username }: AvatarProps) {
  const fallback = cutFirstLetterOfFirstTwoNames(username)

  return (
    <AvatarUI.Root
      className={classnames(
        "rounded-full flex items-center justify-center bg-gradient-to-b from-start to-end",
        {
          "w-9 h-9": size === "small",
          "w-11 h-11": size === "normal",
          "w-[4.75rem] h-[4.75rem]": size === "large",
        }
      )}
    >
      <AvatarUI.Image
        src={src}
        alt="Erik Ferreira"
        className={classnames("rounded-full object-contain", {
          "w-8 h-8": size === "small",
          "w-10 h-10": size === "normal",
          "w-[4.5rem] h-[4.5rem]": size === "large",
        })}
      />
      <AvatarUI.Fallback
        className="font-bold text-gray-600 text-sm"
        delayMs={600}
      >
        {fallback}
      </AvatarUI.Fallback>
    </AvatarUI.Root>
  )
}
