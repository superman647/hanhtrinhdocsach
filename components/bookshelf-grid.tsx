import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Star } from "lucide-react"

export function BookshelfGrid() {
  // Mock data for bookshelf
  const books = [
    {
      id: 1,
      title: "Truyện Kiều",
      author: "Nguyễn Du",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Văn học cổ điển",
      status: "completed",
      progress: 100,
      rating: 5,
    },
    {
      id: 2,
      title: "Số Đỏ",
      author: "Vũ Trọng Phụng",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      status: "reading",
      progress: 30,
      rating: 0,
    },
    {
      id: 3,
      title: "Tắt Đèn",
      author: "Ngô Tất Tố",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      status: "reading",
      progress: 50,
      rating: 0,
    },
    {
      id: 4,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Văn học thiếu nhi",
      status: "reading",
      progress: 75,
      rating: 0,
    },
    {
      id: 5,
      title: "Nhật Ký Trong Tù",
      author: "Hồ Chí Minh",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Thơ",
      status: "completed",
      progress: 100,
      rating: 4,
    },
    {
      id: 6,
      title: "Mắt Biếc",
      author: "Nguyễn Nhật Ánh",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      status: "want-to-read",
      progress: 0,
      rating: 0,
    },
    {
      id: 7,
      title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
      author: "Nguyễn Nhật Ánh",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      status: "want-to-read",
      progress: 0,
      rating: 0,
    },
    {
      id: 8,
      title: "Sống Mòn",
      author: "Nam Cao",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      status: "completed",
      progress: 100,
      rating: 5,
    },
  ]

  // Get status label
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "reading":
        return "Đang đọc"
      case "completed":
        return "Đã đọc xong"
      case "want-to-read":
        return "Muốn đọc"
      case "abandoned":
        return "Đã bỏ dở"
      default:
        return ""
    }
  }

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "reading":
        return "bg-blue-600 hover:bg-blue-700"
      case "completed":
        return "bg-green-600 hover:bg-green-700"
      case "want-to-read":
        return "bg-yellow-600 hover:bg-yellow-700"
      case "abandoned":
        return "bg-gray-600 hover:bg-gray-700"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Hiển thị {books.length} sách</p>
        <select className="p-2 border rounded-md text-sm">
          <option value="recently-read">Đọc gần đây</option>
          <option value="title-az">Tên sách (A-Z)</option>
          <option value="title-za">Tên sách (Z-A)</option>
          <option value="author-az">Tác giả (A-Z)</option>
          <option value="rating-high">Đánh giá (Cao-Thấp)</option>
          <option value="progress">Tiến độ đọc</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.id} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-[2/3] relative">
              <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <Badge className={getStatusBadgeVariant(book.status)}>{getStatusLabel(book.status)}</Badge>
              </div>
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <Badge className="bg-green-600 hover:bg-green-700">{book.category}</Badge>
                {book.status === "completed" && (
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <h3 className="font-bold line-clamp-1">{book.title}</h3>
              <p className="text-sm text-muted-foreground">{book.author}</p>

              {book.status === "reading" && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tiến độ: {book.progress}%</span>
                  </div>
                  <Progress value={book.progress} className="h-2" />
                </div>
              )}

              <div className="mt-auto pt-4 flex gap-2">
                <Link href={`/books/${book.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Chi tiết
                  </Button>
                </Link>
                <Link href={`/books/${book.id}/read`} className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {book.status === "reading" ? "Tiếp tục" : "Đọc sách"}
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
