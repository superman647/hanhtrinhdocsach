"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { UserAvatar } from "@/components/user-avatar"
import { Bell, Lock, User, BookOpen, Moon, Sun, Palette } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [name, setName] = useState("Nguyễn Văn A")
  const [email, setEmail] = useState("nguyenvana@example.com")
  const [dailyGoal, setDailyGoal] = useState(30)
  const [weeklyGoal, setWeeklyGoal] = useState(5)
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [readingReminders, setReadingReminders] = useState(true)
  const [accentColor, setAccentColor] = useState("pink")
  const [fontSize, setFontSize] = useState(16)
  const [lineSpacing, setLineSpacing] = useState(1.5)

  const handleSaveProfile = () => {
    toast({
      title: "Hồ sơ đã được cập nhật",
      description: "Thông tin hồ sơ của bạn đã được lưu thành công.",
    })
  }

  const handleSavePreferences = () => {
    toast({
      title: "Tùy chọn đã được cập nhật",
      description: "Tùy chọn đọc sách của bạn đã được lưu thành công.",
    })
  }

  const handleSaveNotifications = () => {
    toast({
      title: "Thông báo đã được cập nhật",
      description: "Cài đặt thông báo của bạn đã được lưu thành công.",
    })
  }

  const handleSaveAppearance = () => {
    toast({
      title: "Giao diện đã được cập nhật",
      description: "Cài đặt giao diện của bạn đã được lưu thành công.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Cài đặt</h1>
            <p className="text-muted-foreground">Quản lý tài khoản và tùy chọn của bạn.</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline-block">Hồ sơ</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline-block">Tùy chọn đọc</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline-block">Thông báo</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline-block">Giao diện</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span className="hidden sm:inline-block">Bảo mật</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Hồ sơ</CardTitle>
                  <CardDescription>Quản lý thông tin hồ sơ của bạn.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col items-center space-y-2">
                      <UserAvatar name={name} avatarUrl="/images/avatar/avatar1.png" size={100} />
                      <Button variant="outline" size="sm">
                        Thay đổi ảnh đại diện
                      </Button>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Tên hiển thị</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Giới thiệu</Label>
                      <textarea
                        id="bio"
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Viết một vài điều về bản thân..."
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="location">Địa điểm</Label>
                      <Input id="location" placeholder="Thành phố, Quốc gia" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveProfile} className="bg-pink-600 hover:bg-pink-700">
                    Lưu thay đổi
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Tùy chọn đọc sách</CardTitle>
                  <CardDescription>Tùy chỉnh trải nghiệm đọc sách của bạn.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Mục tiêu đọc sách hàng ngày (phút)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[dailyGoal]}
                          min={5}
                          max={120}
                          step={5}
                          onValueChange={(value) => setDailyGoal(value[0])}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-medium">{dailyGoal}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Mục tiêu đọc sách hàng tuần (ngày)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[weeklyGoal]}
                          min={1}
                          max={7}
                          step={1}
                          onValueChange={(value) => setWeeklyGoal(value[0])}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-medium">{weeklyGoal}</span>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="preferred-time">Thời gian đọc sách ưa thích</Label>
                      <Select defaultValue="evening">
                        <SelectTrigger id="preferred-time">
                          <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Buổi sáng</SelectItem>
                          <SelectItem value="afternoon">Buổi chiều</SelectItem>
                          <SelectItem value="evening">Buổi tối</SelectItem>
                          <SelectItem value="night">Đêm khuya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="preferred-genre">Thể loại sách ưa thích</Label>
                      <Select defaultValue="novel">
                        <SelectTrigger id="preferred-genre">
                          <SelectValue placeholder="Chọn thể loại" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classic">Văn học cổ điển</SelectItem>
                          <SelectItem value="novel">Tiểu thuyết</SelectItem>
                          <SelectItem value="poetry">Thơ</SelectItem>
                          <SelectItem value="shortstory">Truyện ngắn</SelectItem>
                          <SelectItem value="children">Văn học thiếu nhi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSavePreferences} className="bg-pink-600 hover:bg-pink-700">
                    Lưu tùy chọn
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Thông báo</CardTitle>
                  <CardDescription>Quản lý cài đặt thông báo của bạn.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="notifications">Thông báo ứng dụng</Label>
                        <p className="text-sm text-muted-foreground">Nhận thông báo về hoạt động và cập nhật.</p>
                      </div>
                      <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Thông báo qua email</Label>
                        <p className="text-sm text-muted-foreground">Nhận thông báo qua email.</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reading-reminders">Nhắc nhở đọc sách</Label>
                        <p className="text-sm text-muted-foreground">Nhận nhắc nhở đọc sách hàng ngày.</p>
                      </div>
                      <Switch id="reading-reminders" checked={readingReminders} onCheckedChange={setReadingReminders} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="reminder-time">Thời gian nhắc nhở</Label>
                      <Select defaultValue="19:00">
                        <SelectTrigger id="reminder-time">
                          <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="07:00">07:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveNotifications} className="bg-pink-600 hover:bg-pink-700">
                    Lưu cài đặt
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Giao diện</CardTitle>
                  <CardDescription>Tùy chỉnh giao diện ứng dụng.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dark-mode">Chế độ tối</Label>
                        <p className="text-sm text-muted-foreground">Bật chế độ tối cho ứng dụng.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4 text-muted-foreground" />
                        <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                        <Moon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Màu chủ đạo</Label>
                      <div className="flex gap-2">
                        {["pink", "blue", "green", "purple", "orange"].map((color) => (
                          <button
                            key={color}
                            className={`h-8 w-8 rounded-full bg-${color}-600 ${
                              accentColor === color ? "ring-2 ring-offset-2 ring-offset-background ring-pink-600" : ""
                            }`}
                            onClick={() => setAccentColor(color)}
                            aria-label={`Màu ${color}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Cỡ chữ khi đọc sách</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[fontSize]}
                          min={12}
                          max={24}
                          step={1}
                          onValueChange={(value) => setFontSize(value[0])}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-medium">{fontSize}px</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Khoảng cách dòng</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[lineSpacing * 10]}
                          min={10}
                          max={30}
                          step={5}
                          onValueChange={(value) => setLineSpacing(value[0] / 10)}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-medium">{lineSpacing}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSaveAppearance} className="bg-pink-600 hover:bg-pink-700">
                    Lưu cài đặt
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Bảo mật</CardTitle>
                  <CardDescription>Quản lý cài đặt bảo mật tài khoản của bạn.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">Mật khẩu mới</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Xác nhận mật khẩu mới</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Xác thực hai yếu tố</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="2fa">Bật xác thực hai yếu tố</Label>
                        <p className="text-sm text-muted-foreground">Tăng cường bảo mật cho tài khoản của bạn.</p>
                      </div>
                      <Switch id="2fa" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Phiên đăng nhập</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Chrome trên Windows</p>
                          <p className="text-sm text-muted-foreground">Hà Nội, Việt Nam • Hoạt động gần đây</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Đăng xuất
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Safari trên iPhone</p>
                          <p className="text-sm text-muted-foreground">Hà Nội, Việt Nam • 2 ngày trước</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Đăng xuất
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Đăng xuất khỏi tất cả thiết bị</Button>
                  <Button className="bg-pink-600 hover:bg-pink-700">Cập nhật mật khẩu</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
