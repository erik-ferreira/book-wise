import { User } from "lucide-react"

import { Input } from "@/components/Input"
import { Header } from "@/components/Header"
import { ProfileSection } from "@/components/ProfileSection"
import { CommentBookUser } from "@/components/Books/CommentBookUser"
import { ContainerPagesWithSidebar } from "@/components/ContainerPagesWithSidebar"

export default function Profile() {
  return (
    <ContainerPagesWithSidebar className="max-xl:px-20">
      <Header label="Perfil" icon={User} />

      <div className="flex gap-16">
        <section className="flex-1 space-y-6">
          <Input placeholder="Buscar livro avaliado" isFullWidth />

          <CommentBookUser />
          <CommentBookUser />
          <CommentBookUser />
        </section>

        <ProfileSection />
      </div>
    </ContainerPagesWithSidebar>
  )
}
