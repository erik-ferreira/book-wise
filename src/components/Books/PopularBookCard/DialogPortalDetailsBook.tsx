import Image from "next/image"
import { ReactNode } from "react"
import { useSession } from "next-auth/react"
import * as Dialog from "@radix-ui/react-dialog"
import { BookOpen, Bookmark } from "lucide-react"

import { BookFormattedProps } from "@/dtos/Book"

import { RatingStars } from "../../RatingStars"
import { ButtonXClose } from "../../ButtonXClose"
import { BookReviewCard } from "../BookReviewCard"

interface DialogPortalDetailsBookProps {
  book: BookFormattedProps
  form: ReactNode
}

export function DialogPortalDetailsBook({
  book,
  form,
}: DialogPortalDetailsBookProps) {
  const session = useSession()
  const userId = session?.data?.user?.id
  const formatCategories = book.categoriesNames.join(", ")

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
              src={book.cover_url}
              width={170}
              height={242}
              alt=""
              className="rounded-sm w-[10.625rem] h-[15.125rem]"
            />

            <div className="w-full flex flex-col justify-between max-[375px]:gap-4 max-[375px]:items-center max-[375px]:text-center">
              <header>
                <h2 className="font-bold leading-short text-lg">{book.name}</h2>
                <p className="text-base leading-base text-gray-400">
                  {book.author}
                </p>
              </header>

              <div>
                <RatingStars stars={book.ratingAverage} size="normal" />
                <span className="text-sm leading-base text-gray-400">
                  {book.amountRatings} avaliações
                </span>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-5 py-6 border-t border-t-gray-600">
            <li className="flex gap-2 items-center">
              <Bookmark className="text-green-100 w-8 h-8" />
              <span className="text-sm leading-base text-gray-300">
                Páginas
              </span>

              <strong className="leading-short text-gray-200">
                {book.total_pages}
              </strong>
            </li>

            <li className="flex gap-2">
              <BookOpen className="text-green-100 w-8 h-8" />

              <div className="flex flex-1 flex-col">
                <span className="text-sm leading-base text-gray-300">
                  Categorias
                </span>

                <strong className="leading-short text-gray-200 break-words">
                  {formatCategories}
                </strong>
              </div>
            </li>
          </ul>
        </article>

        {form}

        <div className="space-y-3">
          {book?.ratings.map((rating) => (
            <BookReviewCard
              key={rating.id}
              variant="short"
              rating={rating}
              userId={userId}
            />
          ))}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
