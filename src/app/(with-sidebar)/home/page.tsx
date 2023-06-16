import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"
import { CardBook } from "@/components/CardBook"
import { TitleSection } from "@/components/TitleSection"
import { CardBookShort } from "@/components/CardBookShort"

export default function Home() {
  return (
    <main className="w-full pt-[4.5rem] pl-24 pr-[4.75rem]">
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16">
        <section className="w-[608px]">
          <TitleSection label="Avaliações mais recentes" />

          <div className="space-y-3">
            <CardBook />
            <CardBook />
            <CardBook />
          </div>
        </section>

        <section className="w-[324px]">
          <TitleSection label="Livros populares" href="/all" />

          <div className="space-y-3">
            <CardBookShort />
            <CardBookShort />
            <CardBookShort />
          </div>
        </section>
      </div>
    </main>
  )
}
