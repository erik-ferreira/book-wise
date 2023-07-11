import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { BookOpen, Bookmark } from "lucide-react"

import { FormEvaluate } from "./FormEvaluate"
import { RatingStars } from "../../RatingStars"
import { ButtonXClose } from "../../ButtonXClose"
import { BookReviewCard } from "../BookReviewCard"

import algoritmosImg from "../../../assets/books/algoritimos.png"

const rating = {
  id: "c461f246-de47-4b98-99ee-59e30faff199",
  rate: 2,
  description:
    "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
  created_at: "2023-07-11T02:00:39.264Z",
  book_id: "375948a7-bca3-4b59-9f97-bfcde036b4ca",
  user_id: "48e458c0-8b1e-4994-b85a-1e1cfcc9dd60",
  user: {
    id: "48e458c0-8b1e-4994-b85a-1e1cfcc9dd60",
    name: "Jaxson Dias",
    email: "jaxson@gmail.com",
    avatar_url:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    created_at: "2023-07-11T02:00:39.264Z",
  },
  book: {
    id: "375948a7-bca3-4b59-9f97-bfcde036b4ca",
    name: "O Hobbit",
    author: "J.R.R. Tolkien",
    summary:
      "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh",
    cover_url: "/books/o-hobbit.png",
    total_pages: 360,
    created_at: "2023-07-11T02:00:39.264Z",
  },
}

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
                <RatingStars stars={4} size="normal" />
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
          <BookReviewCard variant="short" rating={rating} />
          <BookReviewCard variant="short" rating={rating} />
          <BookReviewCard variant="short" rating={rating} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
