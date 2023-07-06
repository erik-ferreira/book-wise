import { User } from "lucide-react"

import { Header } from "@/components/Header"
import { Input } from "@/components/Form/Input"
import { ProfileSection } from "@/components/ProfileSection"
import { UserBookReviewCard } from "@/components/Books/UserBookReviewCard"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default function Profile() {
  return (
    <ContainerPagesWithSidebar className="max-xl:px-20">
      <Header label="Perfil" icon={User} />

      <div className="flex gap-16">
        <section className="flex-1 space-y-6">
          <Input placeholder="Buscar livro avaliado" isFullWidth />

          <UserBookReviewCard />
          <UserBookReviewCard />
          <UserBookReviewCard />
        </section>

        <ProfileSection />
      </div>
    </ContainerPagesWithSidebar>
  )
}
