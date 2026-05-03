"use client"

import { useEffect, useRef } from "react"

interface AvatarGeneratorProps {
  name: string
  size?: number
  seed?: number
}

export function AvatarGenerator({ name, size = 100, seed = 0 }: AvatarGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Đảm bảo canvas có kích thước đúng
    canvas.width = size
    canvas.height = size

    // Tạo màu ngẫu nhiên dựa trên seed
    const randomColor = (offset = 0) => {
      const r = Math.floor(Math.sin(seed * 100 + offset) * 127 + 128)
      const g = Math.floor(Math.sin(seed * 100 + offset + 1) * 127 + 128)
      const b = Math.floor(Math.sin(seed * 100 + offset + 2) * 127 + 128)
      return `rgb(${r}, ${g}, ${b})`
    }

    // Vẽ nền tròn
    ctx.fillStyle = randomColor()
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.fill()

    // Tạo các hình dạng ngẫu nhiên cho khuôn mặt
    const faceType = Math.floor((seed * 10) % 5)

    // Vẽ khuôn mặt dựa trên loại - đảm bảo mặt nằm ở giữa
    switch (faceType) {
      case 0: // Khuôn mặt đơn giản
        // Mắt - đặt ở vị trí trung tâm hơn
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(size * 0.35, size * 0.4, size * 0.1, 0, Math.PI * 2)
        ctx.arc(size * 0.65, size * 0.4, size * 0.1, 0, Math.PI * 2)
        ctx.fill()

        // Đồng tử - đặt ở giữa mắt
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(size * 0.35, size * 0.4, size * 0.05, 0, Math.PI * 2)
        ctx.arc(size * 0.65, size * 0.4, size * 0.05, 0, Math.PI * 2)
        ctx.fill()

        // Miệng - đặt ở vị trí cân đối
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(size * 0.5, size * 0.65, size * 0.15, 0, Math.PI)
        ctx.stroke()
        break

      case 1: // Khuôn mặt hình học
        // Mắt - đặt ở vị trí trung tâm hơn
        ctx.fillStyle = "white"
        ctx.fillRect(size * 0.25, size * 0.35, size * 0.2, size * 0.1)
        ctx.fillRect(size * 0.55, size * 0.35, size * 0.2, size * 0.1)

        // Đồng tử - đặt ở giữa mắt
        ctx.fillStyle = "black"
        ctx.fillRect(size * 0.3, size * 0.35, size * 0.1, size * 0.1)
        ctx.fillRect(size * 0.6, size * 0.35, size * 0.1, size * 0.1)

        // Miệng - đặt ở vị trí cân đối
        ctx.fillRect(size * 0.35, size * 0.6, size * 0.3, size * 0.05)
        break

      case 2: // Khuôn mặt vui vẻ
        // Mắt - đặt ở vị trí trung tâm hơn
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(size * 0.35, size * 0.4, size * 0.1, 0, Math.PI * 2)
        ctx.arc(size * 0.65, size * 0.4, size * 0.1, 0, Math.PI * 2)
        ctx.fill()

        // Đồng tử - đặt ở giữa mắt
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(size * 0.35, size * 0.38, size * 0.05, 0, Math.PI * 2)
        ctx.arc(size * 0.65, size * 0.38, size * 0.05, 0, Math.PI * 2)
        ctx.fill()

        // Miệng cười - đặt ở vị trí cân đối
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(size * 0.5, size * 0.5, size * 0.25, 0.1 * Math.PI, 0.9 * Math.PI)
        ctx.stroke()
        break

      case 3: // Khuôn mặt đơn giản với mũi
        // Mắt - đặt ở vị trí trung tâm hơn
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(size * 0.35, size * 0.4, size * 0.06, 0, Math.PI * 2)
        ctx.arc(size * 0.65, size * 0.4, size * 0.06, 0, Math.PI * 2)
        ctx.fill()

        // Mũi - đặt ở vị trí cân đối
        ctx.beginPath()
        ctx.moveTo(size * 0.5, size * 0.45)
        ctx.lineTo(size * 0.45, size * 0.55)
        ctx.lineTo(size * 0.55, size * 0.55)
        ctx.closePath()
        ctx.fill()

        // Miệng - đặt ở vị trí cân đối
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(size * 0.5, size * 0.65, size * 0.1, 0, Math.PI)
        ctx.stroke()
        break

      case 4: // Khuôn mặt phong cách khác
        // Mắt - đặt ở vị trí trung tâm hơn
        ctx.fillStyle = "white"
        ctx.fillRect(size * 0.25, size * 0.35, size * 0.15, size * 0.1)
        ctx.fillRect(size * 0.6, size * 0.35, size * 0.15, size * 0.1)

        // Đồng tử - đặt ở giữa mắt
        ctx.fillStyle = randomColor(5)
        ctx.fillRect(size * 0.28, size * 0.38, size * 0.09, size * 0.04)
        ctx.fillRect(size * 0.63, size * 0.38, size * 0.09, size * 0.04)

        // Miệng - đặt ở vị trí cân đối
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.ellipse(size * 0.5, size * 0.65, size * 0.15, size * 0.05, 0, 0, Math.PI * 2)
        ctx.fill()

        // Răng - đặt ở giữa miệng
        ctx.fillStyle = "black"
        ctx.fillRect(size * 0.44, size * 0.63, size * 0.03, size * 0.04)
        ctx.fillRect(size * 0.53, size * 0.63, size * 0.03, size * 0.04)
        break
    }

    // Vẽ chữ cái đầu tiên của tên
    if (name && name.length > 0) {
      const initial = name.charAt(0).toUpperCase()
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      ctx.font = `bold ${size * 0.5}px Arial`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(initial, size / 2, size / 2)
    }
  }, [name, size, seed])

  return <canvas ref={canvasRef} width={size} height={size} className="rounded-full" />
}
