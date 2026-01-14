"use client"

import { useEffect, useRef } from "react"

export function Fireworks() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let rockets: Rocket[] = []

        // Brand Colors (Boosted for better visibility while remaining elegant)
        const colors = [
            "hsla(250, 70%, 65%, 0.4)", // Purple
            "hsla(45, 95%, 65%, 0.4)",  // Gold
            "hsla(280, 80%, 75%, 0.3)", // Lavender
        ]

        class Rocket {
            x: number
            y: number
            vy: number
            targetY: number
            color: string
            trail: { x: number; y: number; alpha: number }[]
            exploded: boolean

            constructor(x: number, targetY: number, color: string) {
                this.x = x
                this.y = canvas.height + 10
                this.vy = -(Math.random() * 3 + 4) // Speed of launch
                this.targetY = targetY
                this.color = color
                this.trail = []
                this.exploded = false
            }

            update() {
                this.trail.push({ x: this.x, y: this.y, alpha: 0.4 })
                if (this.trail.length > 10) this.trail.shift()
                this.trail.forEach(t => t.alpha -= 0.04)

                this.y += this.vy
                this.vy *= 0.99 // Air resistance

                if (this.y <= this.targetY || this.vy >= -0.5) {
                    this.exploded = true
                    this.explode()
                }
            }

            explode() {
                const particleCount = 40 + Math.floor(Math.random() * 20)
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle(this.x, this.y, this.color))
                }
            }

            draw() {
                if (!ctx) return

                // Draw Trail
                this.trail.forEach((t) => {
                    ctx.beginPath()
                    ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2)
                    ctx.fillStyle = this.color.replace("0.4", t.alpha.toString())
                    ctx.fill()
                })

                // Draw Head
                ctx.beginPath()
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }
        }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            alpha: number
            color: string
            size: number
            decay: number
            friction: number
            gravity: number

            constructor(x: number, y: number, color: string) {
                this.x = x
                this.y = y
                const angle = Math.random() * Math.PI * 2
                const speed = Math.random() * 3 + 1
                this.vx = Math.cos(angle) * speed
                this.vy = Math.sin(angle) * speed
                this.alpha = 1.0
                this.color = color
                this.size = Math.random() * 2 + 0.5
                this.decay = Math.random() * 0.02 + 0.015
                this.friction = 0.96
                this.gravity = 0.08
            }

            update() {
                this.vx *= this.friction
                this.vy *= this.friction
                this.vy += this.gravity
                this.x += this.vx
                this.y += this.vy
                this.alpha -= this.decay
            }

            draw() {
                if (!ctx) return
                ctx.save()
                ctx.globalAlpha = this.alpha
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            }
        }

        const render = () => {
            // Subtle trail effect on canvas (clears but leaves a faint ghost)
            ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
            ctx.globalCompositeOperation = "destination-out"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.globalCompositeOperation = "lighter"

            if (Math.random() < 0.015) { // Adjusted frequency
                const x = Math.random() * canvas.width
                const targetY = canvas.height * (0.1 + Math.random() * 0.4)
                const color = colors[Math.floor(Math.random() * colors.length)]
                rockets.push(new Rocket(x, targetY, color))
            }

            rockets = rockets.filter(r => !r.exploded)
            rockets.forEach(r => {
                r.update()
                r.draw()
            })

            particles = particles.filter((p) => p.alpha > 0)
            particles.forEach((p) => {
                p.update()
                p.draw()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resize()
        window.addEventListener("resize", resize)
        render()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[5]"
            style={{ opacity: 0.8 }}
        />
    )
}
