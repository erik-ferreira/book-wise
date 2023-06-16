import Image from "next/image"

interface AvatarProps {
  variant?: "normal" | "large"
  username: string
  src: string
}

export function Avatar({ variant = "normal", username, src }: AvatarProps) {
  const isAvatarProfile = variant === "normal"
  const showDay = false

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${isAvatarProfile ? "w-9 h-9" : "w-11 h-11"}
        rounded-full flex items-center justify-center bg-gradient-to-b from-start to-end`}
      >
        <Image
          src={src}
          alt=""
          width={isAvatarProfile ? 32 : 40}
          height={isAvatarProfile ? 32 : 40}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col items-start">
        <span
          className={`${
            isAvatarProfile && "text-gray-200 text-sm"
          } leading-base`}
        >
          {username}
        </span>
        {showDay && (
          <span className="text-gray-400 text-sm leading-base">Hoje</span>
        )}
      </div>
    </div>
  )
}
