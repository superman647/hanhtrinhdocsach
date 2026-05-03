import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Award, Trophy, Clock, Calendar } from "lucide-react"
import { UserStats } from "@/components/user-stats"
import { UserChallenges } from "@/components/user-challenges"
import { UserBooks } from "@/components/user-books"
import { UserAchievements } from "@/components/user-achievements"
import { ReadingStreak } from "@/components/reading-streak"
import { RankLevels } from "@/components/rank-levels"
import { ImageWithFallback } from "@/components/image-with-fallback"

export default function ProfilePage() {
  // Mock data for user
  const user = {
    name: "Nguyễn Văn A",
    avatar: "/images/avatar/avatar1.png",
    rank: "Phù thủy tri thức",
    points: 1800,
    nextRank: "Kiệt tướng tri thức",
    pointsToNextRank: 1200,
    joinDate: "15/03/2023",
    streak: 7,
    booksRead: 12,
    challengesCompleted: 8,
    totalReadingTime: "35 giờ",
  }

  // Calculate progress percentage
  const progressPercentage = (user.points / (user.points + user.pointsToNextRank)) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <ImageWithFallback
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <Badge className="mt-1 mb-2 bg-purple-500 hover:bg-purple-600">{user.rank}</Badge>

                  <div className="w-full mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ cấp độ</span>
                      <span>
                        {user.points} / {user.points + user.pointsToNextRank}
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Còn {user.pointsToNextRank} điểm nữa để đạt hạng{" "}
                      <span className="font-medium">{user.nextRank}</span>
                    </p>
                  </div>

                  <div className="w-full mt-6 grid grid-cols-2 gap-2">
                    <Link href="/bookshelf">
                      <Button variant="outline" className="w-full">
                        Tủ sách
                      </Button>
                    </Link>
                    <Link href="/settings">
                      <Button variant="outline" className="w-full">
                        Cài đặt
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thống kê</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-pink-600 mr-2" />
                      <span>Sách đã đọc</span>
                    </div>
                    <span className="font-bold">{user.booksRead}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-pink-600 mr-2" />
                      <span>Thử thách hoàn thành</span>
                    </div>
                    <span className="font-bold">{user.challengesCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-pink-600 mr-2" />
                      <span>Ngày đọc liên tiếp</span>
                    </div>
                    <span className="font-bold">{user.streak}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-pink-600 mr-2" />
                      <span>Tổng thời gian đọc</span>
                    </div>
                    <span className="font-bold">{user.totalReadingTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-pink-600 mr-2" />
                      <span>Tổng điểm</span>
                    </div>
                    <span className="font-bold">{user.points}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Điểm danh hôm nay</CardTitle>
                <CardDescription>Đọc sách mỗi ngày để nhận thêm điểm</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Điểm danh</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="stats">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="stats">Thống kê</TabsTrigger>
                <TabsTrigger value="challenges">Thử thách</TabsTrigger>
                <TabsTrigger value="books">Sách đã đọc</TabsTrigger>
                <TabsTrigger value="achievements">Thành tích</TabsTrigger>
                <TabsTrigger value="streak">Thói quen</TabsTrigger>
              </TabsList>
              <TabsContent value="stats" className="mt-6">
                <UserStats />
              </TabsContent>
              <TabsContent value="challenges" className="mt-6">
                <UserChallenges />
              </TabsContent>
              <TabsContent value="books" className="mt-6">
                <UserBooks />
              </TabsContent>
              <TabsContent value="achievements" className="mt-6">
                <UserAchievements />
              </TabsContent>
              <TabsContent value="streak" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ReadingStreak />
                  <RankLevels />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
