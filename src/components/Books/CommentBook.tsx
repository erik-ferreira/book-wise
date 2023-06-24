import Image from "next/image"

import { Rating } from "../Rating"
import { Profile } from "../Profile"

import hobbitBookPng from "../../assets/books/hobbit.png"

interface CommentBookProps {
  variant?: "normal" | "short"
}

export function CommentBook({ variant = "normal" }: CommentBookProps) {
  const isCommentNormal = variant === "normal"

  return (
    <article className="w-full h-fit bg-gray-700 rounded-md p-6 space-y-8 card-primary-animation">
      <header className="flex justify-between max-[930px]:flex-col max-[930px]:items-center max-[930px]:gap-4">
        <Profile username="Erik Ferreira" description="Hoje" />

        <Rating value={4} />
      </header>

      <main className="flex items-center gap-5 max-[1130px]:flex-col">
        {isCommentNormal && (
          <Image
            src={hobbitBookPng}
            width={108}
            height={152}
            alt=""
            className="w-[108px] h-[152px] rounded"
          />
        )}

        <div>
          {isCommentNormal && (
            <>
              <h2 className="font-bold leading-short">O Hobbit</h2>
              <p className="text-sm leading-base text-gray-400 mb-5">
                J.R.R Tolkien
              </p>
            </>
          )}

          <div className="w-full text-gray-300 text-sm leading-base overflow-hidden">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh Semper et sapien proin vitae...
            <strong className="text-purple-100">ver mais</strong>
          </div>
        </div>
      </main>
    </article>
  )
}
