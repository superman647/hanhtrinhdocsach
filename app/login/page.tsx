import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10 max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Đăng nhập</CardTitle>
            <CardDescription>Đăng nhập để tiếp tục hành trình đọc sách của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mật khẩu</Label>
                    <Link href="/forgot-password" className="text-xs text-pink-600 hover:underline">
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
              </TabsContent>

              <TabsContent value="google" className="space-y-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Đăng nhập nhanh chóng bằng tài khoản Google của bạn
                  </p>
                  <Button className="w-full" variant="outline">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt="Google"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Đăng nhập với Google
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-pink-600 hover:bg-pink-700">Đăng nhập</Button>
            <div className="text-sm text-center text-muted-foreground">
              Chưa có tài khoản?{" "}
              <Link href="/register" className="text-pink-600 hover:underline">
                Đăng ký
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
