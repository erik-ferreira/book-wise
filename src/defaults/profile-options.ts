import {
  Library,
  Bookmark,
  BookOpen,
  LucideIcon,
  UserCheck2,
} from "lucide-react"

export interface OptionsProfileProps {
  id: number
  label: string | number
  description: string
  icon: LucideIcon
}

export const optionsProfile: OptionsProfileProps[] = [
  {
    id: 1,
    label: 3853,
    description: "Páginas lidas",
    icon: BookOpen,
  },
  {
    id: 2,
    label: 10,
    description: "Livros avaliados",
    icon: Library,
  },
  {
    id: 3,
    label: 8,
    description: "Autores lidos",
    icon: UserCheck2,
  },
  {
    id: 4,
    label: "Computação",
    description: "Categoria mais lida",
    icon: Bookmark,
  },
]
