import { User } from "lucide-react"

import { Input } from "@/components/Input"
import { Header } from "@/components/Header"
import { BookUser } from "@/components/Books/BookUser"
import { ProfileSection } from "@/components/ProfileSection"

export default function Profile() {
  return (
    <>
      <Header label="Início" icon={User} />

      <div className="flex gap-16">
        <section className="w-[608px] space-y-6">
          <Input placeholder="Buscar livro avaliado" isFullWidth />

          <BookUser />
          <BookUser />
          <BookUser />
        </section>

        <ProfileSection />
      </div>
    </>
  )
}
