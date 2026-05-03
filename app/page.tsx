import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Trophy, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedBooks } from "@/components/featured-books"
import { ActiveChallenges } from "@/components/active-challenges"
import { ActivityImage } from "@/components/activity-image"
import { ReadingReminder } from "@/components/reading-reminder"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-50 to-white py-20 dark:from-green-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hành trình đọc sách
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Khám phá niềm vui đọc sách qua các thử thách thú vị và trải nghiệm đọc sách trực tuyến.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/books">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Bắt đầu đọc sách
                    </Button>
                  </Link>
                  <Link href="/challenges">
                    <Button size="lg" variant="outline">
                      Khám phá thử thách
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <ActivityImage
                  type="hero"
                  imageUrl="/images/hero-banner.png"
                  width={600}
                  height={400}
                  alt="Hành trình đọc sách"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reading Reminder Section */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <ReadingReminder />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tính năng nổi bật</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trải nghiệm đọc sách thú vị với nhiều tính năng hấp dẫn
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
              <Card className="bg-green-50 dark:bg-green-950">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold">Đọc sách trực tuyến</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Đọc sách trực tiếp trên trang web với trình đọc PDF tích hợp
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 dark:bg-green-950">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Award className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold">Thử thách đọc sách</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Tham gia các thử thách đọc sách thú vị và nhận phần thưởng
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 dark:bg-green-950">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Trophy className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold">Hệ thống xếp hạng</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Theo dõi tiến độ và đạt được các cấp độ đọc sách khác nhau
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 dark:bg-green-950">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold">Cộng đồng đọc sách</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Kết nối với những người yêu sách khác và chia sẻ trải nghiệm
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reading Activities Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hoạt động đọc sách</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Khám phá niềm vui đọc sách qua các hoạt động thú vị
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <ActivityImage
                      type="reading"
                      imageUrl="/images/reading-activity.png"
                      width={400}
                      height={300}
                      alt="Hoạt động đọc sách"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Đọc sách mỗi ngày</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Duy trì thói quen đọc sách mỗi ngày để phát triển bản thân
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <ActivityImage
                      type="bookclub"
                      imageUrl="/images/book-club.png"
                      width={400}
                      height={300}
                      alt="Câu lạc bộ sách"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Câu lạc bộ sách</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Tham gia câu lạc bộ sách để thảo luận và chia sẻ về sách
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <ActivityImage
                      type="corner"
                      imageUrl="/images/reading-corner.png"
                      width={400}
                      height={300}
                      alt="Góc đọc sách"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Góc đọc sách</h3>
                    <p className="text-sm text-muted-foreground mt-2">Tạo không gian đọc sách thoải mái và yên tĩnh</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sách nổi bật</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Khám phá những cuốn sách được yêu thích nhất
                </p>
              </div>
            </div>
            <FeaturedBooks />
          </div>
        </section>

        {/* Active Challenges Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Thử thách đang diễn ra</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tham gia các thử thách đọc sách và nhận phần thưởng hấp dẫn
                </p>
              </div>
            </div>
            <ActiveChallenges />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
