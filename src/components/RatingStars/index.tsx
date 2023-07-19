import { Star } from "lucide-react"
import { HTMLAttributes } from "react"

import { sizes, SizeOptions } from "@/defaults/rating-stars"

import { twMerge } from "@/utils/tw-merge"

interface RatingProps extends HTMLAttributes<HTMLUListElement> {
  stars: number
  size?: SizeOptions
}

export function RatingStars({
  stars,
  size = "small",
  className,
  ...rest
}: RatingProps) {
  return (
    <ul className={twMerge("flex gap-1", className)} {...rest}>
      {[1, 2, 3, 4, 5].map((star) => (
        <li key={star}>
          <Star
            className={`text-purple-100 ${sizes[size]}`}
            fill={stars >= star ? "#8381D9" : "transparent"}
          />
        </li>
      ))}
    </ul>
  )
}
