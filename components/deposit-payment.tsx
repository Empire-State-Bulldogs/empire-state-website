"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, Check, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  PAYMENT_HANDLES,
  CASHAPP_CONFIGURED,
  VENMO_CONFIGURED,
  DEPOSIT_AMOUNT,
} from "@/lib/stud-data"

interface DepositPaymentProps {
  /** Which service path this deposit is for — goes in the payment note. */
  serviceName: string
}

/**
 * Cash App + Venmo deposit buttons.
 *
 * Both handles live in lib/stud-data.ts. Until one is filled in, its button
 * routes to the contact page rather than to a dead deep link, so a deposit can
 * never land in an account that isn't ours.
 *
 * Copy note: this is deliberately framed as a booking fee for a scheduled
 * service, not as buying an animal — see the terms line at the bottom.
 */
export function DepositPayment({ serviceName }: DepositPaymentProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (value: string, key: string) => {
    navigator.clipboard.writeText(value)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const note = `Stud service booking deposit - ${serviceName}`
  const cashAppUrl = `https://cash.app/$${PAYMENT_HANDLES.cashtag}/${DEPOSIT_AMOUNT}`
  const venmoUrl = `https://venmo.com/${PAYMENT_HANDLES.venmo}?txn=pay&amount=${DEPOSIT_AMOUNT}&note=${encodeURIComponent(note)}`

  const anyConfigured = CASHAPP_CONFIGURED || VENMO_CONFIGURED

  return (
    <div className="border-t border-border pt-6 mt-6">
      <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">
        Send the ${DEPOSIT_AMOUNT} Deposit
      </p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        Reserves your slot in King Simba&apos;s book.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-4 items-stretch">
        {/* ── Cash App ── */}
        <div className="rounded-xl border border-border bg-background p-4 flex flex-col">
          <Button
            asChild
            className="w-full h-auto min-h-14 bg-[#00D64F] hover:bg-[#00D64F]/90 !text-black font-black rounded-xl px-5 py-4 border-0 mb-2.5 text-sm sm:text-base whitespace-normal"
          >
            <Link
              href={CASHAPP_CONFIGURED ? cashAppUrl : "/contact/"}
              {...(CASHAPP_CONFIGURED ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-lg font-black shrink-0">$</span>
              <span className="leading-tight">{CASHAPP_CONFIGURED ? "Cash App" : "Request Cash App"}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </Button>
          {CASHAPP_CONFIGURED ? (
            <button
              onClick={() => copy(`$${PAYMENT_HANDLES.cashtag}`, "cash")}
              className="w-full flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors py-1 group"
            >
              <span className="font-mono select-all break-all">${PAYMENT_HANDLES.cashtag}</span>
              {copied === "cash" ? (
                <Check className="w-3 h-3 text-green-500 shrink-0" />
              ) : (
                <Copy className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100" />
              )}
            </button>
          ) : (
            <p className="text-center text-xs text-muted-foreground py-1">Handle provided on inquiry</p>
          )}
        </div>

        {/* ── Venmo ── */}
        <div className="rounded-xl border border-border bg-background p-4 flex flex-col">
          <Button
            asChild
            className="w-full h-auto min-h-14 bg-[#008CFF] hover:bg-[#008CFF]/90 !text-white font-black rounded-xl px-5 py-4 border-0 mb-2.5 text-sm sm:text-base whitespace-normal"
          >
            <Link
              href={VENMO_CONFIGURED ? venmoUrl : "/contact/"}
              {...(VENMO_CONFIGURED ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-center gap-2"
            >
              <span className="leading-tight">{VENMO_CONFIGURED ? "Venmo" : "Request Venmo"}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </Button>
          {VENMO_CONFIGURED ? (
            <button
              onClick={() => copy(`@${PAYMENT_HANDLES.venmo}`, "venmo")}
              className="w-full flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors py-1 group"
            >
              <span className="font-mono select-all break-all">@{PAYMENT_HANDLES.venmo}</span>
              {copied === "venmo" ? (
                <Check className="w-3 h-3 text-green-500 shrink-0" />
              ) : (
                <Copy className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100" />
              )}
            </button>
          ) : (
            <p className="text-center text-xs text-muted-foreground py-1">Handle provided on inquiry</p>
          )}
        </div>
      </div>

      {/* What to put in the note */}
      <div className="bg-primary/8 border border-primary/20 rounded-xl p-3 mb-3">
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <span className="font-black text-primary">Put in the payment note: </span>
          your name, your dam&apos;s name, and <span className="font-bold text-foreground">{serviceName}</span>.
        </p>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed flex gap-1.5">
        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
        <span>
          {anyConfigured
            ? "Deposits are confirmed manually. Once yours clears we email your stud contract — usually the same day."
            : "Call or text 518-917-3429 and we'll send you the deposit details. Once it clears we email your stud contract."}{" "}
          The ${DEPOSIT_AMOUNT} is a non-refundable booking fee that reserves a scheduled service appointment and is
          credited toward your stud fee. It holds a slot in the book; it does not guarantee a pregnancy.
        </span>
      </p>
    </div>
  )
}
