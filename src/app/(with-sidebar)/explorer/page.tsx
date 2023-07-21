// import { getBooks } from "@/requests/books"
import { getCategories } from "@/requests/categories"

import { getServerSession } from "@/hook/getServerSession"

import { ContentPage } from "./ContentPage"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default async function Explorer() {
  const session = await getServerSession()
  const userId = session?.user?.id || ""

  // const paramsToGetBooks = new URLSearchParams()
  // paramsToGetBooks.append("userId", session?.user?.id || "")

  // const [books, categories] = await Promise.all([
  //   getBooks(paramsToGetBooks),
  //   getCategories(),
  // ])

  const categories = await getCategories()

  return (
    <ContainerPagesWithSidebar>
      <ContentPage categories={categories} userId={userId} />
    </ContainerPagesWithSidebar>
  )
}
