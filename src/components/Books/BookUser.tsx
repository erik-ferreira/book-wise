import Image from "next/image"
import hobbitImg from "../../assets/books/hobbit.png"
import { Rating } from "../Rating"

export function BookUser() {
  return (
    <article>
      <time>Há 2 dias</time>

      <div className="bg-gray-700 rounded-md p-6 space-y-6">
        <header className="flex gap-6">
          <Image src={hobbitImg} alt="" width={98} height={134} />

          <div>
            <h2 className="font-bold leading-short mb-[2px]">O Hobbit</h2>
            <p className="text-sm leading-base text-gray-400 mb-5">
              J.R.R Tolkien
            </p>

            <Rating totalStar={4} />
          </div>
        </header>

        <main>
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
