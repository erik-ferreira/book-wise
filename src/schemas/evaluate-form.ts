import { z } from "zod"

export const evaluateFormSchema = z.object({
  rate: z.number().int().min(1).max(5),
  description: z
    .string()
    .min(1, { message: "Preencha o campo para realizar a avaliação" }),
})

export type EvaluateFormData = z.infer<typeof evaluateFormSchema>
