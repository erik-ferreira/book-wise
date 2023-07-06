import { useState } from "react"
import { useSession } from "next-auth/react"
import * as Dialog from "@radix-ui/react-dialog"

import { RatingStarsInput } from "../../RatingStars/Input"
import { Profile } from "../../Profile"
import { TextArea } from "../../Form/TextArea"
import { TitleSection } from "../../TitleSection"
import { ButtonAction } from "../../ButtonAction"
import { DialogPortalSignIn } from "./DialogPortalSignIn"

export function FormEvaluate() {
  const session = useSession()
  const isSigned = session.status === "authenticated"
  const ButtonEvaluate = isSigned ? "button" : Dialog.Trigger

  const [valueRating, setValueRating] = useState(1)
  const [showFormEvaluate, setShowFormEvaluate] = useState(false)

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
        <form className="w-full h-fit bg-gray-700 rounded-md p-6 mb-3">
          <div className="flex items-center justify-between max-[375px]:flex-col max-[375px]:gap-5">
            <Profile username="Erik Ferreira" usernameIsBold />
            <RatingStarsInput stars={valueRating} onStars={setValueRating} />
          </div>

          <TextArea placeholder="Escreva sua avaliação" />

          <div className="flex gap-2 justify-end">
            <ButtonAction
              type="button"
              icon="cancel"
              onClick={handleCloseFormEvaluate}
            />
            <ButtonAction type="button" />
          </div>
        </form>
      )}

      {!isSigned && <DialogPortalSignIn />}
    </Dialog.Root>
  )
}
