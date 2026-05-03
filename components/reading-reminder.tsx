"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Flame, BookOpen, Clock, Calendar, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ReadingReminder() {
  const [showReminders, setShowReminders] = useState(false)

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
    <Card className="bg-gradient-to-r from-green-50 to-purple-50 dark:from-green-950 dark:to-purple-950 border-green-100 dark:border-green-900">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Flame className={`h-8 w-8 ${getFlameColor(streakData.currentStreak)}`} />
                  {streakData.currentStreak >= 7 && (
                    <div className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {streakData.multiplier}x
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium">Chuỗi ngày đọc sách</div>
                  <div className="text-2xl font-bold">{streakData.currentStreak} ngày</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setShowReminders(!showReminders)}>
                        <Bell className="h-4 w-4 mr-2" />
                        {showReminders ? "Ẩn nhắc nhở" : "Xem nhắc nhở"}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Xem các nhắc nhở đọc sách</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button className="bg-green-600 hover:bg-green-700">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Đọc sách ngay
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-green-600" />
                    <span>
                      Hôm nay: {streakData.todayProgress}/{streakData.dailyGoal} phút
                    </span>
                  </div>
                  <Badge variant="outline" className={getFlameColor(streakData.currentStreak)}>
                    {getMultiplierText(streakData.currentStreak)}
                  </Badge>
                </div>
                <Progress value={dailyProgressPercentage} className="h-2" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-green-600" />
                    <span>
                      Tuần này: {streakData.weeklyProgress}/{streakData.weeklyGoal} ngày
                    </span>
                  </div>
                  <span>{Math.round(weeklyProgressPercentage)}%</span>
                </div>
                <Progress value={weeklyProgressPercentage} className="h-2" />
              </div>
            </div>

            {showReminders && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4 border border-green-100 dark:border-green-900">
                <h4 className="font-medium text-sm mb-3">Nhắc nhở thói quen đọc sách</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mục tiêu hàng ngày</p>
                      <p className="text-xs text-muted-foreground">
                        Đọc ít nhất {streakData.dailyGoal} phút mỗi ngày để duy trì thói quen đọc sách
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mục tiêu hàng tuần</p>
                      <p className="text-xs text-muted-foreground">
                        Đọc sách ít nhất {streakData.weeklyGoal} ngày mỗi tuần để đạt được tiến bộ đều đặn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                      <Flame className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Duy trì chuỗi ngày đọc</p>
                      <p className="text-xs text-muted-foreground">
                        Đọc sách mỗi ngày để duy trì chuỗi ngày đọc và nhận thêm điểm thưởng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block border-l pl-6 space-y-2">
            <h4 className="font-medium text-sm">7 ngày gần đây</h4>
            <div className="flex flex-col gap-2">
              {streakData.lastWeekDays.map((day, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center ${
                      day ? "bg-green-100 dark:bg-green-900 text-green-600" : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                    }`}
                  >
                    {day ? <BookOpen className="h-3 w-3" /> : <span className="text-xs">-</span>}
                  </div>
                  <span className="text-xs">
                    {["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
