import Image from "next/image"
import classnames from "classnames"

import { Rating } from "../Rating"

import algoritmosImg from "../../assets/books/algoritimos.png"

interface CardBookProps {
  bookHasBeenRead?: boolean
}

export function CardBook({ bookHasBeenRead = false }: CardBookProps) {
  return (
    <article
      className={classnames(
        "bg-gray-700 w-full h-fit rounded-md py-[1.125rem] px-5 flex gap-5 card-primary-animation",
        { relative: bookHasBeenRead }
      )}
    >
      {bookHasBeenRead && (
        <span className="absolute -top-[2px] -right-[2px] uppercase font-bold text-xs text-green-100 bg-green-300 rounded-tr-sm rounded-bl-sm py-1 px-3 ">
          Lido
        </span>
      )}

      <Image
        src={algoritmosImg}
        width={64}
        height={96}
        alt=""
        className="rounded-sm w-16 h-24"
      />

      <div className="flex flex-col justify-between">
        <header>
          <h2 className="font-bold leading-short">Entendendo Algoritmos</h2>
          <p className="text-sm leading-base text-gray-400">J.R.R Tolkien</p>
        </header>

        <Rating totalStar={4} />
      </div>
    </article>
  )
}
