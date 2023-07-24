"use client"

import { useState } from "react"
import { getFullRatingDescription } from "@/requests/ratings"
import { LoadingSpinner } from "@/components/LoadingSpinner"

interface DescriptionBookProps {
  ratingId: string
  descriptionDefault: string
}

export function DescriptionBook({
  ratingId,
  descriptionDefault,
}: DescriptionBookProps) {
  const [description, setDescription] = useState(descriptionDefault)
  const [loadingDescription, setLoadingDescription] = useState(false)

  async function handleLoadFullRatingDescription() {
    try {
      setLoadingDescription(true)
      const response = await getFullRatingDescription(ratingId)

      if ("description" in response) {
        setDescription(response.description)
      } else {
        throw new Error(response.message)
      }
    } catch (err: any) {
      alert(err?.message)
    } finally {
      setLoadingDescription(false)
    }
  }

  return (
    <div className="w-full text-gray-300 text-sm leading-base overflow-hidden">
      {loadingDescription ? (
        <LoadingSpinner size="small" />
      ) : (
        <>
          {description}

          {description.endsWith("...") && (
            <button
              className="text-purple-100 font-bold"
              onClick={handleLoadFullRatingDescription}
            >
              ver mais
            </button>
          )}
        </>
      )}
    </div>
  )
}
