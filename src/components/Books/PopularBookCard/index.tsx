"use client"

import Image from "next/image"
import classnames from "classnames"
import * as Dialog from "@radix-ui/react-dialog"

import { RatingStars } from "../../RatingStars"
import { DialogPortalDetailsBook } from "./DialogPortalDetailsBook"

import algoritmosImg from "../../../assets/books/algoritimos.png"

interface PopularBookCardProps {
  bookHasBeenRead?: boolean
  cardBookInHome?: boolean
}

export function PopularBookCard({
  bookHasBeenRead = false,
  cardBookInHome = false,
}: PopularBookCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="w-full text-start">
        <article
          className={classnames(
            "bg-gray-700 w-full h-fit rounded-md py-[1.125rem] px-5 flex gap-5 card-primary-animation",
            { relative: bookHasBeenRead },
            {
              "max-[1200px]:flex-col max-[1200px]:items-center max-[450px]:min-w-[120px]":
                cardBookInHome,
            }
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

          <div
            className={classnames("flex flex-col justify-between", {
              "max-[1200px]:flex-col-reverse max-[1200px]:items-center max-[1200px]:gap-2":
                cardBookInHome,
            })}
          >
            <header
              className={cardBookInHome ? "max-[1200px]:text-center" : ""}
            >
              <h2 className="font-bold leading-short">Entendendo Algoritmos</h2>
              <p className="text-sm leading-base text-gray-400">
                J.R.R Tolkien
              </p>
            </header>

            <RatingStars stars={4} />
          </div>
        </article>
      </Dialog.Trigger>

      <DialogPortalDetailsBook />
    </Dialog.Root>
  )
}
