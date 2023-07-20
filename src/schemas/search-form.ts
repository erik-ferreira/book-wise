import { z } from "zod"

export const searchFormSchema = z.object({
  search: z
    .string()
    .min(1, { message: "Preencha o campo para realizar a busca" }),
})

export type SearchFormData = z.infer<typeof searchFormSchema>
