"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export function BookshelfFilter() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "classic", label: "Văn học cổ điển" },
    { id: "modern", label: "Văn học hiện đại" },
    { id: "children", label: "Văn học thiếu nhi" },
    { id: "poetry", label: "Thơ" },
    { id: "novel", label: "Tiểu thuyết" },
    { id: "shortstory", label: "Truyện ngắn" },
  ]

  const readingStatus = [
    { id: "reading", label: "Đang đọc" },
    { id: "completed", label: "Đã đọc xong" },
    { id: "want-to-read", label: "Muốn đọc" },
    { id: "abandoned", label: "Đã bỏ dở" },
  ]

  const ratings = [
    { id: "5-stars", label: "5 sao" },
    { id: "4-stars", label: "4 sao" },
    { id: "3-stars", label: "3 sao" },
    { id: "2-stars", label: "2 sao" },
    { id: "1-star", label: "1 sao" },
    { id: "unrated", label: "Chưa đánh giá" },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">Tìm kiếm</h3>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Tên sách, tác giả..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" size="icon" className="shrink-0">
            <Search className="h-4 w-4" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["status"]}>
        <AccordionItem value="status">
          <AccordionTrigger>Trạng thái</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {readingStatus.map((status) => (
                <div key={status.id} className="flex items-center space-x-2">
                  <Checkbox id={`status-${status.id}`} />
                  <Label htmlFor={`status-${status.id}`} className="text-sm font-normal">
                    {status.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="categories">
          <AccordionTrigger>Thể loại</AccordionTrigger>
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

        <AccordionItem value="ratings">
          <AccordionTrigger>Đánh giá</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating.id} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating.id}`} />
                  <Label htmlFor={`rating-${rating.id}`} className="text-sm font-normal">
                    {rating.label}
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
