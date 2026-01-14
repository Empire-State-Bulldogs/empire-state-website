import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono, Bebas_Neue } from "next/font/google"
import "./globals.css"

const _bebasNeue = Bebas_Neue({
  weight: "400",
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
    "Empire State Bulldogs is New York's premier French Bulldog breeder. Quality AKC Frenchie puppies for sale, world-class stud services featuring King Simba, and a passionate community of exotic Frenchie lovers.",
  keywords: [
    "french bulldog puppies", "frenchie puppies for sale", "french bulldog breeder", "french bulldog stud service",
    "blue french bulldog", "lilac french bulldog", "isabella frenchie", "fluffy french bulldog", "merle french bulldog",
    "french bulldog breeder NY", "french bulldog puppies Albany", "AKC french bulldog", "exotic frenchie breeder",
    "premium french bulldog studs", "Empire State Bulldogs", "King Simba stud", "quality french bulldog genetics"
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
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/logomain.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="msapplication-TileColor" content="#1a1035" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        <meta name="apple-mobile-web-app-title" content="Empire State Bulldogs" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Empire State Bulldogs",
              url: "https://www.empirestatebulldogs.com",
              logo: "https://www.empirestatebulldogs.com/images/logomain.png",
              description:
                "Premier French Bulldog breeder and lifestyle brand offering quality puppies, stud services, and community in Albany, NY.",
              sameAs: [
                "https://www.facebook.com/EmpireStateBulldogs",
                "https://www.instagram.com/EmpireStateBulldogs",
                "https://x.com/Empire_State_Bulldogs",
                "https://www.tiktok.com/@EmpireStateBulldogs",
                "https://www.youtube.com/@EmpireStateBulldogs",
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
              areaServed: {
                "@type": "GeoShape",
                box: "40.5795 -76.2592 45.0152 -71.0801",
              },
              priceRange: "$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 42.6526,
                  longitude: -73.7562,
                },
                geoRadius: "500 miles",
              },
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
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 42.6526,
                  longitude: -73.7562,
                },
                geoRadius: "500 miles",
              },
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
