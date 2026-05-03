import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookshelfGrid } from "@/components/bookshelf-grid"
import { BookshelfFilter } from "@/components/bookshelf-filter"

export default function BookshelfPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-6">Tủ sách của tôi</h1>
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          <BookshelfFilter />
          <BookshelfGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
