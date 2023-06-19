import Image from "next/image"

import { ButtonSignIn } from "@/components/ButtonSignIn"

import backgroundImage from "../assets/background.png"

export default function Login() {
  return (
    <main className="flex items-center p-5 h-screen">
      <Image
        src={backgroundImage}
        alt=""
        width={598}
        height={912}
        priority
        className="max-w-[38%] w-full h-full"
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
