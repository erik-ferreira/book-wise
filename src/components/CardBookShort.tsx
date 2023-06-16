import Image from "next/image"

import { Rating } from "./Rating"
import { TitleSection } from "./TitleSection"

import algoritmosImg from "../assets/books/algoritimos.png"

interface CardBookShortProps {
  title: string
}

export function CardBookShort({ title }: CardBookShortProps) {
  return (
    <section className="w-[324px]">
      <TitleSection label={title} href="/all" />

      <article className="bg-gray-700 w-full h-[130px] rounded-md py-[1.125rem] px-5 flex gap-5">
        <Image
          src={algoritmosImg}
          width={64}
          height={96}
          alt=""
          className="rounded-sm w-16 h-24"
        />

        <div>
          <h2 className="font-bold leading-short">Entendendo Algoritmos</h2>
          <p className="text-sm leading-base text-gray-400 mb-5">
            J.R.R Tolkien
          </p>

          <Rating totalStar={4} />
        </div>
      </article>
    </section>
  )
}
