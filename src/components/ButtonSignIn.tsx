"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"

import { twMerge } from "@/utils/tw-merge"

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
  className,
  ...rest
}: ButtonSignInProps) {
  const router = useRouter()

  function handleNavigate() {
    router.push("/home")
  }

  return (
    <button
      type="button"
      className={twMerge(
        "w-full bg-gray-600 py-5 px-6 flex items-center gap-5 rounded-md text-gray-200 font-bold text-lg leading-short hover:bg-gray-500 transition-colors",
        className
      )}
      onClick={handleNavigate}
      {...rest}
    >
      <div className="relative w-8 h-8">
        <Image src={variants[variant].icon} alt="" fill />
      </div>
      {variants[variant].title}
    </button>
  )
}
