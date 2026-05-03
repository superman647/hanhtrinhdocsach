"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Star } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ImageWithFallback } from "./image-with-fallback"

// Tạo context để quản lý điểm số
export const UserPointsContext = createContext({
  points: 180,
  setPoints: (points: number) => {},
})

export function UserPointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(180)
  return <UserPointsContext.Provider value={{ points, setPoints }}>{children}</UserPointsContext.Provider>
}

export function RewardsList() {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedReward, setSelectedReward] = useState<any>(null)
  const { points, setPoints } = useContext(UserPointsContext)

  // Mock data for rewards
  const rewards = [
    {
      id: 1,
      title: 'Badge "9-10 điểm kiểm tra"',
      description: "Huy hiệu đặc biệt cho những độc giả xuất sắc vượt qua bài kiểm tra với điểm số cao",
      imageUrl: "/images/rewards/badge.png",
      points: 50,
      stock: "Không giới hạn",
      category: "Kỹ thuật số",
    },
    {
      id: 2,
      title: "Móc khóa sách mini",
      description: "Móc khóa hình cuốn sách nhỏ xinh với logo Vĩ Dạ Reading Challenges",
      imageUrl: "/images/rewards/keychain.png",
      points: 100,
      stock: "Còn 15 sản phẩm",
      category: "Vật phẩm",
    },
    {
      id: 3,
      title: "Voucher giảm giá sách 10%",
      description: "Voucher giảm giá 10% khi mua sách tại các nhà sách đối tác",
      imageUrl: "/images/rewards/voucher.png",
      points: 150,
      stock: "Còn 30 voucher",
      category: "Voucher",
    },
    {
      id: 4,
      title: "Gấu bông đáng yêu",
      description: "Gấu bông nhỏ xinh với trang phục độc giả dễ thương",
      imageUrl: "/images/rewards/teddy.png",
      points: 300,
      stock: "Còn 5 sản phẩm",
      category: "Vật phẩm",
    },
    {
      id: 5,
      title: "Một cuốn sách miễn phí",
      description: "Voucher đổi một cuốn sách miễn phí tại các nhà sách đối tác (giá trị tối đa 100.000đ)",
      imageUrl: "/images/rewards/book.png",
      points: 500,
      stock: "Còn 10 voucher",
      category: "Voucher",
    },
    {
      id: 6,
      title: "Khung avatar đặc biệt",
      description: 'Khung avatar đặc biệt "Chiến thần đọc sách" cho tài khoản của bạn',
      imageUrl: "/images/rewards/avatar-frame.png",
      points: 200,
      stock: "Không giới hạn",
      category: "Kỹ thuật số",
    },
    {
      id: 7,
      title: "Túi tote đọc sách",
      description: "Túi tote với thiết kế độc đáo dành cho những người yêu sách",
      imageUrl: "/images/rewards/tote.png",
      points: 350,
      stock: "Còn 8 sản phẩm",
      category: "Vật phẩm",
    },
    {
      id: 8,
      title: "Hiệu ứng đặc biệt trên bảng xếp hạng",
      description: "Hiệu ứng đặc biệt cho tên của bạn trên bảng xếp hạng trong 1 tháng",
      imageUrl: "/images/rewards/effect.png",
      points: 250,
      stock: "Không giới hạn",
      category: "Kỹ thuật số",
    },
  ]

  const handleRedeemReward = (reward: any) => {
    setSelectedReward(reward)
    // Trừ điểm khi đổi quà
    setPoints(points - reward.points)
    setShowDialog(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Danh sách phần quà</h2>
        <div className="flex items-center gap-2 bg-pink-50 dark:bg-pink-900 px-4 py-2 rounded-full">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <span className="font-bold">{points} điểm</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((reward) => (
          <Card key={reward.id} className="overflow-hidden flex flex-col">
            <div className="aspect-square relative">
              <ImageWithFallback
                src={reward.imageUrl || "/placeholder.svg"}
                alt={reward.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <CardContent className="p-4 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <Badge className="bg-pink-600 hover:bg-pink-700">{reward.category}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-bold">{reward.points}</span>
                </div>
              </div>
              <h3 className="font-bold line-clamp-1">{reward.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-3 flex-grow">{reward.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{reward.stock}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-pink-600 hover:bg-pink-700"
                disabled={points < reward.points}
                onClick={() => points >= reward.points && handleRedeemReward(reward)}
              >
                <Gift className="h-4 w-4 mr-2" />
                {points >= reward.points ? "Đổi quà" : `Còn thiếu ${reward.points - points} điểm`}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Đổi quà thành công!</DialogTitle>
            <DialogDescription>Bạn đã đổi thành công phần quà "{selectedReward?.title}".</DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-4">
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-full">
              <Gift className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <p className="text-center">
            {selectedReward?.category === "Kỹ thuật số"
              ? "Phần quà kỹ thuật số đã được thêm vào tài khoản của bạn."
              : "Phần quà vật lý sẽ được gửi đến địa chỉ của bạn trong vòng 7-10 ngày làm việc."}
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Điểm của bạn đã được trừ {selectedReward?.points} điểm. Số điểm hiện tại: {points} điểm.
          </p>
          <DialogFooter className="sm:justify-center">
            <Button type="button" onClick={() => setShowDialog(false)} className="bg-pink-600 hover:bg-pink-700">
              Đóng
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
