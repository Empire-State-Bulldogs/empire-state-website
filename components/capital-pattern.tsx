// Decorative backdrop, replacing the scattered spinning emoji.
//
// Twelve 🐾 🦴 🐶 characters at random positions, half of them rotating on a
// six second loop, read as clip art and moved constantly in the corner of the
// eye. This is drawn instead from the Capital District: the Empire State
// Plaza's row of towers and The Egg, the Hudson at their foot, and the
// blueprint grid of a city plan.
//
// It is inline SVG rather than an image so it inherits currentColor and stays
// crisp, sits behind content with aria-hidden, and does not animate: it is a
// texture, not an event.

type Props = {
  /** `skyline` anchors a section bottom; `grid` tiles the whole area. */
  variant?: "skyline" | "grid"
  className?: string
}

export function CapitalPattern({ variant = "skyline", className = "" }: Props) {
  if (variant === "grid") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <svg
          className="h-full w-full text-primary/[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* A surveyor's grid with a marked intersection, like a plan of
                the street blocks around the Plaza. */}
            <pattern
              id="capital-grid"
              width="72"
              height="72"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M72 0H0v72"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="0" cy="0" r="1.75" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capital-grid)" />
        </svg>
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 190"
        preserveAspectRatio="xMidYMax slice"
        className="h-[190px] w-full text-primary/[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Hudson: two shallow currents under the skyline. */}
        <path
          d="M0 170 Q 150 160 300 170 T 600 170 T 900 170 T 1200 170"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M0 182 Q 200 172 400 182 T 800 182 T 1200 182"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Corning Tower, the tallest thing in the city. */}
        <rect x="120" y="18" width="34" height="152" fill="currentColor" />
        <rect x="132" y="6" width="10" height="12" fill="currentColor" />

        {/* The four Agency Buildings, the Plaza's matching row. */}
        {[200, 246, 292, 338].map((x) => (
          <rect key={x} x={x} y="72" width="30" height="98" fill="currentColor" />
        ))}

        {/* The Egg: the Plaza's performing arts centre, in profile. */}
        <ellipse cx="430" cy="150" rx="52" ry="26" fill="currentColor" />
        <rect x="424" y="150" width="12" height="20" fill="currentColor" />

        {/* State Capitol: a long block under a pitched roof and turrets. */}
        <rect x="530" y="104" width="150" height="66" fill="currentColor" />
        <path d="M530 104 L605 66 L680 104 Z" fill="currentColor" />
        <rect x="540" y="80" width="12" height="26" fill="currentColor" />
        <rect x="658" y="80" width="12" height="26" fill="currentColor" />

        {/* City blocks running out toward the river. */}
        {[
          [730, 118, 40, 52],
          [782, 96, 34, 74],
          [828, 128, 44, 42],
          [884, 84, 30, 86],
          [926, 122, 38, 48],
          [976, 104, 32, 66],
          [1020, 134, 46, 36],
          [1078, 110, 34, 60],
          [1124, 126, 40, 44],
        ].map(([x, y, w, h]) => (
          <rect key={x} x={x} y={y} width={w} height={h} fill="currentColor" />
        ))}
      </svg>
    </div>
  )
}
