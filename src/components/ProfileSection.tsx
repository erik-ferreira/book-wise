import {
  BookOpen,
  Library,
  UserCheck2,
  Bookmark,
  LucideIcon,
} from "lucide-react"

import { Profile } from "./Profile"

interface OptionsProfileProps {
  id: number
  label: string | number
  description: string
  icon: LucideIcon
}

export function ProfileSection() {
  const optionsProfile: OptionsProfileProps[] = [
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

  return (
    <section className="w-[30%] h-fit flex flex-col items-center border-l border-l-gray-700">
      <Profile
        size="large"
        username="Erik Ferreira"
        description="membro desde 2019"
      />

      <div className="w-8 h-1 rounded-full bg-gradient-to-b from-start to-end my-8 mx-auto" />

      <ul className="space-y-10 py-5 px-14">
        {optionsProfile.map(({ icon: Icon, ...option }) => (
          <li key={option.id} className="flex gap-5 items-center">
            <Icon className="text-green-100 w-8 h-8" />

            <div className="flex flex-col">
              <span className="font-bold leading-short text-gray-200">
                {option.label}
              </span>
              <span className="text-sm leading-base text-gray-300">
                {option.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
