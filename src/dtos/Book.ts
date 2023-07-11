export interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
}

export interface BookMostRated extends Book {
  ratingAverage: number
}
