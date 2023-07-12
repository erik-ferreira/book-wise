import { Glasses } from "lucide-react"

import { api } from "@/lib/api"

import { Book } from "@/dtos/Book"

import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { PopularBookCard } from "@/components/Books/PopularBookCard"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

interface AllBooksProps extends Book {
  ratingAverage: number
}

interface GetBooksResponse {
  books: AllBooksProps[]
}

async function getBooks(): Promise<AllBooksProps[]> {
  // const revalidate = 60 * 60 * 24 * 7 // 7 days
  const data = await api<GetBooksResponse>("/books", {
    // next: { revalidate },
    cache: "no-cache",
  })

  return data.books
}

export default async function Explorer() {
  const books = await getBooks()

  return (
    <ContainerPagesWithSidebar>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <Categories />

      <div className="grid grid-cols-books gap-5 mt-12">
        {books.map((book) => (
          <PopularBookCard key={book.id} book={book} />
        ))}
      </div>
    </ContainerPagesWithSidebar>
  )
}
