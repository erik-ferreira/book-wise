import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { Rating } from "../../Rating"
import { Profile } from "../../Profile"
import { TextArea } from "../../TextArea"
import { TitleSection } from "../../TitleSection"
import { ButtonAction } from "../../ButtonAction"
import { DialogPortalSignIn } from "./DialogPortalSignIn"

export function FormEvaluate() {
  const userSigned = false

  const [valueRating, setValueRating] = useState(0)
  const [showFormEvaluate, setShowFormEvaluate] = useState(false)

  function handleOpenFormEvaluate() {
    if (userSigned) {
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
          <Dialog.Trigger
            className="text-purple-100 text-sm font-bold leading-base flex items-center gap-2 py-1 px-2 rounded-sm hover:bg-purple-100 hover:bg-opacity-20 transition-colors"
            onClick={handleOpenFormEvaluate}
          >
            Avaliar
          </Dialog.Trigger>
        }
      />

      {showFormEvaluate && (
        <form className="w-full h-fit bg-gray-700 rounded-md p-6 mb-3">
          <div className="flex items-center justify-between">
            <Profile username="Erik Ferreira" usernameIsBold />
            <Rating
              size="large"
              value={valueRating}
              onUpdatedValue={(newValue) => setValueRating(newValue)}
            />
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

      <DialogPortalSignIn />
    </Dialog.Root>
  )
}
