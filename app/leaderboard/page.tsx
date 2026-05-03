import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeaderboardTable } from "@/components/leaderboard-table"
import { UserRanking } from "@/components/user-ranking"

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-6">Bảng xếp hạng</h1>
        <div className="space-y-8">
          <UserRanking />
          <LeaderboardTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
