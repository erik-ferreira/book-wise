export interface User {
  id: string
  name: string
  email: string
  avatar_url: string
  created_at: string
}

export type UserProfile = Omit<User, "id" | "email"> & {
  totalPagesRead: number
  totalRatedBooks: number
  totalAuthorsRead: number
  mostReadCategory: string
}
