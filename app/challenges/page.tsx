import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChallengeList } from "@/components/challenge-list"
import { ChallengeFilter } from "@/components/challenge-filter"

export default function ChallengesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-6">Thử thách đọc sách</h1>
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          <ChallengeFilter />
          <ChallengeList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
