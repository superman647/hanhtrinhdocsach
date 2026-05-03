"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, Menu, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "./user-avatar"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Nguyễn Văn A",
    avatar: "/images/avatar/avatar1.png",
    isLoggedIn: true,
  }

  const routes = [
    {
      href: "/",
      label: "Trang chủ",
      active: pathname === "/",
    },
    {
      href: "/books",
      label: "Sách",
      active: pathname === "/books",
    },
    {
      href: "/challenges",
      label: "Thử thách",
      active: pathname === "/challenges",
    },
    {
      href: "/leaderboard",
      label: "Bảng xếp hạng",
      active: pathname === "/leaderboard",
    },
    {
      href: "/rewards",
      label: "Phần quà",
      active: pathname === "/rewards",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <BookOpen className="mr-2 h-6 w-6 text-amber-600" />
              <span className="font-bold">Hành trình đọc sách</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-muted-foreground transition-colors hover:text-foreground",
                      route.active && "text-foreground",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {user.isLoggedIn ? (
                  <>
                    <div className="flex items-center gap-2 p-2">
                      <UserAvatar name={user.name} avatarUrl={user.avatar} size={32} />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Hồ sơ cá nhân
                      </Button>
                    </Link>
                    <Link href="/bookshelf" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Tủ sách của tôi
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Đăng nhập
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full justify-start bg-amber-600 hover:bg-amber-700">
                        <User className="mr-2 h-4 w-4" />
                        Đăng ký
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-amber-600" />
          <span className="hidden font-bold sm:inline-block">Hành trình đọc sách</span>
          <span className="font-bold sm:hidden">HTĐ</span>
        </Link>
        <nav className="hidden gap-6 md:flex md:ml-10">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                route.active ? "text-foreground" : "text-foreground/60",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          {user.isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <UserAvatar name={user.name} avatarUrl={user.avatar} size={32} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">Tập sự văn chương</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" className="flex w-full">
                    Hồ sơ cá nhân
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/bookshelf" className="flex w-full">
                    Tủ sách của tôi
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/challenges" className="flex w-full">
                    Thử thách của tôi
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/settings" className="flex w-full">
                    Cài đặt
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex md:gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Đăng ký
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
