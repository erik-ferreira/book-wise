import * as Dialog from "@radix-ui/react-dialog"

import { ButtonSignIn } from "@/components/ButtonSignIn"
import { ButtonXClose } from "@/components/ButtonXClose"

export function DialogPortalSignIn() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-w-[516px] w-full h-fit bg-gray-700 rounded-lg px-14 py-[4.5rem]">
        <Dialog.Close asChild>
          <ButtonXClose className="right-4 top-4" />
        </Dialog.Close>

        <h2 className="font-bold leading-short text-gray-200 text-center mb-10">
          Faça login para deixar sua avaliação
        </h2>

        <div className="space-y-4">
          <ButtonSignIn />
          <ButtonSignIn variant="github" />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
