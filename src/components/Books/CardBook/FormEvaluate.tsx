import { useState } from "react"

import { Rating } from "@/components/Rating"
import { Profile } from "@/components/Profile"
import { TextArea } from "@/components/TextArea"
import { TitleSection } from "@/components/TitleSection"
import { ButtonAction } from "@/components/ButtonAction"

export function FormEvaluate() {
  const [showFormEvaluate, setShowFormEvaluate] = useState(false)

  function handleOpenFormEvaluate() {
    setShowFormEvaluate(true)
  }

  function handleCloseFormEvaluate() {
    setShowFormEvaluate(false)
  }

  return (
    <>
      <TitleSection
        label="Avaliações"
        showButtonEvaluate
        onClickEvaluate={handleOpenFormEvaluate}
      />

      {showFormEvaluate && (
        <form className="w-full h-fit bg-gray-700 rounded-md p-6 mb-3">
          <div className="flex items-center justify-between">
            <Profile username="Erik Ferreira" usernameIsBold />
            <Rating totalStar={4} size="large" />
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
    </>
  )
}
