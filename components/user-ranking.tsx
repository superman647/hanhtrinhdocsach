import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, Award } from "lucide-react"

export function UserRanking() {
  // Mock data for current user
  const currentUser = {
    name: "Bạn",
    rank: "Phù thủy tri thức",
    points: 1800,
    nextRank: "Kiệt tướng tri thức",
    pointsToNextRank: 1200,
    position: 15,
    totalUsers: 124,
    percentile: 88, // Top 12%
    booksRead: 12,
  }

  // Calculate progress percentage
  const progressPercentage = (currentUser.points / (currentUser.points + currentUser.pointsToNextRank)) * 100

  // Rank levels with colors
  const rankLevels = [
    { name: "Mầm non đọc sách", color: "bg-green-500" },
    { name: "Tập sự văn chương", color: "bg-blue-500" },
    { name: "Phù thủy tri thức", color: "bg-purple-500" },
    { name: "Kiệt tướng tri thức", color: "bg-yellow-500" },
    { name: "Thần đồng đọc sách", color: "bg-orange-500" },
    { name: "Bậc thầy văn chương", color: "bg-red-500" },
    { name: "Huyền thoại tri thức", color: "bg-pink-600" },
  ]

  // Find current rank color
  const currentRankColor = rankLevels.find((rank) => rank.name === currentUser.rank)?.color || "bg-purple-500"

  return (
    <div className="rounded-lg border p-6 bg-muted/50">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <h2 className="text-xl font-bold">Xếp hạng của bạn</h2>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground">
                  Vị trí hiện tại: #{currentUser.position} / {currentUser.totalUsers}
                </p>
                <Badge variant="outline" className="text-pink-600 border-pink-600">
                  Top {currentUser.percentile}%
                </Badge>
              </div>
            </div>
            <Link href="/leaderboard/achievements">
              <Button className="bg-pink-600 hover:bg-pink-700">
                <Trophy className="mr-2 h-4 w-4" />
                Xem thành tích
              </Button>
            </Link>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Badge className={`${currentRankColor} text-white`}>{currentUser.rank}</Badge>
              <span className="text-sm text-muted-foreground">
                {currentUser.points} / {currentUser.points + currentUser.pointsToNextRank} điểm
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Còn {currentUser.pointsToNextRank} điểm nữa để đạt hạng{" "}
                <span className="font-medium">{currentUser.nextRank}</span>
              </span>
              <span className="text-muted-foreground">
                <Award className="inline-block h-4 w-4 mr-1 text-pink-600" />
                {currentUser.booksRead} sách đã đọc
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 p-4 rounded-lg bg-background border">
          <h3 className="font-medium">Cách tăng điểm nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
              <span>Hoàn thành thử thách "Đọc 5 ngày liên tiếp" (+50 điểm)</span>
            </li>
            <li className="flex items-start gap-2">
              <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
              <span>Đọc xong "Truyện Kiều" và vượt qua bài kiểm tra (+30 điểm)</span>
            </li>
            <li className="flex items-start gap-2">
              <BookOpen className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
              <span>Viết đánh giá cho 3 cuốn sách đã đọc (+15 điểm)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
