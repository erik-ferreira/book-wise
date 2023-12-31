import { useState } from "react"
import { useSession } from "next-auth/react"
import * as Dialog from "@radix-ui/react-dialog"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { createRating } from "@/requests/ratings"
import { evaluateFormSchema, EvaluateFormData } from "@/schemas/evaluate-form"

import { Profile } from "../../Profile"
import { TextArea } from "../../Form/TextArea"
import { TitleSection } from "../../TitleSection"
import { ButtonAction } from "../../ButtonAction"
import { DialogPortalSignIn } from "./DialogPortalSignIn"
import { RatingStarsInput } from "../../RatingStars/Input"

interface FormEvaluateProps {
  bookId: string
  onRefetchRatings: () => void
}

export function FormEvaluate({ bookId, onRefetchRatings }: FormEvaluateProps) {
  const session = useSession()
  const user = session.data?.user
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
    try {
      const body = JSON.stringify({
        rate: data.rate,
        description: data.description,
        userId: user?.id,
        bookId,
      })

      const message = await createRating(body)

      alert(message)
      onRefetchRatings()
    } catch (err: any) {
      alert(err?.message)
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
            <Profile
              src={user?.avatar_url || ""}
              username={user?.name || ""}
              usernameIsBold
            />
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
