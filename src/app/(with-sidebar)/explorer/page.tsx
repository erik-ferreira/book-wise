import { Glasses } from "lucide-react"

import { Header } from "@/components/Header"
import { NavBar } from "@/components/NavBar"
import { CardBookShort } from "@/components/Books/CardBookShort"

export default function Explorer() {
  return (
    <>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <NavBar />

      <div className="grid grid-cols-books gap-5 mt-12">
        <CardBookShort bookHasBeenRead />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
        <CardBookShort />
      </div>
    </>
  )
}
