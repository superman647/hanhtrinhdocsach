import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Star } from "lucide-react"

export function UserBooks() {
  // Mock data for completed books
  const completedBooks = [
    {
      id: 1,
      title: "Truyện Kiều",
      author: "Nguyễn Du",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Văn học cổ điển",
      completedDate: "15/04/2023",
      rating: 5,
    },
    {
      id: 5,
      title: "Nhật Ký Trong Tù",
      author: "Hồ Chí Minh",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Thơ",
      completedDate: "10/04/2023",
      rating: 4,
    },
    {
      id: 8,
      title: "Sống Mòn",
      author: "Nam Cao",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      completedDate: "05/04/2023",
      rating: 5,
    },
  ]

  // Mock data for in-progress books
  const inProgressBooks = [
    {
      id: 2,
      title: "Số Đỏ",
      author: "Vũ Trọng Phụng",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      progress: 30,
      lastReadDate: "18/04/2023",
    },
    {
      id: 3,
      title: "Tắt Đèn",
      author: "Ngô Tất Tố",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Tiểu thuyết",
      progress: 50,
      lastReadDate: "17/04/2023",
    },
    {
      id: 4,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      coverUrl: "/placeholder.svg?height=300&width=200",
      category: "Văn học thiếu nhi",
      progress: 75,
      lastReadDate: "16/04/2023",
    },
  ]

  return (
    <Tabs defaultValue="reading">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="reading">Đang đọc</TabsTrigger>
        <TabsTrigger value="completed">Đã đọc xong</TabsTrigger>
      </TabsList>
      <TabsContent value="reading" className="mt-6">
        <div className="grid grid-cols-1 gap-6">
          {inProgressBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <div className="flex">
                <div className="w-1/4 sm:w-1/6 md:w-1/5">
                  <div className="relative aspect-[2/3] h-full">
                    <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                  </div>
                </div>
                <CardContent className="w-3/4 sm:w-5/6 md:w-4/5 p-4">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-pink-600 hover:bg-pink-700">{book.category}</Badge>
                        <span className="text-xs text-muted-foreground">Đọc gần đây: {book.lastReadDate}</span>
                      </div>
                      <h3 className="font-bold text-lg">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.author}</p>

                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Tiến độ: {book.progress}%</span>
                        </div>
                        <Progress value={book.progress} className="h-2" />
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Link href={`/books/${book.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Chi tiết
                        </Button>
                      </Link>
                      <Link href={`/books/${book.id}/read`} className="flex-1">
                        <Button className="w-full bg-pink-600 hover:bg-pink-700">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Tiếp tục đọc
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="completed" className="mt-6">
        <div className="grid grid-cols-1 gap-6">
          {completedBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <div className="flex">
                <div className="w-1/4 sm:w-1/6 md:w-1/5">
                  <div className="relative aspect-[2/3] h-full">
                    <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                  </div>
                </div>
                <CardContent className="w-3/4 sm:w-5/6 md:w-4/5 p-4">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-pink-600 hover:bg-pink-700">{book.category}</Badge>
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
                      </div>
                      <h3 className="font-bold text-lg">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <p className="text-xs text-muted-foreground mt-2">Hoàn thành ngày: {book.completedDate}</p>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Link href={`/books/${book.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Chi tiết
                        </Button>
                      </Link>
                      <Link href={`/books/${book.id}/read`} className="flex-1">
                        <Button className="w-full">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Đọc lại
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
