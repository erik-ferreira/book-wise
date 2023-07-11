import classnames from "classnames"

import { Avatar, type SizeProps } from "./Avatar"

interface ProfileProps {
  src?: string
  size?: SizeProps
  username: string
  description?: string
  usernameIsBold?: boolean
}

export function Profile({
  src,
  size = "normal",
  username,
  description,
  usernameIsBold = false,
}: ProfileProps) {
  return (
    <div
      className={classnames("flex items-center gap-3", {
        "flex-col": size === "large",
      })}
    >
      <Avatar src={src} size={size} username={username} />

      <div
        className={classnames("flex flex-col", {
          "items-start": size === "normal",
          "items-center": size === "large",
        })}
      >
        <span
          className={classnames("leading-base", {
            "text-sm text-gray-200": size === "small",
            "font-bold leading-short": usernameIsBold,
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
