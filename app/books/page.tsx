import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookList } from "@/components/book-list"
import { BookFilter } from "@/components/book-filter"

export default function BooksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-6">Thư viện sách</h1>
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          <BookFilter />
          <BookList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
