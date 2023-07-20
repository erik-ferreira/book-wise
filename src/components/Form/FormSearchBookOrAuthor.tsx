import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"

import { getBooks } from "@/requests/books"
import { getUserRatings } from "@/requests/profile"
import { searchFormSchema, SearchFormData } from "@/schemas/search-form"

import { Input } from "./Input"

import { UserRatingProps } from "@/dtos/Rating"
import { BookFormattedProps } from "@/dtos/Book"

import { twMerge } from "@/utils/tw-merge"

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
  const userId = session?.data?.user?.id || ""
  const isPageProfile = page === "profile"

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleGetBooksWithSearch(search: string) {
    const paramsToGetBooks = new URLSearchParams()
    paramsToGetBooks.append("userId", userId)
    paramsToGetBooks.append("bookOrAuthor", search)

    const books = await getBooks(paramsToGetBooks)

    onUpdateBooks(books)
  }

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
      handleGetBooksWithSearch(data.search)
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
