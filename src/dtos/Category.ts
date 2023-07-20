export interface Category {
  id: string
  name: string
}

// ----------------------- types response -----------------------

export interface GetCategoriesResponse {
  categories: Category[]
}
