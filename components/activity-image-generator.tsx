"use client"

import { useEffect, useRef } from "react"

interface ActivityImageGeneratorProps {
  type: "reading" | "bookclub" | "corner" | "hero" | "generic"
  width?: number
  height?: number
  seed?: number
}

export function ActivityImageGenerator({ type, width = 400, height = 300, seed = 0 }: ActivityImageGeneratorProps) {
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
    const randomColor = (offset = 0) => {
      const r = Math.floor(Math.sin(seed * 100 + offset) * 127 + 128)
      const g = Math.floor(Math.sin(seed * 100 + offset + 1) * 127 + 128)
      const b = Math.floor(Math.sin(seed * 100 + offset + 2) * 127 + 128)
      return `rgb(${r}, ${g}, ${b})`
    }

    // Vẽ nền
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, randomColor())
    gradient.addColorStop(1, randomColor(3))
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Vẽ các yếu tố khác nhau dựa trên loại ảnh
    switch (type) {
      case "reading":
        // Vẽ một người đọc sách
        // Vẽ ghế
        ctx.fillStyle = randomColor(5)
        ctx.fillRect(width * 0.2, height * 0.6, width * 0.3, height * 0.3)
        ctx.fillStyle = randomColor(6)
        ctx.fillRect(width * 0.2, height * 0.5, width * 0.3, height * 0.1)

        // Vẽ người
        ctx.fillStyle = "#8B4513"
        ctx.beginPath()
        ctx.arc(width * 0.35, height * 0.3, width * 0.1, 0, Math.PI * 2) // Đầu
        ctx.fill()

        ctx.fillStyle = randomColor(7)
        ctx.fillRect(width * 0.25, height * 0.4, width * 0.2, height * 0.3) // Thân

        // Vẽ sách
        ctx.fillStyle = "white"
        ctx.fillRect(width * 0.3, height * 0.45, width * 0.2, height * 0.15)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1
        ctx.strokeRect(width * 0.3, height * 0.45, width * 0.2, height * 0.15)
        ctx.beginPath()
        ctx.moveTo(width * 0.4, height * 0.45)
        ctx.lineTo(width * 0.4, height * 0.6)
        ctx.stroke()

        // Vẽ đèn
        ctx.fillStyle = randomColor(8)
        ctx.fillRect(width * 0.6, height * 0.2, width * 0.05, height * 0.5)
        ctx.beginPath()
        ctx.arc(width * 0.625, height * 0.2, width * 0.05, 0, Math.PI * 2)
        ctx.fill()

        // Vẽ ánh sáng
        ctx.fillStyle = "rgba(255, 255, 100, 0.2)"
        ctx.beginPath()
        ctx.moveTo(width * 0.625, height * 0.2)
        ctx.lineTo(width * 0.4, height * 0.4)
        ctx.lineTo(width * 0.4, height * 0.6)
        ctx.lineTo(width * 0.2, height * 0.7)
        ctx.lineTo(width * 0.1, height * 0.5)
        ctx.closePath()
        ctx.fill()
        break

      case "bookclub":
        // Vẽ nhóm người thảo luận
        // Vẽ bàn
        ctx.fillStyle = "#8B4513"
        ctx.fillRect(width * 0.1, height * 0.6, width * 0.8, height * 0.1)

        // Vẽ người 1
        ctx.fillStyle = randomColor(5)
        ctx.beginPath()
        ctx.arc(width * 0.3, height * 0.4, width * 0.08, 0, Math.PI * 2) // Đầu
        ctx.fill()
        ctx.fillRect(width * 0.25, height * 0.48, width * 0.1, height * 0.2) // Thân

        // Vẽ người 2
        ctx.fillStyle = randomColor(6)
        ctx.beginPath()
        ctx.arc(width * 0.5, height * 0.4, width * 0.08, 0, Math.PI * 2) // Đầu
        ctx.fill()
        ctx.fillRect(width * 0.45, height * 0.48, width * 0.1, height * 0.2) // Thân

        // Vẽ người 3
        ctx.fillStyle = randomColor(7)
        ctx.beginPath()
        ctx.arc(width * 0.7, height * 0.4, width * 0.08, 0, Math.PI * 2) // Đầu
        ctx.fill()
        ctx.fillRect(width * 0.65, height * 0.48, width * 0.1, height * 0.2) // Thân

        // Vẽ sách trên bàn
        ctx.fillStyle = "white"
        ctx.fillRect(width * 0.2, height * 0.55, width * 0.1, height * 0.05)
        ctx.fillRect(width * 0.4, height * 0.55, width * 0.1, height * 0.05)
        ctx.fillRect(width * 0.6, height * 0.55, width * 0.1, height * 0.05)
        break

      case "corner":
        // Vẽ góc đọc sách
        // Vẽ ghế sofa
        ctx.fillStyle = randomColor(5)
        ctx.fillRect(width * 0.1, height * 0.5, width * 0.4, height * 0.4)
        ctx.fillStyle = randomColor(6)
        ctx.fillRect(width * 0.1, height * 0.4, width * 0.4, height * 0.1)
        ctx.fillRect(width * 0.5, height * 0.5, width * 0.1, height * 0.4)

        // Vẽ bàn
        ctx.fillStyle = "#8B4513"
        ctx.fillRect(width * 0.6, height * 0.6, width * 0.2, height * 0.1)
        ctx.fillRect(width * 0.65, height * 0.7, width * 0.1, height * 0.2)

        // Vẽ đèn
        ctx.fillStyle = randomColor(7)
        ctx.fillRect(width * 0.7, height * 0.2, width * 0.05, height * 0.4)
        ctx.beginPath()
        ctx.arc(width * 0.725, height * 0.2, width * 0.05, 0, Math.PI * 2)
        ctx.fill()

        // Vẽ kệ sách
        ctx.fillStyle = "#8B4513"
        ctx.fillRect(width * 0.1, height * 0.1, width * 0.2, height * 0.3)

        // Vẽ sách trên kệ
        for (let i = 0; i < 5; i++) {
          ctx.fillStyle = randomColor(i + 8)
          ctx.fillRect(width * (0.12 + i * 0.03), height * 0.15, width * 0.02, height * 0.1)
        }
        for (let i = 0; i < 5; i++) {
          ctx.fillStyle = randomColor(i + 13)
          ctx.fillRect(width * (0.12 + i * 0.03), height * 0.27, width * 0.02, height * 0.1)
        }
        break

      case "hero":
        // Vẽ banner hero
        // Vẽ nền gradient
        const heroGradient = ctx.createLinearGradient(0, 0, width, height)
        heroGradient.addColorStop(0, randomColor(5))
        heroGradient.addColorStop(0.5, randomColor(6))
        heroGradient.addColorStop(1, randomColor(7))
        ctx.fillStyle = heroGradient
        ctx.fillRect(0, 0, width, height)

        // Vẽ sách bay
        for (let i = 0; i < 7; i++) {
          const x = Math.sin(seed + i) * width * 0.4 + width * 0.5
          const y = Math.cos(seed + i) * height * 0.4 + height * 0.5
          const size = Math.abs(Math.sin(seed + i * 2)) * 30 + 20

          ctx.fillStyle = randomColor(i + 10)
          ctx.fillRect(x - size / 2, y - size / 4, size, size / 2)

          // Vẽ trang sách
          ctx.fillStyle = "white"
          ctx.fillRect(x - size / 2, y - size / 4, size / 2, size / 2)

          // Vẽ đường kẻ trang
          ctx.strokeStyle = "rgba(0, 0, 0, 0.2)"
          ctx.beginPath()
          ctx.moveTo(x, y - size / 4)
          ctx.lineTo(x, y + size / 4)
          ctx.stroke()
        }

        // Vẽ tiêu đề
        ctx.fillStyle = "white"
        ctx.font = "bold 24px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("Vĩ Dạ Reading Challenges", width / 2, height / 2)
        break

      default: // generic
        // Vẽ một số hình dạng ngẫu nhiên
        for (let i = 0; i < 10; i++) {
          ctx.fillStyle = randomColor(i)
          const x = Math.sin(seed + i) * width * 0.4 + width * 0.5
          const y = Math.cos(seed + i) * height * 0.4 + height * 0.5
          const size = Math.abs(Math.sin(seed + i * 2)) * 50 + 20

          if (i % 3 === 0) {
            // Vẽ hình tròn
            ctx.beginPath()
            ctx.arc(x, y, size / 2, 0, Math.PI * 2)
            ctx.fill()
          } else if (i % 3 === 1) {
            // Vẽ hình vuông
            ctx.fillRect(x - size / 2, y - size / 2, size, size)
          } else {
            // Vẽ tam giác
            ctx.beginPath()
            ctx.moveTo(x, y - size / 2)
            ctx.lineTo(x + size / 2, y + size / 2)
            ctx.lineTo(x - size / 2, y + size / 2)
            ctx.closePath()
            ctx.fill()
          }
        }
        break
    }
  }, [type, width, height, seed])

  return <canvas ref={canvasRef} width={width} height={height} className="w-full h-full" />
}
