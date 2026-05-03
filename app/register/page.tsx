"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AvatarSelection } from "@/components/avatar-selection"

export default function RegisterPage() {
  const [selectedAvatar, setSelectedAvatar] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10 max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Đăng ký tài khoản</CardTitle>
            <CardDescription>Tạo tài khoản để bắt đầu hành trình đọc sách của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="guest">Khách</TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Tên hiển thị</Label>
                  <Input id="name" placeholder="Tên của bạn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                  <Input id="confirm-password" type="password" />
                </div>

                <div className="space-y-2">
                  <Label>Chọn avatar</Label>
                  <AvatarSelection selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar} />
                </div>
              </TabsContent>

              <TabsContent value="google" className="space-y-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Đăng ký nhanh chóng bằng tài khoản Google của bạn
                  </p>
                  <Button className="w-full" variant="outline">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt="Google"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Đăng ký với Google
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="guest" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="guest-name">Tên hiển thị</Label>
                  <Input id="guest-name" placeholder="Tên của bạn" />
                </div>

                <div className="space-y-2">
                  <Label>Chọn avatar</Label>
                  <AvatarSelection selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar} />
                </div>

                <p className="text-xs text-muted-foreground">
                  Lưu ý: Chế độ khách sẽ lưu dữ liệu trên trình duyệt của bạn. Nếu bạn xóa dữ liệu trình duyệt, tiến
                  trình đọc sách của bạn sẽ bị mất.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-pink-600 hover:bg-pink-700">Đăng ký</Button>
            <div className="text-sm text-center text-muted-foreground">
              Đã có tài khoản?{" "}
              <Link href="/login" className="text-pink-600 hover:underline">
                Đăng nhập
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
