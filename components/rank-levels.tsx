import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function RankLevels() {
  // Mock data for rank levels
  const rankLevels = [
    { id: 1, name: "Mầm non đọc sách", minPoints: 0, maxPoints: 500, color: "bg-green-500" },
    { id: 2, name: "Tập sự văn chương", minPoints: 500, maxPoints: 1500, color: "bg-blue-500" },
    { id: 3, name: "Phù thủy tri thức", minPoints: 1500, maxPoints: 3000, color: "bg-purple-500" },
    { id: 4, name: "Kiệt tướng tri thức", minPoints: 3000, maxPoints: 5000, color: "bg-yellow-500" },
    { id: 5, name: "Thần đồng đọc sách", minPoints: 5000, maxPoints: 8000, color: "bg-orange-500" },
    { id: 6, name: "Bậc thầy văn chương", minPoints: 8000, maxPoints: 12000, color: "bg-red-500" },
    { id: 7, name: "Huyền thoại tri thức", minPoints: 12000, maxPoints: null, color: "bg-pink-600" },
  ]

  // Current user points
  const currentPoints = 1800

  // Find current rank
  const currentRank = rankLevels.find(
    (rank) => currentPoints >= rank.minPoints && (rank.maxPoints === null || currentPoints < rank.maxPoints),
  )

  // Calculate progress to next rank
  const calculateProgress = () => {
    if (!currentRank || currentRank.maxPoints === null) return 100
    return ((currentPoints - currentRank.minPoints) / (currentRank.maxPoints - currentRank.minPoints)) * 100
  }

  // Get next rank
  const getNextRank = () => {
    const currentIndex = rankLevels.findIndex((rank) => rank.id === currentRank?.id)
    return currentIndex < rankLevels.length - 1 ? rankLevels[currentIndex + 1] : null
  }

  const nextRank = getNextRank()
  const progressPercentage = calculateProgress()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cấp độ xếp hạng</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {currentRank && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">Cấp độ hiện tại</div>
                  <div className="font-bold text-lg">{currentRank.name}</div>
                </div>
                <Badge className={`${currentRank.color.replace("bg-", "bg-")} text-white`}>{currentPoints} điểm</Badge>
              </div>

              {nextRank && (
                <>
                  <Progress value={progressPercentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{currentRank.minPoints} điểm</span>
                    <span>
                      {nextRank.minPoints - currentPoints} điểm nữa để đạt cấp {nextRank.name}
                    </span>
                    <span>{nextRank.minPoints} điểm</span>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="space-y-3">
            {rankLevels.map((rank) => (
              <div key={rank.id} className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${rank.color}`}></div>
                <div className="flex-1 text-sm">
                  {rank.name}
                  {currentRank?.id === rank.id && <span className="ml-2 text-xs text-pink-600">(Hiện tại)</span>}
                </div>
                <div className="text-xs text-muted-foreground">
                  {rank.maxPoints === null ? `${rank.minPoints}+ điểm` : `${rank.minPoints} - ${rank.maxPoints} điểm`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
