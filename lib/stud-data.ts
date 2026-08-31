/**
 * King Simba — stud service configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO EDIT THIS FILE
 * ─────────────────────────────────────────────────────────────────────────────
 * Everything the /studs/king-simba/ page displays lives here. Change a value in
 * this file and the page, the JSON-LD, and the payment links all update together.
 *
 * Any entry with `placeholder: true` is NOT yet confirmed by lab paperwork. Those
 * render on the page with a visible "Pending" chip so nobody mistakes an assumed
 * value for a documented one. Once you have the Embark/Animal Genetics report and
 * the OFA/vet clearances in hand, set the real `result` and flip
 * `placeholder` to false.
 */

// ─────────────────────────────────────────────────────────────────────────────
// PAYMENT HANDLES — FILL THESE IN
// ─────────────────────────────────────────────────────────────────────────────
// Enter the Cash App $cashtag WITHOUT the leading "$", and the Venmo username
// WITHOUT the leading "@".
//
//   e.g.  cashtag: "EmpireStateBulldogs"   →  https://cash.app/$EmpireStateBulldogs/500
//         venmo:   "Empire-State-Bulldogs" →  https://venmo.com/Empire-State-Bulldogs?txn=pay...
//
// While either is left as the empty string below, that payment button
// deliberately routes to the contact page instead of a dead or wrong link, so a
// deposit can never be sent to an account that isn't yours.
export const PAYMENT_HANDLES = {
  cashtag: "",
  venmo: "",
} as const

export const CASHAPP_CONFIGURED = PAYMENT_HANDLES.cashtag.trim().length > 0
export const VENMO_CONFIGURED = PAYMENT_HANDLES.venmo.trim().length > 0

/** The non-refundable booking deposit, in whole US dollars. */
export const DEPOSIT_AMOUNT = 500

// ─────────────────────────────────────────────────────────────────────────────
// THE STUD
// ─────────────────────────────────────────────────────────────────────────────
export const stud = {
  name: "King Simba",
  tagline: "Flagship French Bulldog Stud",
  /** Breed as advertised. Drives page copy, metadata, and JSON-LD. */
  breed: "French Bulldog",
  location: "Albany, New York",
  photos: [
    { src: "/images/simba1.jpg", alt: "King Simba, lilac French Bulldog stud, sitting on grass in Albany NY" },
    { src: "/images/simba2.jpg", alt: "King Simba French Bulldog stud showing head structure and rope" },
    { src: "/images/simba3.jpg", alt: "King Simba stacked on show turf showing thick bone and compact build" },
    { src: "/images/simba4.jpg", alt: "King Simba lilac French Bulldog stud profile view" },
    { src: "/images/simba5.jpg", alt: "King Simba handled at the Liberty State Dog Show" },
  ],
} as const

/** Hero stat grid. Anything unconfirmed is flagged and shows a Pending chip. */
export const studStats = [
  { label: "Registry", value: "AKC", placeholder: true },
  { label: "Color", value: "Lilac Fawn", placeholder: true },
  { label: "Weight", value: "55 lbs", placeholder: true },
  { label: "Height", value: "15 in", placeholder: true },
  { label: "Date of Birth", value: "—", placeholder: true },
  { label: "Proven", value: "Yes — multiple litters", placeholder: true },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// DNA COLOR PANEL
// ─────────────────────────────────────────────────────────────────────────────
export const dnaPanel = [
  { locus: "A (Base / Tan Point)", result: "at/at", note: "Carries tan point", placeholder: true },
  { locus: "co (Cocoa)", result: "n/co", note: "Carries one copy of cocoa", placeholder: true },
  { locus: "b (Testable Chocolate)", result: "n/b", note: "Carries testable chocolate", placeholder: true },
  { locus: "d (Dilute)", result: "d/d", note: "Dilute — expresses blue/lilac", placeholder: true },
  { locus: "I (Intensity)", result: "n/I", note: "Affects red pigment intensity", placeholder: true },
  { locus: "M (Merle)", result: "n/n", note: "Not a merle carrier", placeholder: true },
  { locus: "s (Pied / Piebald)", result: "n/s", note: "Carries piebald", placeholder: true },
  { locus: "Fluffy (L / FGF5)", result: "n/L4", note: "Carries long coat", placeholder: true },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// HEALTH CLEARANCES
// ─────────────────────────────────────────────────────────────────────────────
export const healthClearances = [
  { test: "DM (Degenerative Myelopathy)", result: "Clear", note: "N/N — will not produce affected", placeholder: true },
  { test: "HUU (Hyperuricosuria)", result: "Clear", note: "N/N", placeholder: true },
  { test: "JHC (Juvenile Hereditary Cataract)", result: "Clear", note: "N/N", placeholder: true },
  { test: "CMR1 (Canine Multifocal Retinopathy)", result: "Clear", note: "N/N", placeholder: true },
  { test: "Cardiac", result: "Normal", note: "Evaluated by licensed veterinarian", placeholder: true },
  { test: "Patella", result: "Normal", note: "Bilateral, no luxation observed", placeholder: true },
  { test: "Brucellosis", result: "Negative", note: "Retested on a rolling schedule", placeholder: true },
  { test: "Semen Motility", result: "—", note: "Fresh evaluation at collection", placeholder: true },
] as const

/** True when anything above is still unconfirmed, so the page can show the disclaimer. */
export const hasPlaceholderResults =
  dnaPanel.some((d) => d.placeholder) ||
  healthClearances.some((h) => h.placeholder) ||
  studStats.some((s) => s.placeholder)

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PATHS
// ─────────────────────────────────────────────────────────────────────────────
export type ServicePath = {
  id: "shipped" | "live-cover"
  name: string
  shortName: string
  summary: string
  dueToday: string
  balanceDue: string
  balanceTiming: string
  buyerCovers: string[]
  steps: string[]
}

export const servicePaths: ServicePath[] = [
  {
    id: "shipped",
    name: "Shipped — Breeder Box",
    shortName: "Shipped",
    summary:
      "We collect with a reproductive veterinarian and overnight a chilled Breeder Box to your repro vet. Best option if you are outside driving distance.",
    dueToday: `$${DEPOSIT_AMOUNT} deposit`,
    balanceDue: "Remaining stud fee",
    balanceTiming: "Paid in full BEFORE the box ships",
    buyerCovers: [
      "Reproductive vet collection fee",
      "Overnight shipping both directions",
      "Your own vet's insemination and progesterone costs",
    ],
    steps: [
      "Send the deposit to reserve your slot in the book.",
      "Return the signed contract with your dam's health testing and DNA panel.",
      "Your repro vet runs progesterone and tells us the collection day.",
      "Pay the remaining balance in full — the box does not ship before it clears.",
      "We collect and overnight the chilled Breeder Box to your vet's clinic.",
      "Your vet inseminates on the timed window and confirms receipt.",
    ],
  },
  {
    id: "live-cover",
    name: "Live Cover — In Person",
    shortName: "Live Cover",
    summary:
      "You travel to us in Albany, NY with your dam for a natural, supervised breeding across the timed window.",
    dueToday: `$${DEPOSIT_AMOUNT} deposit`,
    balanceDue: "Remaining stud fee",
    balanceTiming: "Paid in full BEFORE breeding takes place",
    buyerCovers: [
      "Your travel and accommodation",
      "Your own vet's progesterone testing",
      "Any boarding if you leave the dam with us",
    ],
    steps: [
      "Send the deposit to reserve your slot in the book.",
      "Return the signed contract with your dam's health testing and DNA panel.",
      "Your repro vet runs progesterone and we set the breeding dates together.",
      "Pay the remaining balance in full — breeding does not happen before it clears.",
      "Travel to Albany, NY for the scheduled window.",
      "Supervised live cover, typically across two ties.",
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// BREEDER BOX CONTENTS
// ─────────────────────────────────────────────────────────────────────────────
export const breederBoxContents = [
  "Insulated foam cooler",
  "Three-tube foam cavity insert",
  "Nordic ice pack",
  "2× 15ml capped transport tubes",
  "2× 10ml syringes",
  '2× 10" pipettes',
  "2× lubricating jelly packs",
  "2× disposable nitrile gloves",
] as const

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────────────────────────────────────
export const processSteps = [
  {
    num: "01",
    title: "Deposit",
    desc: `A $${DEPOSIT_AMOUNT} non-refundable booking fee reserves your slot in Simba's book. Slots are held in the order deposits clear.`,
  },
  {
    num: "02",
    title: "Paperwork",
    desc: "Signed stud contract, your dam's health testing, her DNA color panel, and a current brucellosis test. Nothing is scheduled until this is complete.",
  },
  {
    num: "03",
    title: "Timing",
    desc: "We breed on real progesterone numbers from your reproductive vet — not on day counts, not on guesses. Send us the values as they come in and we set the window together.",
  },
  {
    num: "04",
    title: "Breed",
    desc: "Live cover in Albany, or a chilled Breeder Box overnighted to your vet. Balance is paid in full before either happens.",
  },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// FAQ  (also emitted as FAQPage JSON-LD)
// ─────────────────────────────────────────────────────────────────────────────
export const studFaq = [
  {
    q: "How much is the stud fee?",
    a: `The stud fee depends on the service path and your dam's pedigree, and is quoted when you inquire. A $${DEPOSIT_AMOUNT} non-refundable booking fee reserves your slot, and the remaining balance is paid in full before we ship a Breeder Box or before a live cover takes place. Call or text 518-917-3429 for a current quote.`,
  },
  {
    q: `Is the $${DEPOSIT_AMOUNT} deposit refundable?`,
    a: `No. The $${DEPOSIT_AMOUNT} deposit is a non-refundable booking fee. It takes a slot out of Simba's book and off the table for other breeders, so it is not returned if you change your mind or your plans change. It is credited toward your total stud fee.`,
  },
  {
    q: "What is a Breeder Box and how does shipped semen work?",
    a: 'A Breeder Box is an insulated chilled-shipment kit. We collect with a reproductive veterinarian, extend and cool the sample, pack it in an insulated foam cooler with a three-tube cavity insert and a Nordic ice pack, and overnight it to your vet\'s clinic. The box includes 2× 15ml capped transport tubes, 2× 10ml syringes, 2× 10" pipettes, 2× lubricating jelly packs, and 2× disposable nitrile gloves. Your vet inseminates on the window your progesterone numbers indicate. Shipped semen must be used the day it lands.',
  },
  {
    q: "What health testing and DNA results does King Simba have?",
    a: "Simba's DNA color panel and health clearances are published on this page, covering DM, HUU, JHC, CMR1, cardiac, patella, brucellosis, and semen motility. Values still awaiting final lab documentation are marked Pending on the page rather than being stated as confirmed. We send the full reports to every booked breeder before breeding.",
  },
  {
    q: "What do I need to send you?",
    a: "Your dam's health testing, her DNA color panel, a current negative brucellosis test, progesterone timing from your reproductive vet, and the signed stud contract. We do not schedule a breeding until all of it is in hand.",
  },
  {
    q: "What happens if my dam misses?",
    a: "If your dam does not conceive and your reproductive veterinarian documents the miss, you get one free repeat breeding the following season. To be clear about what you are paying for: the deposit guarantees your slot in the book and that repeat service — it does not guarantee a pregnancy or a litter size. No breeder can honestly promise conception.",
  },
] as const
