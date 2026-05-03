"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export function BookFilter() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "classic", label: "Văn học cổ điển" },
    { id: "modern", label: "Văn học hiện đại" },
    { id: "children", label: "Văn học thiếu nhi" },
    { id: "poetry", label: "Thơ" },
    { id: "novel", label: "Tiểu thuyết" },
    { id: "shortstory", label: "Truyện ngắn" },
  ]

  const authors = [
    { id: "nguyendu", label: "Nguyễn Du" },
    { id: "vutrongphung", label: "Vũ Trọng Phụng" },
    { id: "ngotatto", label: "Ngô Tất Tố" },
    { id: "tohoai", label: "Tô Hoài" },
    { id: "xuanquynh", label: "Xuân Quỳnh" },
    { id: "nguyennhatanh", label: "Nguyễn Nhật Ánh" },
  ]

  const periods = [
    { id: "pre1945", label: "Trước 1945" },
    { id: "1945-1975", label: "1945-1975" },
    { id: "post1975", label: "Sau 1975" },
    { id: "contemporary", label: "Đương đại" },
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

      <Accordion type="multiple" defaultValue={["categories"]}>
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

        <AccordionItem value="authors">
          <AccordionTrigger>Tác giả</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {authors.map((author) => (
                <div key={author.id} className="flex items-center space-x-2">
                  <Checkbox id={`author-${author.id}`} />
                  <Label htmlFor={`author-${author.id}`} className="text-sm font-normal">
                    {author.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="periods">
          <AccordionTrigger>Thời kỳ</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {periods.map((period) => (
                <div key={period.id} className="flex items-center space-x-2">
                  <Checkbox id={`period-${period.id}`} />
                  <Label htmlFor={`period-${period.id}`} className="text-sm font-normal">
                    {period.label}
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
