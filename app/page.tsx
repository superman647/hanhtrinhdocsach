import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Trophy, Users, Link2, Zap, Star, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedBooks } from "@/components/featured-books"
import { ActiveChallenges } from "@/components/active-challenges"
import { ActivityImage } from "@/components/activity-image"
import { ReadingReminder } from "@/components/reading-reminder"

export default function HomePage() {
  const rankLevels = [
    { label: "Người đọc mới", icon: "📖", color: "text-amber-500" },
    { label: "Nhà mở đường tri thức", icon: "🔭", color: "text-amber-600" },
    { label: "Đại sứ văn hoá đọc", icon: "🏛️", color: "text-amber-700" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-amber-50 to-white py-20 dark:from-amber-950/40 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hành trình đọc sách
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Mỗi cuốn sách là một chặng đường. Mỗi trang giấy là một dấu ấn. Cùng nhau kiến tạo văn hoá đọc — từ sự tò mò, duy trì bằng động lực, gắn kết bằng cộng đồng và thăng hoa qua những giá trị được tôn vinh.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/books">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                      Bắt đầu hành trình
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
              <Card className="bg-amber-50 dark:bg-amber-950/30">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookOpen className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold">Tủ sách cá nhân</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    "Tủ sách đã chinh phục" mang đậm dấu ấn cá nhân — nơi lưu giữ hành trình của bạn
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 dark:bg-amber-950/30">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Award className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold">Reading Race</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Đua đọc sách hàng tháng — kiên trì thăng hạng và chinh phục danh hiệu cao nhất
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 dark:bg-amber-950/30">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Link2 className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold">Reading Chain</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Rủ bạn bè cùng đọc — cả hai hoàn thành sách sẽ cùng nhận điểm thưởng đặc biệt
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 dark:bg-amber-950/30">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <MapPin className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold">Góc Triển lãm</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    "Bản đồ cảm xúc về sách" — vinh danh những cảm nhận sâu sắc nhất của cộng đồng
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reading Race & Rank System */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">⚡ Reading Race</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Những đường đua đọc sách hàng tháng — nơi sự kiên trì được thưởng xứng đáng
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="grid gap-6 md:grid-cols-3">
                {rankLevels.map((rank, i) => (
                  <Card key={i} className="relative overflow-hidden border-amber-200 dark:border-amber-800">
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-600" />
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <span className="text-4xl mb-4">{rank.icon}</span>
                      <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Cấp {i + 1}</div>
                      <h3 className={`text-lg font-bold ${rank.color}`}>{rank.label}</h3>
                      {i < rankLevels.length - 1 && (
                        <p className="text-xs text-muted-foreground mt-2">→ Thăng lên cấp tiếp theo</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Mỗi tháng, những người đọc kiên trì nhất sẽ được thăng hạng — từ <strong>Người đọc mới</strong> vươn lên <strong>Nhà mở đường tri thức</strong> và cuối cùng đạt danh hiệu cao quý <strong>Đại sứ văn hoá đọc</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reading Chain Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/40 px-4 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400">
                  <Link2 className="h-4 w-4" />
                  Tính năng đặc biệt
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  🔗 Reading Chain — Hiệu ứng dây chuyền
                </h2>
                <p className="text-muted-foreground text-lg">
                  Rủ thêm bạn bè cùng đọc chung một tác phẩm. Khi người bạn đó hoàn thành cuốn sách, <strong>cả hai sẽ cùng nhận được điểm thưởng</strong>, tạo ra một làn sóng lan toả văn hoá đọc vô cùng mạnh mẽ.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Chọn một cuốn sách và mời bạn bè tham gia cùng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Theo dõi tiến độ đọc của nhau trong thời gian thực</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Nhận điểm thưởng kép khi cả hai hoàn thành cuốn sách</span>
                  </li>
                </ul>
                <Link href="/challenges">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Bắt đầu Reading Chain
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-amber-50 dark:bg-amber-950/30 p-6 text-center">
                  <CardContent className="p-0 flex flex-col items-center">
                    <Users className="h-10 w-10 text-amber-600 mb-3" />
                    <div className="text-2xl font-bold text-amber-700">+2x</div>
                    <p className="text-sm text-muted-foreground mt-1">Điểm thưởng khi hoàn thành cùng bạn</p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 dark:bg-amber-950/30 p-6 text-center">
                  <CardContent className="p-0 flex flex-col items-center">
                    <Star className="h-10 w-10 text-amber-600 mb-3" />
                    <div className="text-2xl font-bold text-amber-700">∞</div>
                    <p className="text-sm text-muted-foreground mt-1">Không giới hạn số bạn đọc cùng</p>
                  </CardContent>
                </Card>
                <Card className="col-span-2 bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-950/20 p-6 text-center">
                  <CardContent className="p-0 flex flex-col items-center">
                    <Trophy className="h-10 w-10 text-amber-600 mb-3" />
                    <div className="text-lg font-bold">Lan toả văn hoá đọc</div>
                    <p className="text-sm text-muted-foreground mt-1">Mỗi người rủ thêm người — chuỗi đọc lan rộng không ngừng</p>
                  </CardContent>
                </Card>
              </div>
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

        {/* Góc Triển lãm Người đọc */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/40 px-4 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400 mb-4">
                  <Star className="h-4 w-4" />
                  Điểm đến cuối hành trình
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">🗺️ Góc Triển lãm Người đọc</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Điểm đến tuyệt vời nhất diễn ra vào cuối mỗi kỳ hạn 3–6 tháng — nơi mọi "Hộ chiếu Tri thức" hội tụ để kiến tạo nên <strong>Bản đồ cảm xúc về sách</strong>.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">📝</div>
                  <h3 className="font-bold text-lg">Cảm nhận được chọn lọc</h3>
                  <p className="text-sm text-muted-foreground">
                    Những dòng cảm nhận sâu sắc nhất được in lên không gian trưng bày — dấu ấn của bạn trên bản đồ cảm xúc
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">🏆</div>
                  <h3 className="font-bold text-lg">Vinh danh & Trao thưởng</h3>
                  <p className="text-sm text-muted-foreground">
                    Những bạn trẻ có bài viết xuất sắc được vinh danh, trao thưởng và trở thành khách mời chia sẻ talkshow
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">🎨</div>
                  <h3 className="font-bold text-lg">Trang sổ ấn tượng nhất</h3>
                  <p className="text-sm text-muted-foreground">
                    Những trang sổ trang trí đẹp nhất được lựa chọn để trưng bày — hành trình trên trang giấy trở thành nghệ thuật
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <div className="inline-block bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl px-8 py-6 max-w-2xl">
                <p className="text-muted-foreground italic">
                  "Hành trình đọc sách không chỉ trao cho mỗi người một công cụ ghi chép, mà đang kiến tạo một vòng lặp bền vững của văn hoá đọc: <strong>Bắt đầu từ sự tò mò, duy trì bằng động lực, gắn kết bằng cộng đồng và thăng hoa qua những giá trị được tôn vinh.</strong>"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
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
