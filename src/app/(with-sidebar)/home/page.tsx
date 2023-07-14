import { LineChart } from "lucide-react"

import { api } from "@/lib/api"

import { Header } from "@/components/Header"
import { TitleSection } from "@/components/TitleSection"
import { BookReviewCard } from "@/components/Books/BookReviewCard"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { LastReviewByUserToBook } from "@/components/Books/LastReviewByUserToBook"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

import { Rating } from "@/dtos/Rating"
import { BookFormattedProps } from "@/dtos/Book"

interface RatingResponse {
  ratings: Rating[]
}

interface BookMostRatedResponse {
  booksMostRated: BookFormattedProps[]
}

async function getRecentBooksRatings(): Promise<Rating[]> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<RatingResponse>("/ratings", { next: { revalidate } })

  return data.ratings
}

async function getBooksMostRated(): Promise<BookFormattedProps[]> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<BookMostRatedResponse>("/books/most-rated", {
    next: { revalidate },
  })

  return data.booksMostRated
}

export default async function Home() {
  const [recentBooksRatings, booksMostRated] = await Promise.all([
    getRecentBooksRatings(),
    getBooksMostRated(),
  ])

  return (
    <ContainerPagesWithSidebar className="max-[450px]:pr-0">
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16 max-lg:gap-12 max-[450px]:flex-col">
        <section className="flex-1">
          <TitleSection label="Sua última leitura" />

          <div className="mb-10 max-[450px]:pr-10">
            <LastReviewByUserToBook />
          </div>

          <TitleSection label="Avaliações mais recentes" />

          <div className="flex flex-col gap-3 max-[450px]:flex-row max-[450px]:overflow-x-auto max-[450px]:pb-1">
            {recentBooksRatings.map((rating) => (
              <BookReviewCard key={rating.id} rating={rating} />
            ))}
          </div>
        </section>

        <section className="w-[30%] h-fit max-[450px]:w-full">
          <TitleSection label="Livros populares" />

          <div className="flex flex-col gap-3 max-[450px]:flex-row max-[450px]:overflow-x-auto max-[450px]:pb-1">
            {booksMostRated.map((book) => (
              <PopularBookCard key={book.id} book={book} cardBookInHome />
            ))}
          </div>
        </section>
      </div>
    </ContainerPagesWithSidebar>
  )
}
