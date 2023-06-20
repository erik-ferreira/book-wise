import Image from "next/image"

import { Rating } from "../Rating"

import algoritmosImg from "../../assets/books/algoritimos.png"

export function CardBookShort() {
  return (
    <article className="bg-gray-700 w-full h-fit rounded-md py-[1.125rem] px-5 flex gap-5 transition-colors border-2 border-transparent hover:cursor-pointer hover:border-2 hover:border-gray-600">
      <Image
        src={algoritmosImg}
        width={64}
        height={96}
        alt=""
        className="rounded-sm w-16 h-24"
      />

      <div>
        <h2 className="font-bold leading-short">Entendendo Algoritmos</h2>
        <p className="text-sm leading-base text-gray-400 mb-5">J.R.R Tolkien</p>

        <Rating totalStar={4} />
      </div>
    </article>
  )
}
