import { Glasses } from "lucide-react"

import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { CardBook } from "@/components/Books/CardBook"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default function Explorer() {
  return (
    <ContainerPagesWithSidebar>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <Categories />

      <div className="grid grid-cols-books gap-5 mt-12">
        <CardBook bookHasBeenRead />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
      </div>
    </ContainerPagesWithSidebar>
  )
}
