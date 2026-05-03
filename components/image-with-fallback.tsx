"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { BookCoverGenerator } from "./book-cover-generator"
import { AvatarGenerator } from "./avatar-generator"
import { ActivityImageGenerator } from "./activity-image-generator"

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "onError"> {
  src: string
  fallbackSrc?: string
}

export function ImageWithFallback({ src, fallbackSrc = "/placeholder.svg", alt, ...rest }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(src)
  const [error, setError] = useState(false)
  const [seed] = useState(() => Math.random() * 1000)

  useEffect(() => {
    setImgSrc(src)
    setError(false)
  }, [src])

  // Kiểm tra xem src có phải là đường dẫn đến ảnh sách không
  const isBookCover = src.includes("/books/") || src.includes("book") || src.includes("cover")

  // Kiểm tra xem src có phải là đường dẫn đến avatar không
  const isAvatar = src.includes("/avatar/") || src.includes("avatar") || src.includes("user")

  // Kiểm tra loại ảnh hoạt động
  const getActivityType = () => {
    if (src.includes("reading")) return "reading"
    if (src.includes("bookclub")) return "bookclub"
    if (src.includes("corner")) return "corner"
    if (src.includes("hero")) return "hero"
    return "generic"
  }

  // Trích xuất tên và tác giả từ alt text cho ảnh bìa sách
  const extractBookInfo = () => {
    const defaultTitle = "Sách hay"
    const defaultAuthor = "Tác giả"

    if (!alt) return { title: defaultTitle, author: defaultAuthor }

    // Thử tách tên sách và tác giả từ alt text
    const parts = alt.split(" - ")
    if (parts.length > 1) {
      return { title: parts[0], author: parts[1] }
    }

    // Nếu không có dấu gạch ngang, sử dụng toàn bộ alt làm tiêu đề
    return { title: alt, author: defaultAuthor }
  }

  // Nếu có lỗi, hiển thị ảnh minh họa tương ứng
  if (error) {
    if (isBookCover) {
      const { title, author } = extractBookInfo()
      return <BookCoverGenerator title={title} author={author} seed={seed} {...rest} />
    } else if (isAvatar) {
      return <AvatarGenerator name={alt || "User"} seed={seed} size={(rest.width as number) || 100} />
    } else {
      return (
        <ActivityImageGenerator
          type={getActivityType()}
          seed={seed}
          width={(rest.width as number) || 400}
          height={(rest.height as number) || 300}
        />
      )
    }
  }

  return (
    <Image
      {...rest}
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={() => {
        setError(true)
      }}
    />
  )
}
