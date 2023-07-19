import { z } from "zod"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useSession } from "next-auth/react"
import * as Dialog from "@radix-ui/react-dialog"
import { zodResolver } from "@hookform/resolvers/zod"

import { RatingStarsInput } from "../../RatingStars/Input"
import { Profile } from "../../Profile"
import { TextArea } from "../../Form/TextArea"
import { TitleSection } from "../../TitleSection"
import { ButtonAction } from "../../ButtonAction"
import { DialogPortalSignIn } from "./DialogPortalSignIn"

const evaluateFormSchema = z.object({
  rate: z.number().int().min(1).max(5),
  description: z
    .string()
    .min(1, { message: "Preencha o campo para realizar a avaliação" }),
})

type EvaluateFormData = z.infer<typeof evaluateFormSchema>

export function FormEvaluate() {
  const session = useSession()
  const isSigned = session.status === "authenticated"
  const ButtonEvaluate = isSigned ? "button" : Dialog.Trigger

  const [showFormEvaluate, setShowFormEvaluate] = useState(false)

  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<EvaluateFormData>({
    resolver: zodResolver(evaluateFormSchema),
    defaultValues: {
      rate: 1,
    },
  })

  async function handleRatingBook(data: EvaluateFormData) {
    console.log(data)
  }

  function onChangeInput(value: string) {
    if (value === "") {
      // handleRatingBook({ search: "" })
    }
  }

  function handleOpenFormEvaluate() {
    if (isSigned) {
      setShowFormEvaluate(true)
    }
  }

  function handleCloseFormEvaluate() {
    setShowFormEvaluate(false)
  }

  return (
    <Dialog.Root>
      <TitleSection
        label="Avaliações"
        triggerRight={
          <ButtonEvaluate
            className="text-purple-100 text-sm font-bold leading-base flex items-center gap-2 py-1 px-2 rounded-sm hover:bg-purple-100 hover:bg-opacity-20 transition-colors"
            onClick={handleOpenFormEvaluate}
          >
            Avaliar
          </ButtonEvaluate>
        }
      />

      {showFormEvaluate && (
        <form
          onSubmit={handleSubmit(handleRatingBook)}
          className="w-full h-fit bg-gray-700 rounded-md p-6 mb-3"
        >
          <div className="flex items-center justify-between max-[375px]:flex-col max-[375px]:gap-5">
            <Profile username="Erik Ferreira" usernameIsBold />
            <Controller
              name="rate"
              control={control}
              render={({ field }) => (
                <RatingStarsInput
                  stars={field.value}
                  onStars={field.onChange}
                />
              )}
            />
          </div>

          <TextArea
            placeholder="Escreva sua avaliação"
            error={errors?.description?.message}
            {...register("description", {
              onBlur: () => clearErrors(),
              onChange: (e) => onChangeInput(e.target.value),
            })}
          />

          <div className="flex gap-2 justify-end">
            <ButtonAction
              type="button"
              icon="cancel"
              onClick={handleCloseFormEvaluate}
            />
            <ButtonAction type="submit" />
          </div>
        </form>
      )}

      {!isSigned && <DialogPortalSignIn />}
    </Dialog.Root>
  )
}
