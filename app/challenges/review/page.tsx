"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { BookOpen, Check, Star } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function WriteReviewPage() {
  const router = useRouter()
  const [selectedBook, setSelectedBook] = useState("")
  const [review, setReview] = useState("")
  const [rating, setRating] = useState<number>(0)
  const [showDialog, setShowDialog] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const minChars = 200

  // Mock data for books
  const books = [
    {
      id: "1",
      title: "Truyện Kiều",
      author: "Nguyễn Du",
      coverUrl: "/images/books/truyen-kieu.png",
    },
    {
      id: "2",
      title: "Số Đỏ",
      author: "Vũ Trọng Phụng",
      coverUrl: "/images/books/so-do.png",
    },
    {
      id: "3",
      title: "Tắt Đèn",
      author: "Ngô Tất Tố",
      coverUrl: "/images/books/tat-den.png",
    },
    {
      id: "4",
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      coverUrl: "/images/books/de-men-phieu-luu-ky.png",
    },
    {
      id: "5",
      title: "Nhật Ký Trong Tù",
      author: "Hồ Chí Minh",
      coverUrl: "/images/books/nhat-ky-trong-tu.png",
    },
  ]

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value)
    setCharCount(e.target.value.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (review.length >= minChars && selectedBook && rating > 0) {
      setShowDialog(true)
    }
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
    router.push("/challenges")
  }

  const selectedBookData = books.find((book) => book.id === selectedBook)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="mb-6">
          <Button variant="outline" onClick={() => router.back()}>
            ← Quay lại thử thách
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold mb-6">Viết đánh giá sách</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="book">Chọn sách</Label>
                    <Select value={selectedBook} onValueChange={setSelectedBook}>
                      <SelectTrigger id="book">
                        <SelectValue placeholder="Chọn sách bạn muốn đánh giá" />
                      </SelectTrigger>
                      <SelectContent>
                        {books.map((book) => (
                          <SelectItem key={book.id} value={book.id}>
                            {book.title} - {book.author}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rating">Đánh giá</Label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                          <Star
                            className={`h-6 w-6 ${
                              star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="review">Cảm nhận của bạn</Label>
                      <span className={`text-xs ${charCount < minChars ? "text-red-500" : "text-green-500"}`}>
                        {charCount}/{minChars} ký tự
                      </span>
                    </div>
                    <Textarea
                      id="review"
                      value={review}
                      onChange={handleReviewChange}
                      placeholder="Chia sẻ cảm nhận của bạn về cuốn sách này..."
                      className="min-h-[200px]"
                    />
                    {charCount < minChars && (
                      <p className="text-xs text-red-500">
                        Vui lòng viết ít nhất {minChars} ký tự để hoàn thành thử thách
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700"
                    disabled={review.length < minChars || !selectedBook || rating === 0}
                  >
                    Gửi đánh giá
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {selectedBookData && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-48 mb-4">
                      <ImageWithFallback
                        src={selectedBookData.coverUrl || "/placeholder.svg"}
                        alt={selectedBookData.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{selectedBookData.title}</h3>
                    <p className="text-sm text-muted-foreground">{selectedBookData.author}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Hướng dẫn viết đánh giá</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                    <span>Chia sẻ cảm nhận chân thực của bạn về cuốn sách</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                    <span>Nêu những điểm bạn thích và không thích về cuốn sách</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                    <span>Chia sẻ bài học hoặc thông điệp bạn nhận được từ cuốn sách</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                    <span>Viết ít nhất 200 ký tự để hoàn thành thử thách</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Phần thưởng</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold">40 điểm</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hoàn thành việc viết đánh giá sách với ít nhất 200 ký tự để nhận 40 điểm thưởng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Đánh giá đã được gửi thành công!</DialogTitle>
              <DialogDescription>
                Ban tổ chức đã nhận được bài đánh giá của bạn và sẽ tiến hành xem xét.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center py-4">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-full">
                <Check className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <p className="text-center">
              Cảm ơn bạn đã chia sẻ cảm nhận về cuốn sách. Bài đánh giá của bạn sẽ được hiển thị sau khi được phê duyệt.
            </p>
            <p className="text-center text-sm text-green-600 font-medium">
              Bạn đã nhận được 40 điểm thưởng cho việc hoàn thành thử thách này!
            </p>
            <DialogFooter className="sm:justify-center">
              <Button type="button" onClick={handleCloseDialog} className="bg-pink-600 hover:bg-pink-700">
                Quay lại trang thử thách
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}
