import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"
import { CardBook } from "@/components/CardBook"
import { TitleSection } from "@/components/TitleSection"

export default function Home() {
  return (
    <main className="w-full pt-[4.5rem] pl-24 pr-[4.75rem]">
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16">
        <CardBook title="Avaliações mais recentes" />

        <section className="w-[324px]">
          <TitleSection label="Livros populares" href="/all" />

          <article className="bg-gray-700 w-full h-[130px]">a</article>
        </section>
      </div>
    </main>
  )
}
