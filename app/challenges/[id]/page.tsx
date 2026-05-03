"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Calendar, Clock, Star } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"

export default function ChallengeDetailPage({ params }: { params: { id: string } }) {
  const [challenge, setChallenge] = useState<any>(null)
  const [challengeBooks, setChallengeBooks] = useState<any[]>([])

  useEffect(() => {
    // Lấy dữ liệu thử thách
    const challengeId = Number.parseInt(params.id)
    const challengeData = challenges.find((c) => c.id === challengeId)
    setChallenge(challengeData || challenges[0])

    // Lấy danh sách sách cho thử thách
    if (challengeData) {
      if (challengeData.bookIds && challengeData.bookIds.length > 0) {
        // Thử thách có sách cụ thể
        const books = challengeData.bookIds
          .map((bookId: number) => {
            const book = allBooks.find((b) => b.id === bookId)
            return {
              ...book,
              progress: Math.floor(Math.random() * 100), // Giả lập tiến độ đọc
            }
          })
          .filter(Boolean)
        setChallengeBooks(books)
      } else if (challengeData.category === "Thể loại") {
        // Thử thách theo thể loại
        const categoryBooks = allBooks
          .filter((book) => {
            return book.category.toLowerCase().includes(challengeData.categoryFilter.toLowerCase())
          })
          .map((book) => ({
            ...book,
            progress: Math.floor(Math.random() * 100), // Giả lập tiến độ đọc
          }))
        setChallengeBooks(categoryBooks.slice(0, 3)) // Chỉ lấy 3 cuốn
      } else {
        // Thử thách không có sách cụ thể, lấy ngẫu nhiên 3 cuốn
        const randomBooks = [...allBooks]
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((book) => ({
            ...book,
            progress: Math.floor(Math.random() * 100), // Giả lập tiến độ đọc
          }))
        setChallengeBooks(randomBooks)
      }
    }
  }, [params.id])

  if (!challenge) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-10">
          <p>Đang tải...</p>
        </main>
        <Footer />
      </div>
    )
  }

  // Kiểm tra xem có phải là thử thách viết đánh giá không
  const isReviewChallenge = challenge.id === 5

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="mb-6">
          <Link href="/challenges">
            <Button variant="outline" size="sm">
              ← Quay lại danh sách thử thách
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="rounded-full bg-green-100 p-4 dark:bg-green-900">
                {challenge.icon || <Award className="h-10 w-10 text-green-600" />}
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className={
                      challenge.difficulty === "Dễ"
                        ? "border-green-500 text-green-500"
                        : challenge.difficulty === "Trung bình"
                          ? "border-yellow-500 text-yellow-500"
                          : "border-red-500 text-red-500"
                    }
                  >
                    {challenge.difficulty}
                  </Badge>
                  <Badge className="bg-green-600 hover:bg-green-700">{challenge.category}</Badge>
                </div>
                <h1 className="text-3xl font-bold">{challenge.title}</h1>
                <p className="text-muted-foreground mt-2">{challenge.description}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tiến độ: {challenge.progress || 0}%</span>
                <span>Phần thưởng: {challenge.reward}</span>
              </div>
              <Progress value={challenge.progress || 0} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Thời hạn: {challenge.deadline}</span>
                <span>{challenge.participants} người tham gia</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Sách cần đọc cho thử thách này</h2>

              {challengeBooks.length > 0 ? (
                <div className="space-y-4">
                  {challengeBooks.map((book) => (
                    <Card key={book.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-1/4 sm:w-1/6 md:w-1/5">
                          <div className="relative aspect-[2/3] h-full">
                            <ImageWithFallback
                              src={book.coverUrl || "/placeholder.svg"}
                              alt={book.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <CardContent className="w-3/4 sm:w-5/6 md:w-4/5 p-4">
                          <div className="flex flex-col h-full justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <Badge className="bg-green-600 hover:bg-green-700">{book.category}</Badge>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                                  <span className="text-sm">{book.rating}</span>
                                </div>
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
                                <Button className="w-full bg-green-600 hover:bg-green-700">
                                  <BookOpen className="h-4 w-4 mr-2" />
                                  {book.progress > 0 ? "Tiếp tục đọc" : "Bắt đầu đọc"}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Thử thách này không yêu cầu đọc sách cụ thể.</p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Thông tin thử thách</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phần thưởng:</span>
                    <span className="font-medium">{challenge.reward}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thời hạn:</span>
                    <span className="font-medium">{challenge.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Độ khó:</span>
                    <span className="font-medium">{challenge.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loại thử thách:</span>
                    <span className="font-medium">{challenge.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Người tham gia:</span>
                    <span className="font-medium">{challenge.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Mẹo hoàn thành</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Đọc sách mỗi ngày ít nhất 15 phút</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Đặt lịch đọc sách vào cùng một thời điểm mỗi ngày</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Sử dụng tính năng đánh dấu để dễ dàng quay lại</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {isReviewChallenge ? (
              <Link href="/challenges/review">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Star className="h-4 w-4 mr-2" />
                  Viết đánh giá sách
                </Button>
              </Link>
            ) : (
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Award className="h-4 w-4 mr-2" />
                Bắt đầu thử thách
              </Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Dữ liệu thử thách
const challenges = [
  {
    id: 1,
    title: "Đọc một truyện ngắn",
    description: "Hoàn thành việc đọc một truyện ngắn trong tuần này",
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
    progress: 0,
    reward: "10 điểm",
    deadline: "7 ngày",
    difficulty: "Dễ",
    category: "Đọc sách",
    participants: 245,
    bookIds: [3], // Tắt Đèn
  },
  {
    id: 2,
    title: "Đọc 5 ngày liên tiếp",
    description: "Đọc sách ít nhất 15 phút mỗi ngày trong 5 ngày liên tiếp",
    icon: <Calendar className="h-8 w-8 text-green-600" />,
    progress: 40,
    reward: "50 điểm",
    deadline: "5 ngày",
    difficulty: "Trung bình",
    category: "Đọc liên tục",
    participants: 189,
    bookIds: null, // Không liên kết với sách cụ thể
  },
  {
    id: 3,
    title: "Hoàn thành 100 trang",
    description: "Đọc tổng cộng 100 trang sách trong tuần này",
    icon: <Clock className="h-8 w-8 text-green-600" />,
    progress: 65,
    reward: "30 điểm",
    deadline: "3 ngày",
    difficulty: "Trung bình",
    category: "Số trang",
    participants: 312,
    bookIds: null, // Không liên kết với sách cụ thể
  },
  {
    id: 4,
    title: "Đọc một tác phẩm cổ điển",
    description: "Hoàn thành việc đọc một tác phẩm văn học cổ điển trước năm 1975",
    icon: <Award className="h-8 w-8 text-green-600" />,
    progress: 25,
    reward: "100 điểm",
    deadline: "14 ngày",
    difficulty: "Khó",
    category: "Thể loại",
    participants: 98,
    categoryFilter: "cổ điển",
    bookIds: [1, 2], // Truyện Kiều, Số Đỏ
  },
  {
    id: 5,
    title: "Viết đánh giá sau khi đọc xong sách",
    description: "Hoàn thành việc đọc một cuốn sách và viết đánh giá chi tiết",
    icon: <Star className="h-8 w-8 text-green-600" />,
    progress: 10,
    reward: "40 điểm",
    deadline: "10 ngày",
    difficulty: "Trung bình",
    category: "Viết đánh giá",
    participants: 156,
    bookIds: [5], // Nhật Ký Trong Tù
  },
]

// Dữ liệu sách
const allBooks = [
  {
    id: 1,
    title: "Truyện Kiều",
    author: "Nguyễn Du",
    coverUrl: "/images/books/truyen-kieu.png",
    category: "Văn học cổ điển",
    description: "Tác phẩm kinh điển của văn học Việt Nam",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Số Đỏ",
    author: "Vũ Trọng Phụng",
    coverUrl: "/images/books/so-do.png",
    category: "Văn học cổ điển",
    description: "Tác phẩm châm biếm xã hội Việt Nam thời kỳ Pháp thuộc",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Tắt Đèn",
    author: "Ngô Tất Tố",
    coverUrl: "/images/books/tat-den.png",
    category: "Tiểu thuyết",
    description: "Tác phẩm phản ánh cuộc sống của người nông dân Việt Nam",
    rating: 4.6,
  },
  {
    id: 4,
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    coverUrl: "/images/books/de-men-phieu-luu-ky.png",
    category: "Văn học thiếu nhi",
    description: "Tác phẩm văn học thiếu nhi nổi tiếng của Việt Nam",
    rating: 4.8,
  },
  {
    id: 5,
    title: "Nhật Ký Trong Tù",
    author: "Hồ Chí Minh",
    coverUrl: "/images/books/nhat-ky-trong-tu.png",
    category: "Thơ",
    description: "Tập thơ chữ Hán của Chủ tịch Hồ Chí Minh",
    rating: 4.9,
  },
]
