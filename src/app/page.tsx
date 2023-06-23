import Image from "next/image"

import { ButtonSignIn } from "@/components/ButtonSignIn"

import logoPng from "../assets/logo-large.png"
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
        className="max-w-[40%] w-full h-full object-cover rounded-[10px]
        max-xl:max-w-[45%] max-md:hidden"
      />

      <div
        className="max-w-[372px] w-full mx-auto
        max-xl:max-w-[300px] max-lg:max-w-[250px] max-md:max-w-[372px]"
      >
        <Image
          src={logoPng}
          alt="Book Wise"
          width={232}
          height={58}
          className="hidden max-md:block max-md:mb-8"
        />

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
