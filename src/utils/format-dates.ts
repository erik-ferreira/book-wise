import ptBR from "date-fns/locale/pt-BR"
import { getYear, formatDistanceToNow } from "date-fns"

export function formatDistanceDateToNow(date: Date) {
  const phraseDistance = formatDistanceToNow(date, { locale: ptBR })

  const dateFormatted = phraseDistance
    .split("")
    .map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase()
      } else {
        return letter
      }
    })
    .join("")

  return dateFormatted
}

export function formatYear(date: Date) {
  const year = getYear(date)

  return year
}
