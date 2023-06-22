"use client"

import { useState } from "react"
import { Star } from "lucide-react"

const sizes = {
  small: "w-4 h-4",
  normal: "w-5 h-5",
  large: "w-7 h-7",
}
interface RatingProps {
  size?: keyof typeof sizes
  value: number
  onUpdatedValue?: (newValue: number) => void
}

export function Rating({ size = "small", value, onUpdatedValue }: RatingProps) {
  const ratingIsEditable = !!onUpdatedValue
  const [hoverRating, setHoverRating] = useState(0)

  function handleUpdatedValue(newValue: number) {
    if (ratingIsEditable) {
      onUpdatedValue(newValue)
    }
  }

  function calculateFilledStar(star: number) {
    if (hoverRating >= star) {
      return "#8381D9"
    } else if (!hoverRating && value >= star) {
      return "#8381D9"
    }

    return "transparent"
  }

  return (
    <ul
      className="flex gap-1"
      onMouseLeave={() => {
        if (ratingIsEditable) {
          setHoverRating(0)
        }
      }}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fillStar = calculateFilledStar(star)

        return (
          <li key={star}>
            <button
              type="button"
              onClick={() => handleUpdatedValue(star)}
              onMouseEnter={() => {
                if (ratingIsEditable) {
                  setHoverRating(star)
                }
              }}
            >
              <Star
                className={`text-purple-100 ${sizes[size]}`}
                fill={fillStar}
              />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
