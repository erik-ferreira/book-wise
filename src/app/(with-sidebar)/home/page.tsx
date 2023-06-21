import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"
import { TitleSection } from "@/components/TitleSection"
import { CommentBook } from "@/components/Books/CommentBook"
import { CardBook } from "@/components/Books/CardBook"
import { LastUserCommentByBook } from "@/components/Books/LastUserCommentByBook"

export default function Home() {
  return (
    <>
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16">
        <section className="flex-1">
          <TitleSection label="Sua última leitura" />

          <div className="mb-10">
            <LastUserCommentByBook />
          </div>

          <TitleSection label="Avaliações mais recentes" />

          <div className="space-y-3">
            <CommentBook />
            <CommentBook />
            <CommentBook />
          </div>
        </section>

        <section className="w-[30%] h-fit">
          <TitleSection label="Livros populares" href="/all" />

          <div className="space-y-3">
            <CardBook />
            <CardBook />
            <CardBook />
          </div>
        </section>
      </div>
    </>
  )
}
