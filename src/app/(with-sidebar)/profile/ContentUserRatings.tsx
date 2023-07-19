"use client"

import { useState } from "react"

import { UserBookReviewCard } from "@/components/Books/UserBookReviewCard"
import { FormSearchBookOrAuthor } from "@/components/Form/FormSearchBookOrAuthor"

import { UserRatingProps } from "@/dtos/Rating"

interface ContentUserRatingsProps {
  ratings: UserRatingProps[]
}

export function ContentUserRatings({ ratings }: ContentUserRatingsProps) {
  const [userRatings, setUserRatings] = useState(ratings)

  return (
    <section className="flex-1 space-y-6">
      <FormSearchBookOrAuthor
        page="profile"
        onUpdateUserRatings={setUserRatings}
      />

      {userRatings.map((rating) => (
        <UserBookReviewCard key={rating.id} rating={rating} />
      ))}
    </section>
  )
}
