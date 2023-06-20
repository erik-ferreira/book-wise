import { Glasses } from "lucide-react"

import { Header } from "@/components/Header"
import { NavBar } from "@/components/NavBar"

export default function Explorer() {
  return (
    <>
      <Header label="Explorar" icon={Glasses} showInputSearch />

      <NavBar />
    </>
  )
}
