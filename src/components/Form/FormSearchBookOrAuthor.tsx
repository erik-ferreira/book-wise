import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"

import { getUserRatings } from "@/requests/profile"
import { SearchFormData, searchFormSchema } from "@/schemas/search-form"

import { Input } from "./Input"

import { UserRatingProps } from "@/dtos/User"

import { twMerge } from "@/utils/tw-merge"

interface FormSearchBookOrAuthorProps {
  page?: "explorer" | "profile"
  onRefetchBooks?: (search: string) => void
  onUpdateUserRatings?: (ratings: UserRatingProps[]) => void
}

export function FormSearchBookOrAuthor({
  page = "explorer",
  onRefetchBooks = () => {},
  onUpdateUserRatings = () => {},
}: FormSearchBookOrAuthorProps) {
  const session = useSession()
  const userId = session?.data?.user?.id || ""
  const isPageProfile = page === "profile"

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { search: "" },
  })

  async function handleGetUserRatings(search: string) {
    const paramsToGetUserRatings = new URLSearchParams()
    paramsToGetUserRatings.append("bookOrAuthor", search)

    const ratings = await getUserRatings(userId, paramsToGetUserRatings)

    onUpdateUserRatings(ratings)
  }

  async function handleSubmitSearch(data: SearchFormData) {
    if (isPageProfile) {
      handleGetUserRatings(data.search)
    } else {
      onRefetchBooks(data.search)
    }
  }

  function onChangeInput(value: string) {
    if (value === "") {
      handleSubmitSearch({ search: "" })
    }
  }

  return (
    <form
      className={twMerge("w-full", {
        "max-w-[27rem]": !isPageProfile,
      })}
      onSubmit={handleSubmit(handleSubmitSearch)}
    >
      <Input
        placeholder="Buscar"
        isFullWidth={isPageProfile}
        error={errors?.search?.message}
        {...register("search", {
          onBlur: () => clearErrors(),
          onChange: (e) => onChangeInput(e.target.value),
        })}
      />
    </form>
  )
}
