import { Metadata } from "next"
import { ReactNode } from "react"
import { Nunito_Sans as NunitoSans } from "next/font/google"

import "./globals.css"

const nunito = NunitoSans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Book wise",
  description: "Plataforma para avaliação e gerenciamento de leituras.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} bg-gray-800 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
