"use client"

import { useEffect, useRef } from "react"

export function Fireworks() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Non-null bindings so the closures below (Rocket/Particle) keep the narrowed type.
        const cv = canvas

        let animationFrameId: number
        let particles: Particle[] = []
        let rockets: Rocket[] = []

        // Brand Colors (Vibrant but sophisticated)
        const colors = [
            "hsla(250, 75%, 65%, 0.45)", // Deep Purple
            "hsla(45, 95%, 65%, 0.45)",  // Bright Gold
            "hsla(280, 85%, 75%, 0.35)", // Lavender
            "hsla(210, 80%, 70%, 0.3)",  // NYC Blue
        ]

        class Rocket {
            x: number
            y: number
            vx: number
            vy: number
            targetY: number
            color: string
            trail: { x: number; y: number; alpha: number }[]
            exploded: boolean

            constructor(x: number, targetY: number, color: string) {
                this.x = x
                this.y = cv.height + 10

                // ADDED: Randomized launch angles
                const angle = (Math.random() * 0.2 - 0.1) * Math.PI // Slight tilt range
                const force = Math.random() * 3 + 5
                this.vx = Math.sin(angle) * force
                this.vy = -Math.cos(angle) * force

                this.targetY = targetY
                this.color = color
                this.trail = []
                this.exploded = false
            }

            update() {
                this.trail.push({ x: this.x, y: this.y, alpha: 0.4 })
                if (this.trail.length > 12) this.trail.shift()
                this.trail.forEach(t => t.alpha -= 0.03)

                this.x += this.vx
                this.y += this.vy
                this.vy *= 0.99
                this.vx *= 0.99 // Sideways air resistance

                if (this.y <= this.targetY || this.vy >= -0.5) {
                    this.exploded = true
                    this.explode()
                }
            }

            explode() {
                // ADDED: Varied burst types
                const burstType = Math.random()
                const particleCount = burstType > 0.8 ? 80 : 45
                const speedMultiplier = burstType > 0.8 ? 1.5 : 1.0

                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle(this.x, this.y, this.color, speedMultiplier))
                }
            }

            draw() {
                if (!ctx) return

                // Draw Trail
                this.trail.forEach((t) => {
                    ctx.beginPath()
                    ctx.arc(t.x, t.y, 1.2, 0, Math.PI * 2)
                    ctx.fillStyle = this.color.replace(/0\.\d+/, t.alpha.toString())
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

            constructor(x: number, y: number, color: string, speedMod: number) {
                this.x = x
                this.y = y
                const angle = Math.random() * Math.PI * 2
                const speed = (Math.random() * 3 + 1) * speedMod
                this.vx = Math.cos(angle) * speed
                this.vy = Math.sin(angle) * speed
                this.alpha = 1.0
                this.color = color
                this.size = Math.random() * 2 + 0.5
                this.decay = Math.random() * 0.015 + 0.012
                this.friction = 0.965
                this.gravity = 0.07 // Slightly lighter gravity for elegance
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
            ctx.fillStyle = "rgba(0, 0, 0, 0.18)"
            ctx.globalCompositeOperation = "destination-out"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.globalCompositeOperation = "lighter"

            if (Math.random() < 0.018) {
                const x = Math.random() * canvas.width
                const targetY = canvas.height * (0.05 + Math.random() * 0.45)
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
            style={{ opacity: 0.9 }}
        />
    )
}
