"use client"

import { useEffect, useRef } from "react"

interface BookCoverGeneratorProps {
  title: string
  author: string
  width?: number
  height?: number
  seed?: number
}

export function BookCoverGenerator({ title, author, width = 200, height = 300, seed = 0 }: BookCoverGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Đảm bảo canvas có kích thước đúng
    canvas.width = width
    canvas.height = height

    // Tạo màu ngẫu nhiên dựa trên seed
    const randomColor = () => {
      const r = Math.floor(Math.sin(seed * 100 + 0) * 127 + 128)
      const g = Math.floor(Math.sin(seed * 100 + 1) * 127 + 128)
      const b = Math.floor(Math.sin(seed * 100 + 2) * 127 + 128)
      return `rgb(${r}, ${g}, ${b})`
    }

    // Tạo gradient ngẫu nhiên
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, randomColor())
    gradient.addColorStop(1, randomColor())

    // Vẽ nền
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Vẽ viền
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
    ctx.lineWidth = 5
    ctx.strokeRect(10, 10, width - 20, height - 20)

    // Vẽ một số hoa văn ngẫu nhiên
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
    for (let i = 0; i < 5; i++) {
      const x = Math.sin(seed + i) * width * 0.4 + width * 0.5
      const y = Math.cos(seed + i) * height * 0.4 + height * 0.5
      const size = Math.abs(Math.sin(seed + i * 2)) * 30 + 10

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Vẽ tiêu đề
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "bold 16px Arial"

    // Chia tiêu đề thành nhiều dòng nếu quá dài
    const words = title.split(" ")
    const lines = []
    let currentLine = words[0]

    for (let i = 1; i < words.length; i++) {
      if (currentLine.length + words[i].length + 1 <= 15) {
        currentLine += " " + words[i]
      } else {
        lines.push(currentLine)
        currentLine = words[i]
      }
    }
    lines.push(currentLine)

    // Vẽ từng dòng tiêu đề
    lines.forEach((line, index) => {
      ctx.fillText(line, width / 2, height / 2 - (lines.length - 1) * 10 + index * 20)
    })

    // Vẽ tác giả
    ctx.font = "14px Arial"
    ctx.fillText(author, width / 2, height - 30)
  }, [title, author, width, height, seed])

  return <canvas ref={canvasRef} width={width} height={height} className="w-full h-full" />
}
