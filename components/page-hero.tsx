import type { ReactNode } from "react"

// One hero band for the support and legal pages.
//
// Those six pages (FAQ, health guarantee, breeding policies, shipping,
// privacy, terms) were each written as a plain centred document: font-bold
// where the rest of the site is font-black, a centred heading where every
// other page is left-aligned, no eyebrow, and top padding that landed the
// heading anywhere from 87px to 191px below the header. They matched on
// colour, so nothing flagged them, but they read as a different site.
//
// This gives them the same opening as the rest: a left-aligned black heading
// with a primary eyebrow above it, on a consistent rhythm.
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-border/50 bg-background pt-28 pb-10 md:pt-36 md:pb-14">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-black capitalize leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

// The body wrapper that goes with it, so these pages share one measure and
// one vertical rhythm instead of each picking their own py-32.
export function PageBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">{children}</div>
      </div>
    </section>
  )
}
