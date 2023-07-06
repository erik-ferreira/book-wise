import { Star } from "lucide-react"

interface RatingProps {
  stars: number
  onStars: (newValue: number) => void
}

export function RatingStarsInput({ stars, onStars }: RatingProps) {
  function handleUpdatedValue(newValue: number) {
    onStars(newValue)
  }

  return (
    <ul className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <li key={star}>
            <button type="button" onClick={() => handleUpdatedValue(star)}>
              <Star
                className="text-purple-100 w-7 h-7"
                fill={stars >= star ? "#8381D9" : "transparent"}
              />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
