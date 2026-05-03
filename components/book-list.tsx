import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Star } from "lucide-react"
import { ImageWithFallback } from "./image-with-fallback"

export function BookList() {
  // Mock data for books
  const books = [
    {
      id: 1,
      title: "Truyện Kiều",
      author: "Nguyễn Du",
      coverUrl: "/images/books/truyen-kieu.png",
      category: "Văn học cổ điển",
      description:
        "Tác phẩm kinh điển của văn học Việt Nam kể về cuộc đời của nàng Kiều với nhiều biến cố, thăng trầm.",
      rating: 4.9,
      period: "Trước 1945",
      points: 100,
    },
    {
      id: 2,
      title: "Số Đỏ",
      author: "Vũ Trọng Phụng",
      coverUrl: "/images/books/so-do.png",
      category: "Tiểu thuyết",
      description:
        "Tác phẩm châm biếm xã hội Việt Nam thời kỳ Pháp thuộc, kể về nhân vật Xuân - biệt danh là Xuân Tóc Đỏ.",
      rating: 4.7,
      period: "Trước 1945",
      points: 80,
    },
    {
      id: 3,
      title: "Tắt Đèn",
      author: "Ngô Tất Tố",
      coverUrl: "/images/books/tat-den.png",
      category: "Tiểu thuyết",
      description: "Tác phẩm phản ánh cuộc sống của người nông dân Việt Nam dưới ách thống trị của thực dân Pháp.",
      rating: 4.6,
      period: "Trước 1945",
      points: 80,
    },
    {
      id: 4,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      coverUrl: "/images/books/de-men-phieu-luu-ky.png",
      category: "Văn học thiếu nhi",
      description: "Tác phẩm văn học thiếu nhi nổi tiếng của Việt Nam kể về cuộc phiêu lưu của chú Dế Mèn.",
      rating: 4.8,
      period: "1945-1975",
      points: 70,
    },
    {
      id: 5,
      title: "Nhật Ký Trong Tù",
      author: "Hồ Chí Minh",
      coverUrl: "/images/books/nhat-ky-trong-tu.png",
      category: "Thơ",
      description: "Tập thơ chữ Hán được sáng tác trong thời gian Chủ tịch Hồ Chí Minh bị giam cầm ở Trung Quốc.",
      rating: 4.9,
      period: "1945-1975",
      points: 60,
    },
    {
      id: 6,
      title: "Mắt Biếc",
      author: "Nguyễn Nhật Ánh",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      description:
        "Câu chuyện tình yêu của Ngạn dành cho Hà Lan, cô bạn có đôi mắt biếc từ thời thơ ấu đến khi trưởng thành.",
      rating: 4.7,
      period: "Sau 1975",
      points: 70,
    },
    {
      id: 7,
      title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
      author: "Nguyễn Nhật Ánh",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      description: "Tác phẩm kể về tuổi thơ của một cậu bé ở miền quê Việt Nam với những kỷ niệm đẹp đẽ và trong sáng.",
      rating: 4.6,
      period: "Sau 1975",
      points: 60,
    },
    {
      id: 8,
      title: "Sống Mòn",
      author: "Nam Cao",
      coverUrl: "/images/books/song-mon.png",
      category: "Tiểu thuyết",
      description:
        "Tác phẩm phản ánh cuộc sống khó khăn, bế tắc của tầng lớp trí thức nghèo trong xã hội Việt Nam trước Cách mạng tháng Tám.",
      rating: 4.8,
      period: "Trước 1945",
      points: 90,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Hiển thị {books.length} sách</p>
        <select className="p-2 border rounded-md text-sm">
          <option value="newest">Mới nhất</option>
          <option value="oldest">Cũ nhất</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="rating">Xếp hạng</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.id} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-[2/3] relative">
              <ImageWithFallback
                src={book.coverUrl || "/placeholder.svg"}
                alt={`${book.title} - ${book.author}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-yellow-600 hover:bg-yellow-700">{book.points} điểm</Badge>
              </div>
            </div>
            <CardContent className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <Badge className="bg-pink-600 hover:bg-pink-700">{book.category}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm">{book.rating}</span>
                </div>
              </div>
              <h3 className="font-bold line-clamp-1">{book.title}</h3>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-3 flex-grow">{book.description}</p>
              <div className="mt-4 flex gap-2">
                <Link href={`/books/${book.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Chi tiết
                  </Button>
                </Link>
                <Link href={`/books/${book.id}/read`} className="flex-1">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Đọc sách
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
