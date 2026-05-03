import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UserAchievements() {
  // Mock data for unlocked achievements
  const unlockedAchievements = [
    {
      id: 1,
      title: "Bắt đầu hành trình",
      description: "Đọc cuốn sách đầu tiên",
      imageUrl: "/placeholder.svg?height=80&width=80",
      unlockedDate: "01/04/2023",
      category: "Đọc sách",
    },
    {
      id: 2,
      title: "Độc giả kiên trì",
      description: "Đọc sách 3 ngày liên tiếp",
      imageUrl: "/placeholder.svg?height=80&width=80",
      unlockedDate: "05/04/2023",
      category: "Đọc liên tục",
    },
    {
      id: 3,
      title: "Nhà thơ",
      description: "Đọc xong một tác phẩm thơ",
      imageUrl: "/placeholder.svg?height=80&width=80",
      unlockedDate: "10/04/2023",
      category: "Thể loại",
    },
    {
      id: 4,
      title: "Thử thách đầu tiên",
      description: "Hoàn thành thử thách đầu tiên",
      imageUrl: "/placeholder.svg?height=80&width=80",
      unlockedDate: "12/04/2023",
      category: "Thử thách",
    },
    {
      id: 5,
      title: "Nhà phê bình",
      description: "Viết đánh giá đầu tiên",
      imageUrl: "/placeholder.svg?height=80&width=80",
      unlockedDate: "15/04/2023",
      category: "Đánh giá",
    },
  ]

  // Mock data for locked achievements
  const lockedAchievements = [
    {
      id: 6,
      title: "Độc giả chăm chỉ",
      description: "Đọc sách 10 ngày liên tiếp",
      imageUrl: "/placeholder.svg?height=80&width=80",
      category: "Đọc liên tục",
      progress: 50,
    },
    {
      id: 7,
      title: "Nhà văn học cổ điển",
      description: "Đọc 5 tác phẩm văn học cổ điển",
      imageUrl: "/placeholder.svg?height=80&width=80",
      category: "Thể loại",
      progress: 20,
    },
    {
      id: 8,
      title: "Thợ săn thử thách",
      description: "Hoàn thành 10 thử thách",
      imageUrl: "/placeholder.svg?height=80&width=80",
      category: "Thử thách",
      progress: 40,
    },
    {
      id: 9,
      title: "Nhà sưu tầm",
      description: "Đọc 20 cuốn sách",
      imageUrl: "/placeholder.svg?height=80&width=80",
      category: "Đọc sách",
      progress: 30,
    },
    {
      id: 10,
      title: "Chuyên gia đánh giá",
      description: "Viết 10 đánh giá sách",
      imageUrl: "/placeholder.svg?height=80&width=80",
      category: "Đánh giá",
      progress: 10,
    },
  ]

  return (
    <Tabs defaultValue="unlocked">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="unlocked">Đã mở khóa</TabsTrigger>
        <TabsTrigger value="locked">Chưa mở khóa</TabsTrigger>
      </TabsList>
      <TabsContent value="unlocked" className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {unlockedAchievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <div className="relative h-16 w-16">
                    <Image
                      src={achievement.imageUrl || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Badge className="mb-2 bg-green-600 hover:bg-green-700">{achievement.category}</Badge>
                <h3 className="font-bold text-lg">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                <p className="text-xs text-muted-foreground mt-4">Mở khóa ngày: {achievement.unlockedDate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="locked" className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lockedAchievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden opacity-70">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <div className="relative h-16 w-16 grayscale">
                    <Image
                      src={achievement.imageUrl || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Badge className="mb-2" variant="outline">
                  {achievement.category}
                </Badge>
                <h3 className="font-bold text-lg">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                <p className="text-xs text-muted-foreground mt-4">Tiến độ: {achievement.progress}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
