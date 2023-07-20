import Image from "next/image"

import { Profile } from "../Profile"
import { RatingStars } from "../RatingStars"

import { Rating } from "@/dtos/Rating"

import { twMerge } from "../../utils/tw-merge"
import { formatDistanceDateToNow } from "../../utils/format-dates"

interface BookReviewCardProps {
  variant?: "normal" | "short"
  rating: Rating
}

export function BookReviewCard({
  variant = "normal",
  rating,
}: BookReviewCardProps) {
  const isCommentNormal = variant === "normal"

  return (
    <article
      className={twMerge("w-full h-fit bg-gray-700 rounded-md p-6 space-y-8", {
        "max-[450px]:min-w-[230px] max-[450px]:h-[430px]": isCommentNormal,
      })}
    >
      <header
        className={twMerge("flex justify-between", {
          "max-[870px]:flex-col max-[870px]:items-center max-[870px]:gap-4":
            isCommentNormal,
        })}
      >
        <Profile
          src={rating?.user?.avatar_url}
          username={rating?.user?.name || ""}
          description={formatDistanceDateToNow(new Date(rating?.created_at))}
        />

        <RatingStars stars={rating?.rate || 0} />
      </header>

      <main
        className={twMerge("flex items-center gap-5", {
          "max-[1130px]:flex-col": isCommentNormal,
        })}
      >
        {isCommentNormal && (
          <Image
            src={rating?.book?.cover_url || ""}
            width={108}
            height={152}
            alt=""
            className="w-[108px] h-[9.5rem] rounded"
          />
        )}

        <div
          className={twMerge("w-full", {
            "min-[1131px]:h-[9.5rem]": isCommentNormal,
          })}
        >
          {isCommentNormal && (
            <>
              <h2 className="font-bold leading-short">{rating?.book?.name}</h2>
              <p className="text-sm leading-base text-gray-400 mb-5">
                {rating?.book?.author}
              </p>
            </>
          )}

          <div className="w-full text-gray-300 text-sm leading-base overflow-hidden">
            {rating?.description}
            {rating?.description.endsWith("...") && (
              <strong className="text-purple-100">ver mais</strong>
            )}
          </div>
        </div>
      </main>
    </article>
  )
}
