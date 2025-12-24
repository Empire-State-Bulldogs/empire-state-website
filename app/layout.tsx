import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Empire State Bulldogs | Premier French Bulldog Breeder in Albany, NY",
    template: "%s | Empire State Bulldogs",
  },
  description:
    "Empire State Bulldogs is New York's premier French Bulldog breeder and lifestyle brand based in Albany, NY. We offer top-quality French Bulldog puppies, professional stud services featuring King Simba, and a passionate community of dog lovers. Serving customers within 500 miles of Albany including NYC, Boston, Philadelphia, and beyond.",
  keywords: [
    "French Bulldog breeder",
    "French Bulldog puppies for sale",
    "French Bulldog stud service",
    "Albany NY dog breeder",
    "New York French Bulldog",
    "Frenchie puppies NY",
    "Empire State Bulldogs",
    "King Simba stud",
    "French Bulldog Albany",
    "NYC French Bulldog breeder",
    "upstate New York dog breeder",
    "French Bulldog puppies near me",
    "AKC French Bulldog",
    "healthy French Bulldog puppies",
    "French Bulldog health guarantee",
    "professional dog breeder NY",
    "French Bulldog lifestyle brand",
    "dog shows New York",
    "French Bulldog community",
    "premium French Bulldog breeder",
  ],
  authors: [{ name: "Empire State Bulldogs" }],
  creator: "Empire State Bulldogs",
  publisher: "Empire State Bulldogs",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://empirestatebulldogs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Empire State Bulldogs | Premier French Bulldog Breeder in Albany, NY",
    description:
      "New York's premier French Bulldog breeder and lifestyle brand. Quality puppies, professional stud services, and a passionate community of dog lovers.",
    url: "https://empirestatebulldogs.com",
    siteName: "Empire State Bulldogs",
    images: [
      {
        url: "/images/socialsharing.jpg",
        width: 1200,
        height: 630,
        alt: "Empire State Bulldogs - Premier French Bulldog Breeder in New York",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empire State Bulldogs | Premier French Bulldog Breeder",
    description: "New York's premier French Bulldog breeder and lifestyle brand based in Albany, NY.",
    images: ["/images/socialsharing.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/logomain.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/logomain.png",
    apple: "/images/logomain.png",
  },
  category: "pets",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1035",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Empire State Bulldogs",
              image: "/images/logomain.png",
              description:
                "Premier French Bulldog breeder and lifestyle brand in Albany, NY. Quality puppies, professional stud services, and a passionate community.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albany",
                addressRegion: "NY",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.6526,
                longitude: -73.7562,
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 42.6526,
                  longitude: -73.7562,
                },
                geoRadius: "500 mi",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
