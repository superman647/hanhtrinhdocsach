"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export function ChallengeFilter() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "reading", label: "Đọc sách" },
    { id: "streak", label: "Đọc liên tục" },
    { id: "pages", label: "Số trang" },
    { id: "genre", label: "Thể loại" },
    { id: "review", label: "Viết đánh giá" },
  ]

  const difficulties = [
    { id: "easy", label: "Dễ" },
    { id: "medium", label: "Trung bình" },
    { id: "hard", label: "Khó" },
  ]

  const durations = [
    { id: "short", label: "Ngắn (1-3 ngày)" },
    { id: "medium", label: "Trung bình (1-2 tuần)" },
    { id: "long", label: "Dài (1 tháng trở lên)" },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">Tìm kiếm</h3>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Tên thử thách..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" size="icon" className="shrink-0">
            <Search className="h-4 w-4" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["categories"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Loại thử thách</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.id}`} />
                  <Label htmlFor={`category-${category.id}`} className="text-sm font-normal">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="difficulties">
          <AccordionTrigger>Độ khó</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {difficulties.map((difficulty) => (
                <div key={difficulty.id} className="flex items-center space-x-2">
                  <Checkbox id={`difficulty-${difficulty.id}`} />
                  <Label htmlFor={`difficulty-${difficulty.id}`} className="text-sm font-normal">
                    {difficulty.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="durations">
          <AccordionTrigger>Thời gian</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {durations.map((duration) => (
                <div key={duration.id} className="flex items-center space-x-2">
                  <Checkbox id={`duration-${duration.id}`} />
                  <Label htmlFor={`duration-${duration.id}`} className="text-sm font-normal">
                    {duration.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Áp dụng bộ lọc</Button>
      <Button variant="outline" className="w-full">
        Xóa bộ lọc
      </Button>
    </div>
  )
}
