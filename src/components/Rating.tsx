import { Star } from "lucide-react"

const sizes = {
  small: "w-4 h-4",
  normal: "w-5 h-5",
  large: "w-7 h-7",
}
interface RatingProps {
  size?: keyof typeof sizes
  totalStar: number
}

export function Rating({ size = "small", totalStar }: RatingProps) {
  return (
    <ul className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <li key={star}>
            <Star className={`text-purple-100 ${sizes[size]}`} />
          </li>
        )
      })}
    </ul>
  )
}
