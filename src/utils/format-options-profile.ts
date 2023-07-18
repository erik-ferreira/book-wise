import { DefaultResponseDbUserProps } from "@/dtos/User"

interface CategoryReadProps {
  [key: string]: number
}

export function formatOptionsProfile(user: DefaultResponseDbUserProps) {
  const totalPagesRead = user.ratings.reduce(
    (sum, rating) => sum + rating.book.total_pages,
    0
  )

  const totalRatedBooks = user.ratings.length

  const allAuthors = user.ratings.map((rating) => rating.book.author)
  const totalAuthorsRead = allAuthors.filter(
    (author, index) => allAuthors.indexOf(author) === index
  ).length

  // to calculate most read category
  const categories = user.ratings.flatMap((rating) => {
    return rating.book.categories.map((category) => category.category.name)
  })
  const categoriesRead = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1

    return acc
  }, {} as CategoryReadProps)

  let mostReadCategory = ""
  let maxValue = 0
  for (const prop in categoriesRead) {
    if (categoriesRead[prop] > maxValue) {
      maxValue = categoriesRead[prop]
      mostReadCategory = prop
    }
  }

  return {
    totalPagesRead,
    totalRatedBooks,
    totalAuthorsRead,
    mostReadCategory,
  }
}
