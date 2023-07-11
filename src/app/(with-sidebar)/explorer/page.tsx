import { Glasses } from "lucide-react"

import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

const book = {
  id: "c8176d86-896a-4c21-9219-6bb28cccaa5f",
  name: "14 Hábitos de Desenvolvedores Altamente Produtivos",
  author: "Zeno Rocha",
  summary:
    "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
  cover_url: "/books/14-habitos-de-desenvolvedores-altamente-produtivos.png",
  total_pages: 160,
  created_at: "2023-07-11T02:00:39.264Z",
  ratingAverage: 4,
}

export default function Explorer() {
  return (
    <ContainerPagesWithSidebar>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <Categories />

      <div className="grid grid-cols-books gap-5 mt-12">
        <PopularBookCard book={book} bookHasBeenRead />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
        <PopularBookCard book={book} />
      </div>
    </ContainerPagesWithSidebar>
  )
}
