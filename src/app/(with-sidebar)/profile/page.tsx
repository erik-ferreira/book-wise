import { User as IconUser } from "lucide-react"

import { getServerSession } from "@/hook/getServerSession"
import { getProfileData, getUserRatings } from "@/requests/profile"

import { Header } from "@/components/Header"
import { ContentUserRatings } from "./ContentUserRatings"
import { ProfileSection } from "@/components/ProfileSection"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

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
