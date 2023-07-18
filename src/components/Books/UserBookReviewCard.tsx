import Image from "next/image"

import { RatingStars } from "../RatingStars"

import { UserRatingProps } from "@/dtos/Rating"

import { formatDistanceDateToNow } from "../../utils/format-dates"

interface UserBookReviewCardProps {
  rating: UserRatingProps
}

export function UserBookReviewCard({ rating }: UserBookReviewCardProps) {
  return (
    <article className="h-fit space-y-2">
      <time className="text-sm leading-base text-gray-300">
        {formatDistanceDateToNow(new Date(rating.created_at))}
      </time>

      <div className="bg-gray-700 rounded-md p-6 space-y-6">
        <header className="flex gap-6 max-[900px]:flex-col max-[900px]:items-center">
          <Image
            src={rating.book.cover_url}
            alt=""
            width={98}
            height={134}
            className="rounded w-[6.125rem] h-[8.375rem]"
          />

          <div className="flex flex-col justify-between pb-2 gap-5 max-[900px]:flex-col-reverse">
            <div className="max-[900px]:text-center">
              <h2 className="font-bold leading-short mb-[2px]">
                {rating.book.name}
              </h2>
              <p className="text-sm leading-base text-gray-400">
                {rating.book.author}
              </p>
            </div>

            <RatingStars stars={rating.rate} />
          </div>
        </header>

        <main className="text-sm leading-base text-gray-300">
          {rating.description}
        </main>
      </div>
    </article>
  )
}
