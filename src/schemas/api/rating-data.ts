import { z } from "zod"

export const ratingDataSchema = z.object({
  userId: z
    .string()
    .regex(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      { message: "Id do usuário inválido" }
    ),
  bookId: z
    .string()
    .regex(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      { message: "Id do livro inválido" }
    ),
  rate: z
    .number()
    .int()
    .min(1, { message: "O menor valor da avaliação é 1." })
    .max(5, { message: "O maior valor da avaliação é 5" }),
  description: z.string().min(1, { message: "Descrição inválida" }),
})
