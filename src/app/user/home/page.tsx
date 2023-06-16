import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"
import { CardBook } from "@/components/CardBook"
import { CardBookShort } from "@/components/CardBookShort"

export default function Home() {
  return (
    <main className="w-full pt-[4.5rem] pl-24 pr-[4.75rem]">
      <Header label="Início" icon={LineChart} />

      <div className="flex gap-16">
        <CardBook title="Avaliações mais recentes" />

        <CardBookShort title="Livros populares" />
      </div>
    </main>
  )
}
