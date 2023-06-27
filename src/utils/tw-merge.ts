import classnames, { ArgumentArray } from "classnames"
import { twMerge as twMergeLib } from "tailwind-merge"

export function twMerge(...classNames: ArgumentArray) {
  const classesMerged = twMergeLib(classnames(classNames))

  return classesMerged
}
