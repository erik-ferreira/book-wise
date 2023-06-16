import { User } from "lucide-react"

import { Header } from "@/components/Header"
import { BookUser } from "@/components/Books/BookUser"

export default function Profile() {
  return (
    <>
      <Header
        label="Início"
        icon={User}
        // showInputSearch
        // inputSearchProps={{ placeholder: "Buscar livro avaliado" }}
      />

      <div className="flex gap-16">
        <section className="w-[608px]">
          <BookUser />
        </section>
        Profile
      </div>
    </>
  )
}
