import { Star } from "lucide-react"

import { sizes, SizeOptions } from "@/defaults/rating-stars"

interface RatingProps {
  stars: number
  size?: SizeOptions
}

export function RatingStars({ stars, size = "small" }: RatingProps) {
  return (
    <ul className="flex gap-1">
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
