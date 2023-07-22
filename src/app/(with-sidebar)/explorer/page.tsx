import { getCategories } from "@/requests/categories"

import { ContentPage } from "./ContentPage"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default async function Explorer() {
  const categories = await getCategories()

  return (
    <ContainerPagesWithSidebar>
      <ContentPage categories={categories} />
    </ContainerPagesWithSidebar>
  )
}
