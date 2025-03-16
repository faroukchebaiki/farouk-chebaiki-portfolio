"use client"

import { useEffect, useRef } from "react"

// Rename the component to better reflect the new style
interface DarkMistBackgroundProps {
  blurAmount?: string
  color?: string
  particleCount?: number
  speed?: number
  turbulence?: number
}

export default function DarkMistBackground({
  blurAmount = "10px",
  color = "#0A3A0A", // Darker green
  particleCount = 70, // Fewer particles
  speed = 0.3, // Slower movement
  turbulence = 0.8, // Less turbulence
}: DarkMistBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mist particles
    class Particle {
      x: number
      y: number
      width: number
      height: number
      speedX: number
      speedY: number
      opacity: number
      maxOpacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        // More elongated shapes instead of circles
        this.width = Math.random() * 100 + 50
        this.height = Math.random() * 20 + 5
        // More horizontal movement
        this.speedX = (Math.random() - 0.3) * speed
        this.speedY = (Math.random() - 0.5) * speed * 0.3
        // Lower opacity for darker feel
        this.maxOpacity = Math.random() * 0.2 + 0.05
        this.opacity = Math.random() * this.maxOpacity
      }

      update() {
        // Reduced turbulence
        this.speedX += (Math.random() - 0.5) * 0.005 * turbulence
        this.speedY += (Math.random() - 0.5) * 0.002 * turbulence

        // Limit max speed
        this.speedX = Math.max(-speed, Math.min(speed, this.speedX))
        this.speedY = Math.max(-speed * 0.3, Math.min(speed * 0.3, this.speedY))

        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < -this.width) this.x = canvas.width + this.width
        if (this.x > canvas.width + this.width) this.x = -this.width
        if (this.y < -this.height) this.y = canvas.height + this.height
        if (this.y > canvas.height + this.height) this.y = -this.height

        // More subtle opacity changes
        this.opacity += (Math.random() - 0.5) * 0.005
        this.opacity = Math.max(0.02, Math.min(this.maxOpacity, this.opacity))
      }

      draw() {
        ctx!.beginPath()

        // Parse the color to get RGB values
        let r = 10,
          g = 58,
          b = 10 // Default to dark green
        if (color.startsWith("#")) {
          if (color.length === 4) {
            r = Number.parseInt(color[1] + color[1], 16)
            g = Number.parseInt(color[2] + color[2], 16)
            b = Number.parseInt(color[3] + color[3], 16)
          } else if (color.length === 7) {
            r = Number.parseInt(color.slice(1, 3), 16)
            g = Number.parseInt(color.slice(3, 5), 16)
            b = Number.parseInt(color.slice(5, 7), 16)
          }
        }

        // Use elongated shapes with gradient for mist effect
        const gradient = ctx!.createLinearGradient(this.x - this.width / 2, this.y, this.x + this.width / 2, this.y)

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`)
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${this.opacity})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx!.fillStyle = gradient

        // Draw elongated shape instead of circle
        ctx!.ellipse(this.x, this.y, this.width / 2, this.height / 2, 0, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      // Darker background with longer trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    // Fill with black first
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [blurAmount, color, particleCount, speed, turbulence])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A3A0A]">
      <div
        className="absolute inset-0"
        style={{
          filter: `blur(${blurAmount})`,
          WebkitFilter: `blur(${blurAmount})`,
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  )
}

