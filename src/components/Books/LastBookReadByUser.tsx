import Image from "next/image"

import { Rating } from "../Rating"

import hobbitBookPng from "../../assets/books/hobbit.png"

export function LastBookReadByUser() {
  return (
    <article className="w-full h-fit bg-gray-600 rounded-md p-6 flex gap-6 card-secondary-animation">
      <Image
        src={hobbitBookPng}
        width={108}
        height={152}
        alt=""
        className="w-[108px] h-[152px] rounded"
      />
      <div>
        <header>
          <div className="flex items-center justify-between mb-3">
            <time className="text-sm leading-base text-gray-300">
              Há 2 dias
            </time>
            <Rating totalStar={4} />
          </div>

          <h2 className="font-bold leading-short">O Hobbit</h2>
          <p className="text-sm leading-base text-gray-400 mb-5">
            J.R.R Tolkien
          </p>
        </header>

        <main className="w-full mt-6 text-gray-300 text-sm leading-base overflow-hidden">
          Semper et sapien proin vitae nisi. Feugiat neque integer donec et
          aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a
          ...
        </main>
      </div>
    </article>
  )
}
