import Image from "next/image"
import { ButtonHTMLAttributes } from "react"

import GithubIcon from "../assets/icons/github.png"
import GoogleIcon from "../assets/icons/google.png"
import RocketIcon from "../assets/icons/rocket.png"

const variants = {
  google: { title: "Entrar com Google", icon: GoogleIcon },
  github: { title: "Entrar com Github", icon: GithubIcon },
  visitor: { title: "Acessar como Visitante", icon: RocketIcon },
} as const

type VariantsProps = keyof typeof variants

interface ButtonSignInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantsProps
}

export function ButtonSignIn({
  variant = "google",
  ...rest
}: ButtonSignInProps) {
  return (
    <button
      type="button"
      className="w-full bg-gray-600 py-5 px-6 flex items-center gap-5 rounded-md text-gray-200 font-bold text-lg leading-short"
      {...rest}
    >
      <Image src={variants[variant].icon} alt="" width={32} height={32} />
      {variants[variant].title}
    </button>
  )
}
