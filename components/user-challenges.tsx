import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Calendar, Clock } from "lucide-react"

export function UserChallenges() {
  // Mock data for active challenges
  const activeChallenge = [
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
    },
  ]

  // Mock data for completed challenges
  const completedChallenges = [
    {
      id: 4,
      title: "Đọc sách 3 ngày liên tiếp",
      description: "Đọc sách ít nhất 15 phút mỗi ngày trong 3 ngày liên tiếp",
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      reward: "20 điểm",
      completedDate: "15/04/2023",
      difficulty: "Dễ",
      category: "Đọc liên tục",
    },
    {
      id: 5,
      title: "Hoàn thành 50 trang",
      description: "Đọc tổng cộng 50 trang sách trong tuần",
      icon: <Clock className="h-8 w-8 text-green-600" />,
      reward: "15 điểm",
      completedDate: "10/04/2023",
      difficulty: "Dễ",
      category: "Số trang",
    },
    {
      id: 6,
      title: "Đọc một tác phẩm thơ",
      description: "Hoàn thành việc đọc một tác phẩm thơ",
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      reward: "25 điểm",
      completedDate: "05/04/2023",
      difficulty: "Dễ",
      category: "Đọc sách",
    },
  ]

  return (
    <Tabs defaultValue="active">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="active">Đang tham gia</TabsTrigger>
        <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeChallenge.map((challenge) => (
            <Card key={challenge.id} className="flex flex-col">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900">{challenge.icon}</div>
                <div className="flex items-center gap-2 mb-2">
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
                  <Button className="w-full">Tiếp tục thử thách</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="completed" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {completedChallenges.map((challenge) => (
            <Card key={challenge.id} className="flex flex-col">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex items-center gap-2 mb-2">
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
                <h3 className="text-xl font-bold text-center">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">{challenge.description}</p>
                <div className="w-full mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Phần thưởng: {challenge.reward}</span>
                    <span>Hoàn thành: {challenge.completedDate}</span>
                  </div>
                  <Progress value={100} className="h-2 bg-green-200 dark:bg-green-900" />
                  <div className="text-xs text-green-600 dark:text-green-400 text-center font-medium">
                    Đã hoàn thành
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
