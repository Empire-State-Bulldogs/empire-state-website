/**
 * Currently available puppies.
 *
 * Add, remove, or edit entries here and the homepage section, the /puppies page,
 * the gallery, and the JSON-LD all update together.
 *
 * When a puppy is reserved or placed, either set `status` to "reserved" /
 * "placed" or delete the entry. Do not leave a sold puppy listed as available —
 * it wastes serious buyers' time and it is the single fastest way to lose trust.
 *
 * `price` is intentionally left as null: the cards render an "Inquire for Price"
 * CTA instead of inventing a number. Set it to a number (e.g. 6500) to display
 * a real price.
 */

export type PuppyStatus = "available" | "reserved" | "placed"

export type Puppy = {
  id: string
  /** Display name. Color-based until you give each puppy a call name. */
  name: string
  color: string
  coat: string
  /** null renders "Inquire for Price" rather than a made-up figure. */
  price: number | null
  status: PuppyStatus
  photos: { src: string; alt: string }[]
  /** Short honest description — no health or registry claims that aren't verified. */
  blurb: string
}

export const puppies: Puppy[] = [
  {
    id: "black-tan-fluffy",
    name: "Black & Tan Fluffy",
    color: "Black & Tan",
    coat: "Fluffy (long coat)",
    price: null,
    status: "available",
    photos: [
      {
        src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-1.jpg",
        alt: "Black and tan fluffy French Bulldog puppy with tan points lying on grass, available in Albany NY",
      },
      {
        src: "/images/fluffy-french-bulldog-puppy-black-tan-albany-ny-2.jpg",
        alt: "Black and tan long-haired French Bulldog puppy facing the camera, Empire State Bulldogs",
      },
    ],
    blurb:
      "Deep black coat with clean tan points and a full long-haired fluffy coat. Big ears, soft expression, and a calm, people-loving temperament.",
  },
  {
    id: "chocolate-tan-fluffy",
    name: "Chocolate & Tan Fluffy",
    color: "Chocolate & Tan",
    coat: "Fluffy (long coat)",
    price: null,
    status: "available",
    photos: [
      {
        src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-1.jpg",
        alt: "Chocolate and tan fluffy French Bulldog puppy sitting on hardwood floor, available in Albany NY",
      },
      {
        src: "/images/fluffy-french-bulldog-puppy-chocolate-tan-albany-ny-2.jpg",
        alt: "Chocolate fluffy French Bulldog puppy with light tan points sitting upright, Empire State Bulldogs",
      },
    ],
    blurb:
      "Warm chocolate coat with pale tan points and cream paws. Compact, thick-boned, and full of personality — one of the standouts of this litter.",
  },
  {
    id: "lilac-merle-fluffy",
    name: "Lilac Merle Fluffy",
    color: "Lilac Merle",
    coat: "Fluffy (long coat)",
    price: null,
    status: "available",
    photos: [
      {
        src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-1.jpg",
        alt: "Lilac merle fluffy French Bulldog puppy with blue eyes standing on hardwood floor in Albany NY",
      },
      {
        src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-2.jpg",
        alt: "Lilac merle fluffy French Bulldog puppy in profile showing merle coat pattern",
      },
      {
        src: "/images/fluffy-french-bulldog-puppy-lilac-merle-albany-ny-3.jpg",
        alt: "Lilac merle long-haired French Bulldog puppy sitting, Empire State Bulldogs Albany NY",
      },
    ],
    blurb:
      "Rare lilac merle with striking blue eyes and a soft dilute coat. The most distinctive pattern in this litter and the one that moves fastest.",
  },
  {
    id: "chocolate-fluffy",
    name: "Chocolate Fluffy",
    color: "Chocolate",
    coat: "Fluffy (long coat)",
    price: null,
    status: "available",
    photos: [
      {
        src: "/images/fluffy-french-bulldog-puppy-chocolate-albany-ny-1.jpg",
        alt: "Rich chocolate fluffy French Bulldog puppy lying on grass with tongue out, available in Albany NY",
      },
    ],
    blurb:
      "Rich, saturated chocolate coat with a fluffy texture and a big personality to match. Playful, confident, and great with people.",
  },
]

/** Everything currently listed as available. */
export const availablePuppies = puppies.filter((p) => p.status === "available")

/** Flat list of every puppy photo — used by the gallery pages. */
export const allPuppyPhotos = puppies.flatMap((p) => p.photos)
