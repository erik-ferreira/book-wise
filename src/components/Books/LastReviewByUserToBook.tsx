import Image from "next/image"

import { api } from "@/lib/api"

import { RatingStars } from "../RatingStars"
import { TitleSection } from "../TitleSection"

import { UserRatingProps } from "@/dtos/Rating"

import { formatDistanceDateToNow } from "../../utils/format-dates"

interface LastUserRatingResponse {
  lastUserRating: UserRatingProps
}

async function getLastUserRating(userId: string): Promise<UserRatingProps> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<LastUserRatingResponse>(
    `/profile/${userId}/last-rating`,
    {
      // next: { revalidate },
      cache: "no-cache",
    }
  )

  return data.lastUserRating
}

interface LastReviewByUserToBookProps {
  userId: string
}

export async function LastReviewByUserToBook({
  userId,
}: LastReviewByUserToBookProps) {
  const lastUserRating = await getLastUserRating(userId)

  return (
    <>
      <TitleSection label="Sua última leitura" />

      <article className="w-full h-fit bg-gray-600 rounded-md p-6 flex items-center gap-6 mb-10 max-[1130px]:flex-col max-[450px]:w-[90%]">
        <Image
          src={lastUserRating.book.cover_url}
          width={108}
          height={152}
          alt=""
          className="w-[108px] h-[152px] rounded"
        />
        <div className="w-full h-[152px]">
          <header>
            <div className="flex items-center justify-between mb-3">
              <time className="text-sm leading-base text-gray-300">
                {formatDistanceDateToNow(new Date(lastUserRating.created_at))}
              </time>
              <RatingStars stars={lastUserRating.rate} />
            </div>

            <h2 className="font-bold leading-short">
              {lastUserRating.book.name}
            </h2>
            <p className="text-sm leading-base text-gray-400 mb-5 max-[1130px]:mb-0">
              {lastUserRating.book.author}
            </p>
          </header>

          <main className="w-full mt-6 text-gray-300 text-sm leading-base overflow-hidden max-[1130px]:mt-3">
            {lastUserRating.description}
          </main>
        </div>
      </article>
    </>
  )
}
