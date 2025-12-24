"use client"

export function BackgroundElements() {
  // Generate randomized positions and animations for elements
  const generateElements = () => {
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

  const elements = generateElements()

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
