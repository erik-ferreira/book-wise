import { Star } from "lucide-react"

interface RatingProps {
  totalStar: number
}

export function Rating({ totalStar }: RatingProps) {
  return (
    <ul className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <li key={star}>
            <Star className="w-4 h-4 text-purple-100" />
          </li>
        )
      })}
    </ul>
  )
}
