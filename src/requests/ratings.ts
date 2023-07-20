import { api } from "@/lib/api"

import { Rating, UserRatingProps } from "@/dtos/Rating"

interface RatingResponse {
  ratings: Rating[]
}

export async function getRecentBooksRatings(): Promise<Rating[]> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<RatingResponse>("/ratings", {
    // next: { revalidate }
    cache: "no-cache",
  })

  return data.ratings
}

// ----------------------------------------------------

interface LastUserRatingResponse {
  lastUserRating: UserRatingProps
}

export async function getLastUserRating(
  userId: string
): Promise<UserRatingProps> {
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

// ----------------------------------------------------

interface ResponseCreateRating {
  message: string
}

export async function createRating(body: string): Promise<string> {
  const response = await api<ResponseCreateRating>("/ratings/new", {
    method: "POST",
    body,
  })

  return response.message
}
