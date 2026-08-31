"use client"

import { useState } from "react"
import { Truck, MapPin, Check } from "lucide-react"
import { DepositPayment } from "@/components/deposit-payment"
import { servicePaths, DEPOSIT_AMOUNT } from "@/lib/stud-data"
import { cn } from "@/lib/utils"

const ICONS = { shipped: Truck, "live-cover": MapPin } as const

/**
 * The two stud service paths in a single card with a tab selector.
 *
 * Showing one path at a time is deliberate: both take the same $500 deposit, so
 * side-by-side cards duplicated the payment UI and drifted out of alignment
 * whenever one path's copy ran a line longer than the other's.
 */
export function ServiceSelector() {
  const [activeId, setActiveId] = useState(servicePaths[0].id)
  const active = servicePaths.find((p) => p.id === activeId) ?? servicePaths[0]
  const ActiveIcon = ICONS[active.id]

  return (
    <div className="max-w-3xl mx-auto">
      {/* ── Tab selector ── */}
      <div
        role="tablist"
        aria-label="Choose a stud service path"
        className="grid grid-cols-2 gap-2 sm:gap-3 p-2 bg-card border border-border rounded-2xl mb-5"
      >
        {servicePaths.map((path) => {
          const Icon = ICONS[path.id]
          const isActive = path.id === activeId
          return (
            <button
              key={path.id}
              role="tab"
              id={`tab-${path.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${path.id}`}
              onClick={() => setActiveId(path.id)}
              className={cn(
                "flex flex-col items-center text-center gap-1.5 px-4 py-4 sm:py-5 rounded-xl transition-all duration-200 border-2",
                isActive
                  ? "bg-primary/15 border-primary shadow-lg shadow-primary/20"
                  : "bg-transparent border-transparent hover:bg-background/60",
              )}
            >
              <Icon className={cn("w-5 h-5 sm:w-6 sm:h-6 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} />
              <span className={cn("text-base sm:text-lg font-black leading-tight", isActive ? "text-foreground" : "text-muted-foreground")}>
                {path.shortName}
              </span>
              <span className="text-[11px] sm:text-xs text-muted-foreground leading-snug hidden sm:block">
                {path.bestFor}
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Active panel ── */}
      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="bg-card rounded-2xl border border-border overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/10 p-5 sm:p-7 border-b border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-background/60 rounded-xl flex items-center justify-center shrink-0">
              <ActiveIcon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-foreground leading-tight">{active.name}</h3>
          </div>
          {/* Fixed min-height so switching tabs doesn't jump the layout. */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed sm:min-h-[3rem]">
            {active.summary}
          </p>
        </div>

        <div className="p-5 sm:p-7">
          {/* Due today / balance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
            <div className="bg-primary/10 border border-primary/25 rounded-xl p-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1.5">Due Today</p>
              <p className="text-2xl sm:text-3xl font-black text-foreground leading-none mb-1.5">${DEPOSIT_AMOUNT}</p>
              <p className="text-xs text-muted-foreground">non-refundable booking fee</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1.5">Balance Due</p>
              <p className="text-base sm:text-lg font-black text-foreground leading-tight mb-1.5">{active.balanceDue}</p>
              <p className="text-xs text-muted-foreground">{active.balanceTiming}</p>
            </div>
          </div>

          {/* Steps + you cover, side by side on desktop */}
          <div className="grid md:grid-cols-2 gap-7 mb-2">
            <div>
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-3.5">How It Goes</p>
              <ol className="space-y-3">
                {active.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-3.5">You Cover</p>
              <ul className="space-y-3">
                {active.buyerCovers.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary stroke-[3px]" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-4 bg-background border border-border rounded-xl">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1.5">Best For</p>
                <p className="text-sm font-bold text-foreground leading-snug">{active.bestFor}</p>
              </div>
            </div>
          </div>

          <DepositPayment serviceName={active.shortName} />
        </div>
      </div>
    </div>
  )
}
