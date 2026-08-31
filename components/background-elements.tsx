"use client"

import { useEffect, useState } from "react"

type Element = {
  id: number
  emoji: string
  left: number
  top: number
  delay: number
  duration: number
  spin: boolean
}

export function BackgroundElements() {
  // These positions are random, so the server and the client would each pick a
  // different set and React would report a hydration mismatch, throwing away
  // and re-rendering the tree. Generating them in an effect means the first
  // client render matches the server's empty output, and the decorations
  // appear immediately afterwards.
  const [elements, setElements] = useState<Element[]>([])

  const generateElements = (): Element[] => {
    const emojis = ["🐾", "🦴", "🐶", "🐕", "❤️", "⭐", "🦴", "🐾"]
    const elements = []

    for (let i = 0; i < 12; i++) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      const randomLeft = Math.random() * 100
      const randomTop = Math.random() * 100
      const randomDelay = Math.random() * 5
      const randomDuration = 4 + Math.random() * 4
      const hasSpinClass = Math.random() > 0.5

      elements.push({
        id: i,
        emoji: randomEmoji,
        left: randomLeft,
        top: randomTop,
        delay: randomDelay,
        duration: randomDuration,
        spin: hasSpinClass,
      })
    }
    return elements
  }

  useEffect(() => {
    setElements(generateElements())
  }, [])

  return (
    <>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`background-element ${el.spin ? "element-spin" : "element-bounce"}`}
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.emoji}
        </div>
      ))}
    </>
  )
}
