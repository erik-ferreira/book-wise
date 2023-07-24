import { Metadata } from "next"
import { LineChart } from "lucide-react"

import { getBooksMostRated } from "@/requests/books"
import { getRecentBooksRatings } from "@/requests/ratings"

import { Header } from "@/components/Header"
import { TitleSection } from "@/components/TitleSection"
import { BookReviewCard } from "@/components/Books/BookReviewCard"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { LastReviewByUserToBook } from "@/components/Books/LastReviewByUserToBook"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

import { getServerSession } from "@/hook/getServerSession"

export const metadata: Metadata = {
  title: "Book wise | Home",
}

export default async function Home() {
  const session = await getServerSession()
  const isSigned = !!session

  const [recentBooksRatings, booksMostRated] = await Promise.all([
    getRecentBooksRatings(),
    getBooksMostRated(),
  ])

  return (
    <ContainerPagesWithSidebar className="max-[450px]:pr-0">
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16 max-lg:gap-12 max-[450px]:flex-col">
        <section className="flex-1">
          {isSigned && <LastReviewByUserToBook userId={session?.user.id} />}

          <TitleSection label="Avaliações mais recentes" />

          <div className="flex flex-col gap-3 max-[450px]:flex-row max-[450px]:overflow-x-auto max-[450px]:pb-1 max-[450px]:w-[90%]">
            {recentBooksRatings.map((rating) => (
              <BookReviewCard key={rating.id} rating={rating} />
            ))}
          </div>
        </section>

        <section className="w-[30%] h-fit max-[450px]:w-full">
          <TitleSection label="Livros populares" />

          <div className="flex flex-col gap-3 max-[450px]:flex-row max-[450px]:overflow-x-auto max-[450px]:pb-1 max-[450px]:w-[90%]">
            {booksMostRated.map((book) => (
              <PopularBookCard key={book.id} book={book} cardBookInHome />
            ))}
          </div>
        </section>
      </div>
    </ContainerPagesWithSidebar>
  )
}
