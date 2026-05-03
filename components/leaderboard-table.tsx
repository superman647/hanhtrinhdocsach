"use client"

import Link from "next/link"
import { Crown, Medal, Trophy, Flame } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserAvatar } from "./user-avatar"

// Update the component to include animations for top users
export function LeaderboardTable() {
  // Rank levels with colors
  const rankColors = {
    "Mầm non đọc sách": "bg-green-500",
    "Tập sự văn chương": "bg-blue-500",
    "Phù thủy tri thức": "bg-purple-500",
    "Kiệt tướng tri thức": "bg-yellow-500",
    "Thần đồng đọc sách": "bg-orange-500",
    "Bậc thầy văn chương": "bg-red-500",
    "Huyền thoại tri thức": "bg-pink-600",
  }

  // Mock data for leaderboard
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: "/images/avatar/avatar1.png",
      points: 7500,
      booksRead: 45,
      challengesCompleted: 28,
      rank: "Thần đồng đọc sách",
      streak: 32,
    },
    {
      id: 2,
      name: "Trần Thị B",
      avatar: "/images/avatar/avatar2.png",
      points: 5200,
      booksRead: 32,
      challengesCompleted: 22,
      rank: "Kiệt tướng tri thức",
      streak: 18,
    },
    {
      id: 3,
      name: "Lê Văn C",
      avatar: "/images/avatar/avatar3.png",
      points: 3800,
      booksRead: 25,
      challengesCompleted: 18,
      rank: "Kiệt tướng tri thức",
      streak: 14,
    },
    {
      id: 4,
      name: "Phạm Thị D",
      avatar: "/images/avatar/avatar4.png",
      points: 2500,
      booksRead: 18,
      challengesCompleted: 12,
      rank: "Phù thủy tri thức",
      streak: 10,
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      avatar: "/images/avatar/avatar1.png",
      points: 1800,
      booksRead: 15,
      challengesCompleted: 9,
      rank: "Phù thủy tri thức",
      streak: 7,
    },
    {
      id: 6,
      name: "Ngô Thị F",
      avatar: "/images/avatar/avatar2.png",
      points: 1200,
      booksRead: 10,
      challengesCompleted: 7,
      rank: "Tập sự văn chương",
      streak: 5,
    },
    {
      id: 7,
      name: "Đỗ Văn G",
      avatar: "/images/avatar/avatar3.png",
      points: 850,
      booksRead: 8,
      challengesCompleted: 5,
      rank: "Tập sự văn chương",
      streak: 3,
    },
    {
      id: 8,
      name: "Vũ Thị H",
      avatar: "/images/avatar/avatar4.png",
      points: 650,
      booksRead: 6,
      challengesCompleted: 4,
      rank: "Tập sự văn chương",
      streak: 2,
    },
    {
      id: 9,
      name: "Đinh Văn I",
      avatar: "/images/avatar/avatar1.png",
      points: 450,
      booksRead: 5,
      challengesCompleted: 3,
      rank: "Mầm non đọc sách",
      streak: 1,
    },
    {
      id: 10,
      name: "Bùi Thị K",
      avatar: "/images/avatar/avatar2.png",
      points: 320,
      booksRead: 4,
      challengesCompleted: 2,
      rank: "Mầm non đọc sách",
      streak: 0,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Top độc giả</h2>
        <select className="p-2 border rounded-md text-sm">
          <option value="all-time">Tất cả thời gian</option>
          <option value="this-month">Tháng này</option>
          <option value="this-week">Tuần này</option>
          <option value="today">Hôm nay</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Top 3 users with special effects */}
        {users.slice(0, 3).map((user, index) => (
          <div
            key={user.id}
            className={`relative overflow-hidden rounded-lg border p-6 ${
              index === 0
                ? "bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-950 dark:to-background border-yellow-200 dark:border-yellow-800 animate-pulse-slow"
                : index === 1
                  ? "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-background border-gray-200 dark:border-gray-800"
                  : "bg-gradient-to-br from-amber-50 to-white dark:from-amber-950 dark:to-background border-amber-200 dark:border-amber-800"
            }`}
            style={{
              animation: index === 0 ? "pulse 3s infinite" : "none",
              boxShadow: index === 0 ? "0 0 15px rgba(255, 215, 0, 0.5)" : "none",
            }}
          >
            <div className="absolute top-2 right-2">
              {index === 0 ? (
                <Crown className="h-8 w-8 text-yellow-500 fill-yellow-500 animate-bounce" />
              ) : index === 1 ? (
                <Medal className="h-8 w-8 text-gray-400 fill-gray-400" />
              ) : (
                <Trophy className="h-8 w-8 text-amber-600 fill-amber-600" />
              )}
            </div>

            <div className="flex flex-col items-center text-center">
              <div
                className={`relative mb-4 ${
                  index === 0
                    ? "ring-4 ring-yellow-400 animate-pulse"
                    : index === 1
                      ? "ring-2 ring-gray-400"
                      : "ring-2 ring-amber-600"
                } rounded-full p-1`}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <UserAvatar name={user.name} avatarUrl={user.avatar} size={80} />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background rounded-full px-2 py-1 text-xs font-bold border">
                  #{index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold">{user.name}</h3>
              <Badge className={`mt-1 mb-2 ${rankColors[user.rank as keyof typeof rankColors]} text-white`}>
                {user.rank}
              </Badge>

              <div className="mt-2 space-y-1 text-sm">
                <p className="font-bold text-2xl">{user.points} điểm</p>
                <p>{user.booksRead} sách đã đọc</p>
                <p>{user.challengesCompleted} thử thách hoàn thành</p>
                <div className="flex items-center justify-center gap-1">
                  <Flame className={`h-4 w-4 ${user.streak >= 7 ? "text-orange-500" : "text-orange-300"}`} />
                  <p>{user.streak} ngày đọc liên tiếp</p>
                  {user.streak >= 7 && (
                    <Badge variant="outline" className="text-orange-500 border-orange-500 text-xs">
                      x{user.streak >= 30 ? 3 : user.streak >= 14 ? 2.5 : 2}
                    </Badge>
                  )}
                </div>
              </div>

              {index === 0 && (
                <div className="mt-4 w-full">
                  <Badge className="w-full py-1 bg-yellow-500 hover:bg-yellow-600 animate-pulse">
                    Vinh danh độc giả xuất sắc
                  </Badge>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">Hạng</TableHead>
              <TableHead>Độc giả</TableHead>
              <TableHead className="text-right">Điểm</TableHead>
              <TableHead className="text-right">Sách đã đọc</TableHead>
              <TableHead className="text-right">Thử thách</TableHead>
              <TableHead className="text-right">Chuỗi ngày</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id} className={index < 3 ? "bg-muted/50" : ""}>
                <TableCell className="text-center font-medium">
                  {index < 3 ? (
                    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full">
                      {index === 0 ? (
                        <Crown className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ) : index === 1 ? (
                        <Medal className="h-5 w-5 text-gray-400 fill-gray-400" />
                      ) : (
                        <Trophy className="h-5 w-5 text-amber-600 fill-amber-600" />
                      )}
                    </div>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <UserAvatar name={user.name} avatarUrl={user.avatar} size={40} />
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <Badge className={`text-xs ${rankColors[user.rank as keyof typeof rankColors]} text-white`}>
                        {user.rank}
                      </Badge>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">{user.points}</TableCell>
                <TableCell className="text-right">{user.booksRead}</TableCell>
                <TableCell className="text-right">{user.challengesCompleted}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {user.streak > 0 && (
                      <Flame className={`h-4 w-4 ${user.streak >= 7 ? "text-orange-500" : "text-orange-300"}`} />
                    )}
                    <span>{user.streak} ngày</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Link href={`/profile/${user.id}`}>
                    <Button variant="ghost" size="sm">
                      Xem
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
