import { Profile } from "./Profile"

import {
  optionsDefault,
  ProfileOptionsProps,
} from "../defaults/profile-options"

import { UserProfile } from "@/dtos/User"

import { formatYear } from "@/utils/format-dates"

interface ProfileSectionProps {
  user: UserProfile
}

export function ProfileSection({ user }: ProfileSectionProps) {
  const list = [
    user.totalPagesRead,
    user.totalRatedBooks,
    user.totalAuthorsRead,
    user.mostReadCategory,
  ]

  const profileOptions: ProfileOptionsProps[] = Array.from({ length: 4 }).map(
    (_, i) => {
      return {
        id: i + 1,
        label: list[i],
        ...optionsDefault[i],
      }
    }
  )

  return (
    <section className="w-[30%] h-fit flex flex-col items-center border-l border-l-gray-700 max-xl:w-[35%]">
      <Profile
        size="large"
        src={user.avatar_url}
        username={user.name}
        description={`membro desde ${formatYear(new Date(user.created_at))}`}
      />

      <div className="w-8 h-1 rounded-full bg-gradient-to-b from-start to-end my-8 mx-auto" />

      <ul className="space-y-10 px-2 py-5">
        {profileOptions.map(({ icon: Icon, ...option }) => (
          <li key={option.id} className="flex gap-5 items-center">
            <Icon className="text-green-100 w-8 h-8 max-xl:w-7 max-xl:h-7 max-lg:w-6 max-lg:h-6" />

            <div className="flex flex-col">
              <span className="font-bold leading-short text-gray-200 max-xl:text-sm">
                {option.label}
              </span>
              <span className="text-sm leading-base text-gray-300 max-lg:text-xs">
                {option.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
