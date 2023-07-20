import { api } from "@/lib/api"

import { Category } from "@/dtos/Category"

interface GetCategoriesResponse {
  categories: Category[]
}

export async function getCategories(): Promise<Category[]> {
  const revalidate = 60 * 60 * 24 * 7 // 7 days
  const data = await api<GetCategoriesResponse>("/categories", {
    next: { revalidate },
  })

  return data.categories
}
