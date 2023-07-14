import { BookFormattedProps, DefaultResponseDbBookProps } from "@/dtos/Book"

interface FormatBookProps {
  books: DefaultResponseDbBookProps[]
  hasSession?: boolean
  userId?: string
}

export function formatBooks({
  books,
  hasSession = false,
  userId,
}: FormatBookProps): BookFormattedProps[] {
  const formattedBooks = books.map((book) => {
    const amountRatings = book.ratings?.length
    const totalStarOnRating = book.ratings.reduce(
      (sum, rating) => sum + rating.rate,
      0
    )
    const ratingAverage =
      amountRatings > 0 ? Math.floor(totalStarOnRating / amountRatings) : 0

    const categories = book?.categories?.map(
      (category) => category?.category?.id
    )

    let bookWasRead = false

    if (hasSession) {
      bookWasRead = book.ratings.some((rating) => rating.user_id === userId)
    }

    const newBook = {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at.toString(),
      wasRead: bookWasRead,
      ratingAverage,
      amountRatings,
      categories,
      ratings: book.ratings,
      teste: "Erik",
    } as BookFormattedProps

    return newBook
  })

  return formattedBooks
}
