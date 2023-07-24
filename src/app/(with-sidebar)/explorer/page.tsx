import { Metadata } from "next"

import { getCategories } from "@/requests/categories"

import { ContentPage } from "./ContentPage"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export const metadata: Metadata = {
  title: "Book wise | Explorar",
}

export default async function Explorer() {
  const categories = await getCategories()

  return (
    <ContainerPagesWithSidebar>
      <ContentPage categories={categories} />
    </ContainerPagesWithSidebar>
  )
}
