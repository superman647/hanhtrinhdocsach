"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Flame, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ReadingStreak() {
  const [showGoalSettings, setShowGoalSettings] = useState(false)

  // Mock data for reading streak
  const streakData = {
    currentStreak: 7,
    longestStreak: 14,
    weeklyGoal: 5, // days per week
    dailyGoal: 30, // minutes per day
    weeklyProgress: 4, // days read this week
    todayProgress: 15, // minutes read today
    multiplier: 2, // x2 points for 7+ day streak
    lastWeekDays: [true, true, false, true, true, false, true], // last 7 days reading status
  }

  // Calculate progress percentages
  const weeklyProgressPercentage = (streakData.weeklyProgress / streakData.weeklyGoal) * 100
  const dailyProgressPercentage = (streakData.todayProgress / streakData.dailyGoal) * 100

  // Get flame size based on streak
  const getFlameSize = (streak: number) => {
    if (streak >= 30) return "h-8 w-8 text-red-600"
    if (streak >= 14) return "h-7 w-7 text-orange-500"
    if (streak >= 7) return "h-6 w-6 text-orange-400"
    return "h-5 w-5 text-orange-300"
  }

  // Get flame color based on streak
  const getFlameColor = (streak: number) => {
    if (streak >= 30) return "text-red-600"
    if (streak >= 14) return "text-orange-500"
    if (streak >= 7) return "text-orange-400"
    return "text-orange-300"
  }

  // Get multiplier text
  const getMultiplierText = (streak: number) => {
    if (streak >= 30) return "x3 điểm"
    if (streak >= 14) return "x2.5 điểm"
    if (streak >= 7) return "x2 điểm"
    if (streak >= 3) return "x1.5 điểm"
    return "x1 điểm"
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Thói quen đọc sách</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setShowGoalSettings(!showGoalSettings)}>
            {showGoalSettings ? "Đóng" : "Điều chỉnh mục tiêu"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showGoalSettings ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Mục tiêu hàng ngày (phút)</label>
              <div className="flex items-center gap-2 mt-1">
                <Button variant="outline" size="sm">
                  -
                </Button>
                <span className="font-medium">{streakData.dailyGoal}</span>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Mục tiêu hàng tuần (ngày)</label>
              <div className="flex items-center gap-2 mt-1">
                <Button variant="outline" size="sm">
                  -
                </Button>
                <span className="font-medium">{streakData.weeklyGoal}</span>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </div>
            <Button className="w-full bg-pink-600 hover:bg-pink-700">Lưu mục tiêu</Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Flame
                    className={`${getFlameSize(streakData.currentStreak)} ${getFlameColor(streakData.currentStreak)}`}
                  />
                  {streakData.currentStreak >= 7 && (
                    <div className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {streakData.multiplier}x
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium">Chuỗi ngày đọc hiện tại</div>
                  <div className="text-2xl font-bold">{streakData.currentStreak} ngày</div>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Chuỗi dài nhất</div>
                      <div className="font-medium">{streakData.longestStreak} ngày</div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Chuỗi ngày đọc sách dài nhất của bạn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>
                  Hôm nay: {streakData.todayProgress}/{streakData.dailyGoal} phút
                </span>
                <Badge variant="outline" className={getFlameColor(streakData.currentStreak)}>
                  {getMultiplierText(streakData.currentStreak)}
                </Badge>
              </div>
              <Progress value={dailyProgressPercentage} className="h-2" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>
                  Tuần này: {streakData.weeklyProgress}/{streakData.weeklyGoal} ngày
                </span>
                <span>{Math.round(weeklyProgressPercentage)}%</span>
              </div>
              <Progress value={weeklyProgressPercentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">7 ngày gần đây</div>
              <div className="flex justify-between">
                {streakData.lastWeekDays.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        day
                          ? "bg-pink-100 dark:bg-pink-900 text-pink-600"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                      }`}
                    >
                      {day ? <BookOpen className="h-4 w-4" /> : <span className="text-xs">-</span>}
                    </div>
                    <span className="text-xs mt-1">{["CN", "T2", "T3", "T4", "T5", "T6", "T7"][index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Hệ số nhân điểm</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-orange-300" />
                  <span>3+ ngày: x1.5 điểm</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-orange-400" />
                  <span>7+ ngày: x2 điểm</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-orange-500" />
                  <span>14+ ngày: x2.5 điểm</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-red-600" />
                  <span>30+ ngày: x3 điểm</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-pink-600 hover:bg-pink-700">
              <BookOpen className="mr-2 h-4 w-4" />
              Đọc sách ngay
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
