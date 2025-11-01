"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const AetherFlowHero = ({
  onExplore,
  onBook,
  language = "en",
}: {
  onExplore: () => void
  onBook: () => void
  language?: "en" | "es"
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const content = {
    en: {
      title: "Creative solutions, connected data.",
      highlightWord: "connected",
      subtitle: "I help small businesses uncover the hidden stories in their data and processes.",
      cta1: "Explore Projects",
      cta2: "Book a Call",
    },
    es: {
      title: "Soluciones creativas, datos conectados.",
      highlightWord: "conectados",
      subtitle: "Ayudo a pequeñas empresas a descubrir las historias ocultas en sus datos y procesos.",
      cta1: "Explorar Proyectos",
      cta2: "Agendar Llamada",
    },
  }

  const t = content[language]

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let animationFrameId: number
    let particles: Particle[] = []
    const mouse = { x: null as number | null, y: null as number | null, radius: 200 }

    const brandColors = ["rgba(255, 25, 145, 0.6)", "rgba(230, 251, 107, 0.6)", "rgba(10, 1, 130, 0.4)"]

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= forceDirectionX * force * 5
            this.y -= forceDirectionY * force * 5
          }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    function init() {
      particles = []
      const numberOfParticles = (canvas!.height * canvas!.width) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1
        const x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2
        const y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        const color = brandColors[Math.floor(Math.random() * brandColors.length)]
        particles.push(new Particle(x, y, directionX, directionY, size, color))
      }
    }

    const resizeCanvas = () => {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      init()
    }
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const connect = () => {
      let opacityValue = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)

          if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
            opacityValue = 1 - distance / 20000

            const dx_mouse_a = particles[a].x - (mouse.x || 0)
            const dy_mouse_a = particles[a].y - (mouse.y || 0)
            const distance_mouse_a = Math.sqrt(dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a)

            if (mouse.x && distance_mouse_a < mouse.radius) {
              ctx!.strokeStyle = `rgba(255, 25, 145, ${opacityValue})`
            } else {
              ctx!.strokeStyle = `rgba(230, 251, 107, ${opacityValue * 0.5})`
            }

            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      ctx!.fillStyle = "rgba(10, 1, 130, 0.05)"
      ctx!.fillRect(0, 0, innerWidth, innerHeight)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
      }
      connect()
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseOut)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      <div className="relative z-10 text-center p-6 max-w-3xl mx-auto">
        <motion.h1
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {renderHighlightedTitle(t.title, t.highlightWord)}
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={onExplore}
            className="px-8 py-4 bg-accent-pink text-white font-semibold rounded-lg shadow-lg hover:bg-accent-pink/90 transition-colors duration-300 flex items-center gap-2"
          >
            {t.cta1}
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={onBook}
            className="px-8 py-4 bg-transparent border-2 border-accent-yellow text-accent-yellow font-semibold rounded-lg hover:bg-accent-yellow/10 transition-colors duration-300 flex items-center gap-2"
          >
            {t.cta2}
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function renderHighlightedTitle(title: string, highlightWord: string) {
  const parts = title.split(highlightWord)
  if (parts.length === 1) return title

  return (
    <>
      {parts[0]}
      <span className="relative inline-block">
        <span className="relative z-10">{highlightWord}</span>
        <svg
          className="absolute -inset-1 w-full h-full"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
          style={{ left: "-4px", top: "-2px" }}
        >
          <path
            d="M5,30 Q50,10 100,25 T195,30 Q190,35 185,32 T100,35 Q50,40 10,32 Z"
            fill="none"
            stroke="#E6FB6B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {parts[1]}
    </>
  )
}

export default AetherFlowHero
