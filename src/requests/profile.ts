import { api } from "@/lib/api"

import { UserProfile } from "@/dtos/User"
import { UserRatingProps } from "@/dtos/Rating"

interface ProfileResponse {
  user: UserProfile
}

export async function getProfileData(userId: string): Promise<UserProfile> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<ProfileResponse>(`/profile/${userId}`, {
    // next: { revalidate }
    cache: "no-cache",
  })

  return data.user
}

// ----------------------------------------------------

interface UserRatingsResponse {
  userRatings: UserRatingProps[]
}

export async function getUserRatings(
  userId: string,
  params?: URLSearchParams
): Promise<UserRatingProps[]> {
  // const revalidate = 60 * 60 * 24 // 1 day
  const data = await api<UserRatingsResponse>(
    `/profile/${userId}/ratings?${params?.toString()}`,
    {
      // next: { revalidate }
      cache: "no-cache",
    }
  )

  return data.userRatings
}
