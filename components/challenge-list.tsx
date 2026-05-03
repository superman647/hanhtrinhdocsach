import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Calendar, Clock, Star } from "lucide-react"

export function ChallengeList() {
  // Mock data for challenges
  const challenges = [
    {
      id: 1,
      title: "Đọc một truyện ngắn",
      description: "Hoàn thành việc đọc một truyện ngắn trong tuần này",
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      progress: 0,
      reward: "10 điểm",
      deadline: "7 ngày",
      difficulty: "Dễ",
      category: "Đọc sách",
      participants: 245,
      bookId: 3, // Tắt Đèn - truyện ngắn
      path: "/challenges/1",
    },
    {
      id: 2,
      title: "Đọc 5 ngày liên tiếp",
      description: "Đọc sách ít nhất 15 phút mỗi ngày trong 5 ngày liên tiếp",
      icon: <Calendar className="h-8 w-8 text-pink-600" />,
      progress: 40,
      reward: "50 điểm",
      deadline: "5 ngày",
      difficulty: "Trung bình",
      category: "Đọc liên tục",
      participants: 189,
      bookId: null, // Không liên kết với sách cụ thể
      path: "/challenges/2",
    },
    {
      id: 3,
      title: "Hoàn thành 100 trang",
      description: "Đọc tổng cộng 100 trang sách trong tuần này",
      icon: <Clock className="h-8 w-8 text-pink-600" />,
      progress: 65,
      reward: "30 điểm",
      deadline: "3 ngày",
      difficulty: "Trung bình",
      category: "Số trang",
      participants: 312,
      bookId: null, // Không liên kết với sách cụ thể
      path: "/challenges/3",
    },
    {
      id: 4,
      title: "Đọc một tác phẩm cổ điển",
      description: "Hoàn thành việc đọc một tác phẩm văn học cổ điển trước năm 1975",
      icon: <Award className="h-8 w-8 text-pink-600" />,
      progress: 25,
      reward: "100 điểm",
      deadline: "14 ngày",
      difficulty: "Khó",
      category: "Thể loại",
      participants: 98,
      bookId: 1, // Truyện Kiều
      path: "/challenges/4",
    },
    {
      id: 5,
      title: "Viết đánh giá sau khi đọc xong sách",
      description: "Hoàn thành việc đọc một cuốn sách và viết đánh giá chi tiết",
      icon: <Star className="h-8 w-8 text-pink-600" />,
      progress: 10,
      reward: "40 điểm",
      deadline: "10 ngày",
      difficulty: "Trung bình",
      category: "Viết đánh giá",
      participants: 156,
      bookId: 5, // Nhật Ký Trong Tù
      path: "/challenges/review", // Đường dẫn đến trang viết đánh giá
    },
    {
      id: 6,
      title: "Đọc 3 cuốn sách cùng tác giả",
      description: "Hoàn thành việc đọc 3 cuốn sách của cùng một tác giả",
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      progress: 33,
      reward: "80 điểm",
      deadline: "30 ngày",
      difficulty: "Khó",
      category: "Đọc sách",
      participants: 76,
      bookId: 2, // Số Đỏ
      path: "/challenges/6",
    },
    {
      id: 7,
      title: "Đọc sách 10 ngày liên tiếp",
      description: "Đọc sách ít nhất 30 phút mỗi ngày trong 10 ngày liên tiếp",
      icon: <Calendar className="h-8 w-8 text-pink-600" />,
      progress: 20,
      reward: "100 điểm",
      deadline: "8 ngày còn lại",
      difficulty: "Khó",
      category: "Đọc liên tục",
      participants: 124,
      bookId: null, // Không liên kết với sách cụ thể
      path: "/challenges/7",
    },
    {
      id: 8,
      title: "Hoàn thành 500 trang",
      description: "Đọc tổng cộng 500 trang sách trong tháng này",
      icon: <Clock className="h-8 w-8 text-pink-600" />,
      progress: 45,
      reward: "150 điểm",
      deadline: "15 ngày",
      difficulty: "Khó",
      category: "Số trang",
      participants: 87,
      bookId: null, // Không liên kết với sách cụ thể
      path: "/challenges/8",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Hiển thị {challenges.length} thử thách</p>
        <select className="p-2 border rounded-md text-sm">
          <option value="popular">Phổ biến nhất</option>
          <option value="newest">Mới nhất</option>
          <option value="easiest">Dễ nhất</option>
          <option value="hardest">Khó nhất</option>
          <option value="shortest">Thời gian ngắn nhất</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="flex flex-col">
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full bg-pink-100 p-3 dark:bg-pink-900">{challenge.icon}</div>
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
                <Badge className="bg-pink-600 hover:bg-pink-700">{challenge.category}</Badge>
              </div>
              <h3 className="text-xl font-bold text-center">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">{challenge.description}</p>
              <div className="w-full mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tiến độ: {challenge.progress}%</span>
                  <span>Phần thưởng: {challenge.reward}</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Thời hạn: {challenge.deadline}</span>
                  <span>{challenge.participants} người tham gia</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 mt-auto">
              <Link href={challenge.path} className="w-full">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Bắt đầu thử thách</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
