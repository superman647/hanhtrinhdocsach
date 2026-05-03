import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RewardsList, UserPointsProvider } from "@/components/rewards-list"
import { UserPoints } from "@/components/user-points"

export default function RewardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-6">Phần quà</h1>
        <UserPointsProvider>
          <div className="space-y-8">
            <UserPoints />
            <RewardsList />
          </div>
        </UserPointsProvider>
      </main>
      <Footer />
    </div>
  )
}
