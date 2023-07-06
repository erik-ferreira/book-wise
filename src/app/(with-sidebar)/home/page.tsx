import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"
import { TitleSection } from "@/components/TitleSection"
import { BookReviewCard } from "@/components/Books/BookReviewCard"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { LastReviewByUserToBook } from "@/components/Books/LastReviewByUserToBook"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default function Home() {
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
            <BookReviewCard />
            <BookReviewCard />
            <BookReviewCard />
          </div>
        </section>

        <section className="w-[30%] h-fit max-[450px]:w-full">
          <TitleSection label="Livros populares" />

          <div className="flex flex-col gap-3 max-[450px]:flex-row max-[450px]:overflow-x-auto max-[450px]:pb-1">
            <PopularBookCard cardBookInHome />
            <PopularBookCard cardBookInHome />
            <PopularBookCard cardBookInHome />
          </div>
        </section>
      </div>
    </ContainerPagesWithSidebar>
  )
}
