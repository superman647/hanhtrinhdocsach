"use client"

import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Gift, Star } from "lucide-react"
import { UserPointsContext } from "./rewards-list"

export function UserPoints() {
  const { points } = useContext(UserPointsContext)

  // Mock data for current user
  const currentUser = {
    points: points,
    redeemablePoints: points,
    totalPointsEarned: points + 50, // Đã dùng 50 điểm
    pointsSpent: 50,
    rewardsRedeemed: 1,
  }

  return (
    <div className="rounded-lg border p-6 bg-muted/50">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <h2 className="text-xl font-bold">Điểm thưởng của bạn</h2>
              <p className="text-muted-foreground">Dùng điểm để đổi những phần quà hấp dẫn</p>
            </div>
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Gift className="mr-2 h-4 w-4" />
              Đổi quà ngay
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Điểm có thể đổi quà</span>
              <span className="text-sm text-muted-foreground">
                {currentUser.redeemablePoints} / {currentUser.points} điểm
              </span>
            </div>
            <Progress value={(currentUser.redeemablePoints / currentUser.points) * 100} className="h-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="rounded-lg border p-3 text-center">
              <p className="text-2xl font-bold">{currentUser.points}</p>
              <p className="text-xs text-muted-foreground">Tổng điểm hiện tại</p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <p className="text-2xl font-bold">{currentUser.redeemablePoints}</p>
              <p className="text-xs text-muted-foreground">Điểm có thể đổi</p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <p className="text-2xl font-bold">{currentUser.totalPointsEarned}</p>
              <p className="text-xs text-muted-foreground">Tổng điểm đã kiếm</p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <p className="text-2xl font-bold">{currentUser.rewardsRedeemed}</p>
              <p className="text-xs text-muted-foreground">Quà đã đổi</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 p-4 rounded-lg bg-background border">
          <h3 className="font-medium">Lịch sử điểm thưởng</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <Star className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                <span>Hoàn thành thử thách "Đọc một truyện ngắn"</span>
              </div>
              <span className="text-green-600 font-medium">+10</span>
            </li>
            <li className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <Star className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                <span>Đọc sách 3 ngày liên tiếp</span>
              </div>
              <span className="text-green-600 font-medium">+20</span>
            </li>
            <li className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <Star className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                <span>Đổi quà "Móc khóa sách mini"</span>
              </div>
              <span className="text-red-600 font-medium">-50</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
