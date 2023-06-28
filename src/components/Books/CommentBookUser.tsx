import Image from "next/image"

import { Rating } from "../Rating"

import hobbitImg from "../../assets/books/hobbit.png"

export function CommentBookUser() {
  return (
    <article className="h-fit space-y-2">
      <time className="text-sm leading-base text-gray-300">Há 2 dias</time>

      <div className="bg-gray-700 rounded-md p-6 space-y-6">
        <header className="flex gap-6 max-[900px]:flex-col max-[900px]:items-center">
          <Image
            src={hobbitImg}
            alt=""
            width={98}
            height={134}
            className="rounded w-[6.125rem] h-[8.375rem]"
          />

          <div className="flex flex-col justify-between pb-2 gap-5 max-[900px]:flex-col-reverse">
            <div className="max-[900px]:text-center">
              <h2 className="font-bold leading-short mb-[2px]">O Hobbit</h2>
              <p className="text-sm leading-base text-gray-400">
                J.R.R Tolkien
              </p>
            </div>

            <Rating value={4} />
          </div>
        </header>

        <main className="text-sm leading-base text-gray-300">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </main>
      </div>
    </article>
  )
}
