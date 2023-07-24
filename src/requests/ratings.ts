import { api } from "@/lib/api"

import { UserRatingProps } from "@/dtos/User"
import {
  Rating,
  GetRecentBooksRatingsResponse,
  GetLastUserRating,
  ResponseCreateRating,
} from "@/dtos/Rating"

export async function getRecentBooksRatings(): Promise<Rating[]> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<GetRecentBooksRatingsResponse>("/ratings", {
    next: { revalidate },
  })

  return data.ratings
}

// ----------------------------------------------------

export async function getLastUserRating(
  userId: string
): Promise<UserRatingProps | null> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<GetLastUserRating>(`/profile/${userId}/last-rating`, {
    next: { revalidate },
  })

  return data.lastUserRating
}

// ----------------------------------------------------

export async function createRating(body: string): Promise<string> {
  const response = await api<ResponseCreateRating>("/ratings/new", {
    method: "POST",
    body,
  })

  return response.message
}
