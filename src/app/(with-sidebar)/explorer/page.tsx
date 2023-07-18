import { api } from "@/lib/api"

import { Category } from "@/dtos/Category"
import { BookFormattedProps, GetBooksResponse } from "@/dtos/Book"

import { ContentPage } from "./ContentPage"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"
import { getServerSession } from "@/hook/getServerSession"

interface GetCategoriesResponse {
  categories: Category[]
}

async function getBooks(userId: string): Promise<BookFormattedProps[]> {
  // const revalidate = 60 * 60 * 24 * 7 // 7 days
  const data = await api<GetBooksResponse>(`/books?userId=${userId}`, {
    // next: { revalidate },
    cache: "no-cache",
  })

  return data.books
}

async function getCategories(): Promise<Category[]> {
  const revalidate = 60 * 60 * 24 * 7 // 7 days
  const data = await api<GetCategoriesResponse>("/categories", {
    next: { revalidate },
  })

  return data.categories
}

export default async function Explorer() {
  const session = await getServerSession()
  const [books, categories] = await Promise.all([
    getBooks(session?.user?.id || ""),
    getCategories(),
  ])

  return (
    <ContainerPagesWithSidebar>
      <ContentPage categories={categories} books={books} />
    </ContainerPagesWithSidebar>
  )
}
