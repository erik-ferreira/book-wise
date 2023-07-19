import { z } from "zod"
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "@/lib/api"

import { Input } from "./Input"

import { UserRatingProps } from "@/dtos/Rating"
import { GetBooksResponse, BookFormattedProps } from "@/dtos/Book"

import { twMerge } from "@/utils/tw-merge"

interface UserRatingsResponse {
  userRatings: UserRatingProps[]
}

const searchFormSchema = z.object({
  search: z
    .string()
    .min(1, { message: "Preencha o campo para realizar a busca" }),
})

type SearchFormData = z.infer<typeof searchFormSchema>

interface FormSearchBookOrAuthorProps {
  page?: "explorer" | "profile"
  onUpdateBooks?: (books: BookFormattedProps[]) => void
  onUpdateUserRatings?: (ratings: UserRatingProps[]) => void
}

export function FormSearchBookOrAuthor({
  page = "explorer",
  onUpdateBooks = () => {},
  onUpdateUserRatings = () => {},
}: FormSearchBookOrAuthorProps) {
  const session = useSession()
  const isPageProfile = page === "profile"

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitSearch(data: SearchFormData) {
    if (isPageProfile) {
      const userId = session.data?.user.id
      const dataResponse = await api<UserRatingsResponse>(
        `/profile/${userId}/ratings?bookOrAuthor=${data.search}`
      )

      onUpdateUserRatings(dataResponse.userRatings)
    } else {
      const dataResponse = await api<GetBooksResponse>(
        `/books?bookOrAuthor=${data.search}`
      )

      onUpdateBooks(dataResponse.books)
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
