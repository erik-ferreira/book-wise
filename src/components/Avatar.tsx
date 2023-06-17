import Image from "next/image"
import classnames from "classnames"

const sizes = {
  small: {
    size: 32,
    container: "w-9 h-9",
  },
  normal: {
    size: 40,
    container: "w-11 h-11",
  },
  large: {
    size: 72,
    container: "w-[4.75rem] h-[4.75rem]",
  },
}
interface AvatarProps {
  src: string
  username: string
  description?: string
  size?: keyof typeof sizes
}

export function Avatar({
  size = "small",
  username,
  description,
  src,
}: AvatarProps) {
  const sizeDefault = sizes[size]

  return (
    <div
      className={classnames("flex items-center gap-3", {
        "flex-col": size === "large",
      })}
    >
      <div
        className={`${sizeDefault.container}
        rounded-full flex items-center justify-center bg-gradient-to-b from-start to-end`}
      >
        <Image
          src={src}
          alt=""
          width={sizeDefault.size}
          height={sizeDefault.size}
          className="rounded-full"
        />
      </div>

      <div
        className={classnames("flex flex-col", {
          "items-start": size === "normal",
          "items-center": size === "large",
        })}
      >
        <span
          className={classnames("leading-base", {
            "text-sm text-gray-200": size === "small",
            "text-xl font-bold leading-short": size === "large",
          })}
        >
          {username}
        </span>
        {!!description && (
          <span className="text-gray-400 text-sm leading-base">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}
