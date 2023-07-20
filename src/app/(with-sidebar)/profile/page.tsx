import { User as IconUser } from "lucide-react"

import { api } from "@/lib/api"

import { Header } from "@/components/Header"
import { ContentUserRatings } from "./ContentUserRatings"
import { ProfileSection } from "@/components/ProfileSection"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

import { getServerSession } from "@/hook/getServerSession"

import { UserProfile } from "@/dtos/User"
import { UserRatingProps } from "@/dtos/Rating"

interface ProfileResponse {
  user: UserProfile
}

interface UserRatingsResponse {
  userRatings: UserRatingProps[]
}

async function getProfileData(userId: string): Promise<UserProfile> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<ProfileResponse>(`/profile/${userId}`, {
    // next: { revalidate }
    cache: "no-cache",
  })

  return data.user
}

async function getUserRatings(userId: string): Promise<UserRatingProps[]> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<UserRatingsResponse>(`/profile/${userId}/ratings`, {
    // next: { revalidate }
    cache: "no-cache",
  })

  return data.userRatings
}

export default async function Profile() {
  const session = await getServerSession()
  const [user, userRatings] = await Promise.all([
    getProfileData(session?.user.id!),
    getUserRatings(session?.user.id!),
  ])

  return (
    <ContainerPagesWithSidebar className="max-xl:px-20">
      <Header label="Perfil" icon={IconUser} />

      <div className="flex gap-16 max-[500px]:flex-col-reverse">
        <ContentUserRatings ratings={userRatings} />

        <ProfileSection
          user={user}
          className="max-[500px]:border-l-0 max-[500px]:border-b max-[500px]:border-b-gray-700 max-[500px]:w-full"
        />
      </div>
    </ContainerPagesWithSidebar>
  )
}
