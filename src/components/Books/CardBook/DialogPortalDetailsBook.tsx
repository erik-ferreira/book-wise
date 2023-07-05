import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { BookOpen, Bookmark } from "lucide-react"

import { CommentBook } from "../CommentBook"
import { FormEvaluate } from "./FormEvaluate"
import { RatingStars } from "../../RatingStars"
import { ButtonXClose } from "../../ButtonXClose"

import algoritmosImg from "../../../assets/books/algoritimos.png"

export function DialogPortalDetailsBook() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 bg-black/60
      data-[state=open]:animate-overlay-show data-[state=closed]:animate-overlay-hide"
      />
      <Dialog.Content className="fixed top-0 right-0 w-[41.25rem] h-full bg-gray-800 pt-16 pb-8 px-12 overflow-y-scroll z-20 data-[state=open]:animate-open-content data-[state=closed]:animate-close-content max-[650px]:w-full max-[650px]:data-[state=open]:animate-open-content-full max-[650px]:data-[state=closed]:animate-close-content-full">
        <Dialog.Close asChild>
          <ButtonXClose />
        </Dialog.Close>

        <article className="w-full h-fit bg-gray-700 px-8 pt-6 pb-4 rounded-[10px] space-y-10 mb-11">
          <div className="flex gap-8 max-[375px]:flex-col max-[375px]:items-center">
            <Image
              src={algoritmosImg}
              width={170}
              height={242}
              alt=""
              className="rounded-sm w-[10.625rem] h-[15.125rem]"
            />

            <div className="w-full flex flex-col justify-between max-[375px]:gap-4 max-[375px]:items-center max-[375px]:text-center">
              <header>
                <h2 className="font-bold leading-short text-lg">
                  Entendendo Algoritmos
                </h2>
                <p className="text-base leading-base text-gray-400">
                  J.R.R Tolkien
                </p>
              </header>

              <div>
                <RatingStars stars={4} />
                <span className="text-sm leading-base text-gray-400">
                  3 avaliações
                </span>
              </div>
            </div>
          </div>

          <ul className="flex items-center gap-14 py-6 border-t border-t-gray-600 max-[375px]:flex-col max-[375px]:gap-5">
            <li className="flex gap-5 items-center max-[375px]:w-full">
              <BookOpen className="text-green-100 w-8 h-8" />

              <div className="flex flex-col">
                <span className="text-sm leading-base text-gray-300">
                  Categoria
                </span>
                <span className="font-bold leading-short text-gray-200">
                  Computação, educação
                </span>
              </div>
            </li>

            <li className="flex gap-5 items-center max-[375px]:w-full">
              <Bookmark className="text-green-100 w-8 h-8" />

              <div className="flex flex-col">
                <span className="text-sm leading-base text-gray-300">
                  Páginas
                </span>
                <span className="font-bold leading-short text-gray-200">
                  160
                </span>
              </div>
            </li>
          </ul>
        </article>

        <FormEvaluate />

        <div className="space-y-3">
          <CommentBook variant="short" />
          <CommentBook variant="short" />
          <CommentBook variant="short" />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
