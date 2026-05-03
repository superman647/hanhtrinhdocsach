import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookCover } from "@/components/book-cover"

interface RelatedBooksProps {
  currentBookId: number
}

export function RelatedBooks({ currentBookId }: RelatedBooksProps) {
  // Mock data for related books
  const allBooks = [
    {
      id: 1,
      title: "Truyện Kiều",
      author: "Nguyễn Du",
      coverUrl: "/images/books/truyen-kieu.png",
      category: "Văn học cổ điển",
    },
    {
      id: 2,
      title: "Số Đỏ",
      author: "Vũ Trọng Phụng",
      coverUrl: "/images/books/so-do.png",
      category: "Tiểu thuyết",
    },
    {
      id: 3,
      title: "Tắt Đèn",
      author: "Ngô Tất Tố",
      coverUrl: "/images/books/tat-den.png",
      category: "Tiểu thuyết",
    },
    {
      id: 4,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      coverUrl: "/images/books/de-men-phieu-luu-ky.png",
      category: "Văn học thiếu nhi",
    },
    {
      id: 5,
      title: "Nhật Ký Trong Tù",
      author: "Hồ Chí Minh",
      coverUrl: "/images/books/nhat-ky-trong-tu.png",
      category: "Thơ",
    },
    {
      id: 8,
      title: "Sống Mòn",
      author: "Nam Cao",
      coverUrl: "/images/books/song-mon.png",
      category: "Tiểu thuyết",
    },
  ]

  const relatedBooks = allBooks.filter((book) => book.id !== currentBookId).slice(0, 3)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {relatedBooks.map((book) => (
        <Link key={book.id} href={`/books/${book.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
            <div className="flex h-full">
              <div className="w-1/3">
                <div className="relative h-full">
                  <BookCover
                    title={book.title}
                    author={book.author}
                    coverUrl={book.coverUrl}
                    width={100}
                    height={150}
                  />
                </div>
              </div>
              <CardContent className="w-2/3 p-3">
                <Badge className="mb-2 bg-green-600 hover:bg-green-700">{book.category}</Badge>
                <h3 className="font-bold line-clamp-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
