"use client"

import { ActivityImageGenerator } from "./activity-image-generator"
import { ImageWithFallback } from "./image-with-fallback"

interface ActivityImageProps {
  type: "reading" | "bookclub" | "corner" | "hero" | "generic"
  imageUrl?: string
  width?: number
  height?: number
  className?: string
  alt?: string
}

export function ActivityImage({
  type,
  imageUrl,
  width = 400,
  height = 300,
  className = "",
  alt = "Activity image",
}: ActivityImageProps) {
  // Tạo seed từ type để đảm bảo cùng một loại hoạt động luôn có cùng một ảnh
  const seed = type.split("").reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0)

  if (imageUrl) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <ImageWithFallback
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          fallbackSrc={`data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>`}
        />
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <ActivityImageGenerator type={type} width={width} height={height} seed={seed} />
    </div>
  )
}
