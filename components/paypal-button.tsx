"use client"

import Link from "next/link"
import { ArrowRight, Lock, Shield, CreditCard, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PayPalDepositButtonProps {
  label: string
  description: string
  paypalLink?: string
  noteMessage?: string
  variant?: "stud" | "puppy"
}

// Set your PayPal.me URL here — or swap for a PayPal hosted button link
const PAYPAL_ME_URL = "https://www.paypal.com/paypalme/YourPayPalUsername"

export function PayPalDepositButton({
  label,
  description,
  paypalLink = PAYPAL_ME_URL,
  noteMessage,
  variant = "puppy",
}: PayPalDepositButtonProps) {
  const gradientClasses = variant === "stud"
    ? "from-primary to-primary/70"
    : "from-accent to-accent/60"

  const shadowClasses = variant === "stud"
    ? "shadow-primary/30"
    : "shadow-accent/30"

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
      {/* Colored header bar */}
      <div className={`bg-gradient-to-r ${gradientClasses} p-5 flex items-center gap-3`}>
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-0.5">Secure Deposit</p>
          <p className="text-white text-lg font-black leading-tight">{label}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 flex-1">{description}</p>

        {noteMessage && (
          <div className="bg-primary/8 border border-primary/20 rounded-xl p-3 mb-5">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="font-black text-primary">Important: </span>{noteMessage}
            </p>
          </div>
        )}

        <Button
          asChild
          className={`w-full bg-gradient-to-r ${gradientClasses} !text-white font-black py-6 text-base sm:text-lg rounded-xl hover:opacity-90 transition-all shadow-xl ${shadowClasses} border-0 mb-4`}
        >
          <Link href={paypalLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 shrink-0">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.312 2.42 1.073 4.248-.061.547-.185 1.104-.373 1.67v.046c-.727 2.338-2.397 3.824-4.92 4.382-.808.178-1.677.25-2.556.25H9.77c-.694 0-1.276.594-1.386 1.275l-.023.142-.568 3.605-.021.124a.645.645 0 0 1-.636.584z" />
            </svg>
            Pay with PayPal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> SSL Secure</div>
          <div className="flex items-center gap-1"><Shield className="w-3 h-3" /> Protected</div>
          <div className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> All Cards</div>
        </div>
      </div>
    </div>
  )
}
