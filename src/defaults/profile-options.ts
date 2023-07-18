import {
  Library,
  Bookmark,
  BookOpen,
  LucideIcon,
  UserCheck2,
} from "lucide-react"

export interface ProfileOptionsProps {
  id: number
  label: string | number
  description: string
  icon: LucideIcon
}

export const optionsDefault = [
  {
    description: "Páginas lidas",
    icon: BookOpen,
  },
  {
    description: "Livros avaliados",
    icon: Library,
  },
  {
    description: "Autores lidos",
    icon: UserCheck2,
  },
  {
    description: "Categoria mais lida",
    icon: Bookmark,
  },
]
