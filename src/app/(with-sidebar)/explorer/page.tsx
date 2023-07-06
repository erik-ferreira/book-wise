import { Glasses } from "lucide-react"

import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default function Explorer() {
  return (
    <ContainerPagesWithSidebar>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <Categories />

      <div className="grid grid-cols-books gap-5 mt-12">
        <PopularBookCard bookHasBeenRead />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
        <PopularBookCard />
      </div>
    </ContainerPagesWithSidebar>
  )
}
