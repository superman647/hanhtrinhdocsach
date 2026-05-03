"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Download, Share2 } from "lucide-react"

export default function AchievementsPage() {
  const router = useRouter()
  const [showShareOptions, setShowShareOptions] = useState(false)

  // Mock data for user
  const user = {
    name: "Nguyễn Văn A",
    booksRead: 12,
    points: 350,
    rank: 15,
    totalUsers: 124,
    percentile: 88, // Top 12%
    joinDate: "15/03/2023",
    achievements: ["Đọc 10+ cuốn sách", "Hoàn thành 5 thử thách", "Đọc sách 7 ngày liên tiếp"],
  }

  const handleDownload = () => {
    // Trong thực tế, đây sẽ là chức năng tải giấy chứng nhận
    alert("Đang tải giấy chứng nhận...")
  }

  const handleShare = () => {
    setShowShareOptions(!showShareOptions)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="mb-6">
          <Button variant="outline" onClick={() => router.back()}>
            ← Quay lại bảng xếp hạng
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="relative w-full bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 rounded-lg overflow-hidden border">
                  <div className="p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-full flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <Award className="h-6 w-6 text-pink-600 mr-2" />
                        <span className="font-bold">Vĩ Dạ Reading Challenges</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Ngày cấp: {new Date().toLocaleDateString()}</div>
                    </div>

                    <div className="mb-6">
                      <h1 className="text-3xl font-bold mb-2">GIẤY CHỨNG NHẬN</h1>
                      <div className="w-16 h-1 bg-pink-600 mx-auto mb-4"></div>
                      <p className="text-lg">Chứng nhận</p>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">{user.name}</h2>

                    <p className="text-lg mb-6">
                      Đã tham gia chương trình "Vĩ Dạ Reading Challenges" và hoàn thành
                      <br />
                      <span className="font-bold">{user.booksRead} cuốn sách</span> với tổng điểm
                      <span className="font-bold"> {user.points}</span>
                    </p>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Thành tích nổi bật:</p>
                      <ul className="text-sm">
                        {user.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full flex justify-between items-center mt-6">
                      <div className="text-sm">ID: VD-{Math.floor(Math.random() * 10000)}</div>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                          <Award className="h-6 w-6 text-pink-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6 gap-4">
                  <Button onClick={handleDownload} className="bg-pink-600 hover:bg-pink-700">
                    <Download className="mr-2 h-4 w-4" />
                    Tải giấy chứng nhận
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Chia sẻ
                  </Button>
                </div>

                {showShareOptions && (
                  <div className="mt-4 p-4 border rounded-lg">
                    <p className="mb-2 font-medium">Chia sẻ thành tích của bạn:</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm">
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm">
                        Sao chép liên kết
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Thống kê của bạn</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Xếp hạng:</span>
                    <span className="font-medium">
                      #{user.rank} / {user.totalUsers}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Top:</span>
                    <span className="font-medium">{user.percentile}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sách đã đọc:</span>
                    <span className="font-medium">{user.booksRead}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tổng điểm:</span>
                    <span className="font-medium">{user.points}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tham gia từ:</span>
                    <span className="font-medium">{user.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Thành tích nổi bật</h3>
                <ul className="space-y-2">
                  {user.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
