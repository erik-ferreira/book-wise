import { User as IconUser } from "lucide-react"

import { api } from "@/lib/api"

import { Header } from "@/components/Header"
import { Input } from "@/components/Form/Input"
import { ProfileSection } from "@/components/ProfileSection"
import { UserBookReviewCard } from "@/components/Books/UserBookReviewCard"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

import { getServerSession } from "@/hook/getServerSession"

import { UserProfile } from "@/dtos/User"

interface ProfileResponse {
  user: UserProfile
}

async function getProfileData(userId: string): Promise<UserProfile> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<ProfileResponse>(`/profile/${userId}`, {
    // next: { revalidate }
    cache: "no-cache",
  })

  return data.user
}

export default async function Profile() {
  const session = await getServerSession()
  const user = await getProfileData(session?.user.id!)

  return (
    <ContainerPagesWithSidebar className="max-xl:px-20">
      <Header label="Perfil" icon={IconUser} />

      <div className="flex gap-16">
        <section className="flex-1 space-y-6">
          <Input placeholder="Buscar livro avaliado" isFullWidth />

          {user.ratings.map((rating) => (
            <UserBookReviewCard key={rating.id} rating={rating} />
          ))}
          {/* <UserBookReviewCard /> */}
          {/* <UserBookReviewCard /> */}
        </section>

        <ProfileSection user={user} />
      </div>
    </ContainerPagesWithSidebar>
  )
}
