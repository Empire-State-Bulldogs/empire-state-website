import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, Geist_Mono } from "next/font/google"
import "./globals.css"
import { MusicProvider } from "@/context/music-context"

const _outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Empire State Bulldogs | Premier French Bulldog Breeder & Lifestyle Brand in Albany, NY",
    template: "%s | Empire State Bulldogs",
  },
  description:
    "Empire State Bulldogs is your premier nationwide French Bulldog breeder based in Albany, NY. Specializing in healthy, AKC-registered Frenchies: Fluffy, Isabella, Rojo, Merle, Lilac, Big Rope, New Shade, and Testable Chocolate. World-class stud services, thick bone structure, perfect genetics, and flight nanny shipping available across the US.",
  keywords: [
    // Core terms
    "french bulldog puppies", "frenchie puppies for sale", "french bulldog breeder", "french bulldog stud service",
    // Colors & DNA Lingo
    "blue french bulldog", "lilac french bulldog", "isabella frenchie", "fluffy french bulldog", "merle french bulldog", 
    "rojo french bulldog", "new shade french bulldog", "testable chocolate frenchie", "big rope french bulldog", "platinum french bulldog", "blue fawn frenchie",
    // Quality & Genetics
    "thick bone french bulldog", "AKC french bulldog", "exotic frenchie breeder", "quality french bulldog genetics", "health tested french bulldogs", "champion bloodline frenchie", "short back frenchie", "compact french bulldog",
    // Locations - Tight Radius
    "french bulldog breeder NY", "french bulldog puppies Albany", "french bulldogs NYC", "french bulldog breeder New Jersey", "french bulldogs Pennsylvania", "french bulldogs Connecticut", "french bulldogs Massachusetts", "french bulldogs tristate",
    // Nationwide Services
    "nationwide french bulldog breeder", "flight nanny frenchie puppies", "french bulldogs shipped", "frenchie puppies Los Angeles", "frenchie puppies Miami", "frenchie puppies Texas", "frenchie puppies Atlanta",
    // Brand
    "premium french bulldog studs", "Empire State Bulldogs", "King Simba stud"
  ],
  authors: [{ name: "Empire State Bulldogs" }],
  creator: "Empire State Bulldogs",
  publisher: "Empire State Bulldogs",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.empirestatebulldogs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Empire State Bulldogs | Premier French Bulldog Breeder & Lifestyle Brand",
    description:
      "Discover stud services, healthy French Bulldog puppies, and a vibrant dog lifestyle community in Albany, NY. Contact us today!",
    url: "https://www.empirestatebulldogs.com",
    siteName: "Empire State Bulldogs",
    images: [
      {
        url: "/images/socialsharing.jpg",
        width: 1200,
        height: 630,
        alt: "Empire State Bulldogs - Premier French Bulldog Breeder",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empire State Bulldogs | Premier Frenchie Breeder",
    description:
      "World-class French Bulldog puppies and stud services. AKC registered, health tested, and family raised.",
    images: ["/images/socialsharing.jpg"],
    creator: "@Empire_State_Bulldogs",
    site: "@Empire_State_Bulldogs",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "pets",
  generator: "v0.app",
  referrer: "strict-origin-when-cross-origin",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="msapplication-TileColor" content="#1a1035" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-title" content="Empire State Bulldogs" />

        {/* Anti-cache meta tags */}
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Empire State Bulldogs",
              founder: {
                "@type": "Person",
                name: "Vaughn"
              },
              url: "https://www.empirestatebulldogs.com",
              logo: "https://www.empirestatebulldogs.com/images/logo.png",
              description:
                "Premier French Bulldog breeder and lifestyle brand offering quality puppies, stud services, and community in Albany, NY.",
              sameAs: [
                "https://www.instagram.com/bankroll_bop93/",
                "https://www.tiktok.com/@bankrollbop",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["en"],
              },
            }),
          }}
        />

        {/* Local Business Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "LocalBusiness",
              "@id": "https://www.empirestatebulldogs.com",
              name: "Empire State Bulldogs",
              founder: {
                "@type": "Person",
                name: "Vaughn"
              },
              image: "https://www.empirestatebulldogs.com/images/socialsharing.jpg",
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
              areaServed: [
                {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 42.6526,
                    longitude: -73.7562,
                  },
                  geoRadius: "500 miles",
                },
                {
                  "@type": "Country",
                  name: "United States"
                }
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "09:00",
                closes: "18:00",
              },
              knowsAbout: ["French Bulldog Breeder", "Stud Services", "Dog Shows", "Pet Lifestyle"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "French Bulldog Puppies & Stud Services",
              provider: {
                "@type": "LocalBusiness",
                name: "Empire State Bulldogs",
                url: "https://www.empirestatebulldogs.com",
              },
              description:
                "Professional French Bulldog breeding services offering healthy puppies with health guarantees and premium stud services including King Simba.",
              areaServed: [
                {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 42.6526,
                    longitude: -73.7562,
                  },
                  geoRadius: "500 miles",
                },
                {
                  "@type": "Country",
                  name: "United States"
                }
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Empire State Bulldogs Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "French Bulldog Puppies for Sale",
                      description: "Healthy, vaccinated French Bulldog puppies with health guarantees",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Stud Services",
                      description: "Professional French Bulldog stud services featuring King Simba and others",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${_outfit.variable} font-sans antialiased`}>
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  )
}
