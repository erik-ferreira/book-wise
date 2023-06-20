import { Glasses } from "lucide-react"

import { Header } from "@/components/Header"
import { NavBar } from "@/components/NavBar"
import { CardBook } from "@/components/Books/CardBook"

export default function Explorer() {
  return (
    <>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <NavBar />

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
    </>
  )
}
