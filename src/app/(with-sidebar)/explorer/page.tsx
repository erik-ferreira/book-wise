import { api } from "@/lib/api"

import { Category } from "@/dtos/Category"

import { ContentPage, AllBooksProps } from "./ContentPage"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

interface GetBooksResponse {
  books: AllBooksProps[]
}

interface GetCategoriesResponse {
  categories: Category[]
}

async function getBooks(): Promise<AllBooksProps[]> {
  // const revalidate = 60 * 60 * 24 * 7 // 7 days
  const data = await api<GetBooksResponse>("/books", {
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
  const [books, categories] = await Promise.all([getBooks(), getCategories()])

  return (
    <ContainerPagesWithSidebar>
      <ContentPage categories={categories} books={books} />
    </ContainerPagesWithSidebar>
  )
}
