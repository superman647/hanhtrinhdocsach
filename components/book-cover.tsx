"use client"

import { BookCoverGenerator } from "./book-cover-generator"
import { ImageWithFallback } from "./image-with-fallback"

interface BookCoverProps {
  title: string
  author: string
  coverUrl?: string
  width?: number
  height?: number
  className?: string
}

export function BookCover({ title, author, coverUrl, width = 200, height = 300, className = "" }: BookCoverProps) {
  // Tạo seed từ title và author để đảm bảo cùng một cuốn sách luôn có cùng một ảnh bìa
  const seed =
    title.split("").reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0) +
    author.split("").reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0)

  if (coverUrl) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <ImageWithFallback
          src={coverUrl || "/placeholder.svg"}
          alt={`${title} by ${author}`}
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
      <BookCoverGenerator title={title} author={author} width={width} height={height} seed={seed} />
    </div>
  )
}
