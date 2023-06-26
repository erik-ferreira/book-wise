import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"
import { CardBook } from "@/components/Books/CardBook"
import { TitleSection } from "@/components/TitleSection"
import { CommentBook } from "@/components/Books/CommentBook"
import { LastUserCommentByBook } from "@/components/Books/LastUserCommentByBook"

export default function Home() {
  return (
    <>
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16 max-lg:gap-12 max-[400px]:flex-col">
        <section className="flex-1">
          <TitleSection label="Sua última leitura" />

          <div className="mb-10 max-[400px]:pr-10">
            <LastUserCommentByBook />
          </div>

          <TitleSection label="Avaliações mais recentes" />

          <div className="flex flex-col gap-3 max-[400px]:flex-row max-[400px]:overflow-x-scroll max-[400px]:pb-1">
            <CommentBook />
            <CommentBook />
            <CommentBook />
          </div>
        </section>

        <section className="w-[30%] h-fit max-[400px]:w-full">
          <TitleSection label="Livros populares" />

          <div className="flex flex-col gap-3 max-[400px]:flex-row max-[400px]:overflow-x-scroll max-[400px]:pb-1">
            <CardBook cardBookIsHome />
            <CardBook cardBookIsHome />
            <CardBook cardBookIsHome />
          </div>
        </section>
      </div>
    </>
  )
}
