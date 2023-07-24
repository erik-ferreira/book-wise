import { api } from "@/lib/api"

import {
  UserProfile,
  GetProfileDataResponse,
  UserRatingProps,
  GetUserRatingsResponse,
} from "@/dtos/User"

export async function getProfileData(userId: string): Promise<UserProfile> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<GetProfileDataResponse>(`/profile/${userId}`, {
    next: { revalidate },
  })

  return data.user
}

// ----------------------------------------------------

export async function getUserRatings(
  userId: string,
  params?: URLSearchParams
): Promise<UserRatingProps[]> {
  const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<GetUserRatingsResponse>(
    `/profile/${userId}/ratings?${params?.toString()}`,
    {
      next: { revalidate },
    }
  )

  return data.userRatings
}
