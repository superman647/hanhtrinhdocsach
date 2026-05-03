import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "./image-with-fallback"

export function FeaturedBooks() {
  // Mock data for featured books
  const featuredBooks = [
    {
      id: 1,
      title: "Truyện Kiều",
      author: "Nguyễn Du",
      coverUrl: "/images/books/truyen-kieu.png",
      category: "Văn học cổ điển",
      description: "Tác phẩm kinh điển của văn học Việt Nam",
    },
    {
      id: 2,
      title: "Số Đỏ",
      author: "Vũ Trọng Phụng",
      coverUrl: "/images/books/so-do.png",
      category: "Tiểu thuyết",
      description: "Tác phẩm châm biếm xã hội Việt Nam thời kỳ Pháp thuộc",
    },
    {
      id: 3,
      title: "Tắt Đèn",
      author: "Ngô Tất Tố",
      coverUrl: "/images/books/tat-den.png",
      category: "Tiểu thuyết",
      description: "Tác phẩm phản ánh cuộc sống của người nông dân Việt Nam",
    },
    {
      id: 4,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      coverUrl: "/images/books/de-men-phieu-luu-ky.png",
      category: "Văn học thiếu nhi",
      description: "Tác phẩm văn học thiếu nhi nổi tiếng của Việt Nam",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {featuredBooks.map((book) => (
        <Link key={book.id} href={`/books/${book.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-[2/3] relative">
              <ImageWithFallback
                src={book.coverUrl || "/placeholder.svg"}
                alt={`${book.title} - ${book.author}`}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <Badge className="mb-2 bg-pink-600 hover:bg-pink-700">{book.category}</Badge>
              <h3 className="font-bold line-clamp-1">{book.title}</h3>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{book.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
