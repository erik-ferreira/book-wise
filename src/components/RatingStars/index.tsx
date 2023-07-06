import { Star } from "lucide-react"

interface RatingProps {
  stars: number
}

export function RatingStars({ stars }: RatingProps) {
  return (
    <ul className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <li key={star}>
          <Star
            className={`text-purple-100 w-5 h-5`}
            fill={stars >= star ? "#8381D9" : undefined}
          />
        </li>
      ))}
    </ul>
  )
}

// DialogPortalDetailsBook
// size = 'normal'

// FormEvaluate
// size = 'large'

// default | size = 'smal'

// const sizes = {
//   small: "w-4 h-4",
//   normal: "w-5 h-5",
//   large: "w-7 h-7",
// }
