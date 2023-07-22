"use client"

import Image from "next/image"
import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { useBooks } from "@/contexts/BooksContext"

import { BookFormattedProps } from "@/dtos/Book"

import { FormEvaluate } from "./FormEvaluate"
import { RatingStars } from "../../RatingStars"
import { DialogPortalDetailsBook } from "./DialogPortalDetailsBook"

import { twMerge } from "@/utils/tw-merge"

interface PopularBookCardProps {
  cardBookInHome?: boolean
  book: BookFormattedProps
}

export function PopularBookCard({
  cardBookInHome = false,
  book,
}: PopularBookCardProps) {
  const { onRefetchBooks } = useBooks()

  const [openDialog, setOpenDialog] = useState(false)

  function onRefetchRatingsAfterCreateNewRating() {
    setOpenDialog(false)
    onRefetchBooks()
  }

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Trigger className="w-full text-start">
        <article
          className={twMerge(
            "bg-gray-700 w-full h-fit rounded-md py-[1.125rem] px-5 flex gap-5 card-primary-animation",
            { relative: book.wasRead },
            {
              "max-[1200px]:flex-col max-[1200px]:items-center max-[450px]:w-[120px]":
                cardBookInHome,
            }
          )}
        >
          {book.wasRead && (
            <span className="absolute -top-[2px] -right-[2px] uppercase font-bold text-xs text-green-100 bg-green-300 rounded-tr-sm rounded-bl-sm py-1 px-3 ">
              Lido
            </span>
          )}

          <Image
            src={book.cover_url || ""}
            width={64}
            height={96}
            alt=""
            className="rounded-sm w-16 h-24"
          />

          <div
            className={twMerge(
              "w-full flex flex-col justify-between overflow-hidden",
              {
                "max-[1200px]:flex-col-reverse max-[1200px]:gap-2":
                  cardBookInHome,
              }
            )}
          >
            <header
              className={twMerge({
                "max-[1200px]:text-center": cardBookInHome,
              })}
            >
              <h2 className="font-bold leading-short truncate">{book?.name}</h2>
              <p className="text-sm leading-base text-gray-400">
                {book?.author}
              </p>
            </header>

            <RatingStars
              stars={book?.ratingAverage}
              className={cardBookInHome ? "max-[1200px]:mx-auto" : ""}
            />
          </div>
        </article>
      </Dialog.Trigger>

      <DialogPortalDetailsBook
        book={book}
        form={
          <FormEvaluate
            bookId={book.id}
            onRefetchRatings={onRefetchRatingsAfterCreateNewRating}
          />
        }
      />
    </Dialog.Root>
  )
}
