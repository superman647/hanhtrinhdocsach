import Link from "next/link"
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-green-600" />
              <span className="font-bold">Hành trình đọc sách</span>
            </Link>
            <p className="text-sm text-muted-foreground">Thử thách đọc sách - Khám phá văn học Việt Nam</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Khám phá</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/books" className="text-muted-foreground hover:text-foreground">
                  Sách
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-muted-foreground hover:text-foreground">
                  Thử thách
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground">
                  Bảng xếp hạng
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-muted-foreground hover:text-foreground">
                  Phần quà
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Tài khoản</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-foreground">
                  Đăng nhập
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground">
                  Đăng ký
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-foreground">
                  Hồ sơ cá nhân
                </Link>
              </li>
              <li>
                <Link href="/bookshelf" className="text-muted-foreground hover:text-foreground">
                  Tủ sách của tôi
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Thông tin</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Hành trình đọc sách. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
