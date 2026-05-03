import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UserStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Thời gian đọc sách</CardTitle>
            <CardDescription>Thống kê thời gian đọc sách của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="week">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="week">Tuần</TabsTrigger>
                <TabsTrigger value="month">Tháng</TabsTrigger>
                <TabsTrigger value="year">Năm</TabsTrigger>
              </TabsList>
              <TabsContent value="week" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Thứ 2</span>
                    <span>45 phút</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Thứ 3</span>
                    <span>30 phút</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Thứ 4</span>
                    <span>60 phút</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Thứ 5</span>
                    <span>15 phút</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Thứ 6</span>
                    <span>0 phút</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Thứ 7</span>
                    <span>20 phút</span>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Chủ nhật</span>
                    <span>40 phút</span>
                  </div>
                  <Progress value={66} className="h-2" />
                </div>
              </TabsContent>
              <TabsContent value="month" className="pt-4">
                <p className="text-center text-muted-foreground">Thống kê thời gian đọc sách theo tháng</p>
              </TabsContent>
              <TabsContent value="year" className="pt-4">
                <p className="text-center text-muted-foreground">Thống kê thời gian đọc sách theo năm</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Thể loại sách đã đọc</CardTitle>
            <CardDescription>Phân loại sách bạn đã đọc</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Văn học cổ điển</span>
                  <span>5 cuốn</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Văn học hiện đại</span>
                  <span>3 cuốn</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Thơ</span>
                  <span>2 cuốn</span>
                </div>
                <Progress value={17} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Truyện ngắn</span>
                  <span>1 cuốn</span>
                </div>
                <Progress value={8} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tiểu thuyết</span>
                  <span>1 cuốn</span>
                </div>
                <Progress value={8} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Tiến độ đọc sách</CardTitle>
          <CardDescription>Tiến độ đọc sách hiện tại của bạn</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Truyện Kiều - Nguyễn Du</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Số Đỏ - Vũ Trọng Phụng</span>
                <span>30%</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tắt Đèn - Ngô Tất Tố</span>
                <span>50%</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
