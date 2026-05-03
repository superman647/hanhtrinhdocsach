"use client"

import { AvatarGenerator } from "./avatar-generator"
import { ImageWithFallback } from "./image-with-fallback"

interface UserAvatarProps {
  name: string
  avatarUrl?: string
  size?: number
  className?: string
}

export function UserAvatar({ name, avatarUrl, size = 100, className = "" }: UserAvatarProps) {
  // Tạo seed từ tên người dùng để đảm bảo cùng một người dùng luôn có cùng một avatar
  const seed = name.split("").reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0)

  if (avatarUrl) {
    return (
      <div className={`relative overflow-hidden rounded-full ${className}`} style={{ width: size, height: size }}>
        <ImageWithFallback
          src={avatarUrl || "/placeholder.svg"}
          alt={name}
          width={size}
          height={size}
          className="object-cover"
          fallbackSrc={`data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>`}
        />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-full ${className}`} style={{ width: size, height: size }}>
      <AvatarGenerator name={name} size={size} seed={seed} />
    </div>
  )
}
