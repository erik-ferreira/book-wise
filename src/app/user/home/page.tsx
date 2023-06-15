import { LineChart } from "lucide-react"

import { Header } from "@/components/Header"

export default function Home() {
  return (
    <main className="w-full pt-[4.5rem] pl-24 pr-[4.75rem]">
      <Header label="Início" icon={LineChart} />
    </main>
  )
}
