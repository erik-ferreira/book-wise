import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "@/lib/api"

import { Input } from "./Input"

import { GetBooksResponse, BookFormattedProps } from "@/dtos/Book"

const searchFormSchema = z.object({
  search: z
    .string()
    .min(1, { message: "Preencha o campo para realizar a busca" }),
})

type SearchFormData = z.infer<typeof searchFormSchema>

interface FormSearchBookOrAuthorProps {
  onUpdateBooks: (books: BookFormattedProps[]) => void
}

export function FormSearchBookOrAuthor({
  onUpdateBooks,
}: FormSearchBookOrAuthorProps) {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitSearch(data: SearchFormData) {
    const dataResponse = await api<GetBooksResponse>(
      `/books?bookOrAuthor=${data.search}`
    )

    onUpdateBooks(dataResponse.books)
  }

  function onChangeInput(value: string) {
    if (value === "") {
      handleSubmitSearch({ search: "" })
    }
  }

  return (
    <form
      className="max-w-[27rem] w-full"
      onSubmit={handleSubmit(handleSubmitSearch)}
    >
      <Input
        placeholder="Buscar"
        error={errors?.search?.message}
        {...register("search", {
          onBlur: () => clearErrors(),
          onChange: (e) => onChangeInput(e.target.value),
        })}
      />
    </form>
  )
}
