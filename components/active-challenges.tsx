import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Calendar, Clock } from "lucide-react"

export function ActiveChallenges() {
  // Mock data for active challenges
  const activeChallenges = [
    {
      id: 1,
      title: "Đọc một truyện ngắn",
      description: "Hoàn thành việc đọc một truyện ngắn trong tuần này",
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      progress: 0,
      reward: "10 điểm",
      deadline: "7 ngày",
    },
    {
      id: 2,
      title: "Đọc 5 ngày liên tiếp",
      description: "Đọc sách ít nhất 15 phút mỗi ngày trong 5 ngày liên tiếp",
      icon: <Calendar className="h-8 w-8 text-pink-600" />,
      progress: 40,
      reward: "50 điểm",
      deadline: "5 ngày",
    },
    {
      id: 3,
      title: "Hoàn thành 100 trang",
      description: "Đọc tổng cộng 100 trang sách trong tuần này",
      icon: <Clock className="h-8 w-8 text-pink-600" />,
      progress: 65,
      reward: "30 điểm",
      deadline: "3 ngày",
    },
    {
      id: 4,
      title: "Đọc một tác phẩm cổ điển",
      description: "Hoàn thành việc đọc một tác phẩm văn học cổ điển trước năm 1975",
      icon: <Award className="h-8 w-8 text-pink-600" />,
      progress: 25,
      reward: "100 điểm",
      deadline: "14 ngày",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {activeChallenges.map((challenge) => (
        <Card key={challenge.id} className="flex flex-col">
          <CardContent className="flex flex-col items-center p-6">
            <div className="mb-4 rounded-full bg-pink-100 p-3 dark:bg-pink-900">{challenge.icon}</div>
            <h3 className="text-xl font-bold text-center">{challenge.title}</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">{challenge.description}</p>
            <div className="w-full mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tiến độ: {challenge.progress}%</span>
                <span>Phần thưởng: {challenge.reward}</span>
              </div>
              <Progress value={challenge.progress} className="h-2" />
              <div className="text-xs text-muted-foreground text-right">Còn lại: {challenge.deadline}</div>
            </div>
          </CardContent>
          <CardFooter className="pt-0 mt-auto">
            <Link href={`/challenges/${challenge.id}`} className="w-full">
              <Button className="w-full">Bắt đầu thử thách</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
