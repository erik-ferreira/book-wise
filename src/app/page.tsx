import Image from "next/image"

import backgroundImage from "../assets/background.png"
import { ButtonSignIn } from "@/components/ButtonSignIn"

export default function Home() {
  return (
    <main className="flex items-center p-5">
      <Image
        src={backgroundImage}
        alt=""
        width={598}
        height={912}
        className="h-bg-main max-w-[38%] w-full"
      />

      <div className="mx-auto w-[372px]">
        <h1 className="text-2xl leading-short font-bold">Boas vindas!</h1>
        <p className="text-md leading-base text-gray-200">
          Faça seu login ou acesse como visitante.
        </p>

        <div className="mt-10 space-y-4">
          <ButtonSignIn variant="google" />
          <ButtonSignIn variant="github" />
          <ButtonSignIn variant="visitor" />
        </div>
      </div>
    </main>
  )
}
