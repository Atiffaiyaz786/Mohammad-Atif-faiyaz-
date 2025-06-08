import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PlayJunction - Best PC Games at Affordable Prices | Gaming Store",
  description:
    "PlayJunction is your ultimate destination for affordable PC games. Shop the latest AAA titles, indie games, and classic favorites with huge discounts up to 70% off. Fast digital delivery, secure payments, and 24/7 customer support.",
  keywords: [
    "PlayJunction",
    "PC games",
    "affordable games",
    "gaming deals",
    "video games",
    "steam games",
    "digital games",
    "game store",
    "gaming marketplace",
    "cheap games",
    "game discounts",
    "Cyberpunk 2077",
    "GTA V",
    "Elden Ring",
    "gaming platform",
    "online game store",
  ].join(", "),
  authors: [{ name: "PlayJunction Team", url: "https://playjunction.com" }],
  creator: "PlayJunction",
  publisher: "PlayJunction",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playjunction.com",
    siteName: "PlayJunction",
    title: "PlayJunction - Best PC Games at Affordable Prices",
    description:
      "Discover premium PC games at unbeatable prices. Shop AAA titles, indie games, and classics with discounts up to 70% off. Fast delivery, secure payments.",
    images: [
      {
        url: "https://playjunction.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlayJunction - Affordable PC Games Store",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayJunction - Best PC Games at Affordable Prices",
    description: "Shop premium PC games with discounts up to 70% off. Fast delivery, secure payments, 24/7 support.",
    images: ["https://playjunction.com/og-image.jpg"],
    creator: "@playjunction",
    site: "@playjunction",
  },
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://playjunction.com",
    languages: {
      "en-US": "https://playjunction.com",
    },
  },
  category: "Gaming",
  classification: "Gaming Store",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://playjunction.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Enhanced SEO Meta Tags */}
        <meta name="application-name" content="PlayJunction" />
        <meta name="apple-mobile-web-app-title" content="PlayJunction" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="123 Gaming Street" />
        <meta name="business:contact_data:locality" content="Tech City" />
        <meta name="business:contact_data:region" content="TC" />
        <meta name="business:contact_data:postal_code" content="12345" />
        <meta name="business:contact_data:country_name" content="United States" />

        {/* Enhanced Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://playjunction.com/#organization",
              name: "PlayJunction",
              alternateName: "Play Junction",
              url: "https://playjunction.com",
              logo: {
                "@type": "ImageObject",
                url: "https://playjunction.com/logo.png",
                width: 512,
                height: 512,
              },
              description: "Premium PC games at affordable prices with fast digital delivery",
              foundingDate: "2024",
              slogan: "Your Gaming Journey Starts Here",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-555-GAMES",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  email: "support@playjunction.com",
                  contactType: "customer support",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Gaming Street",
                addressLocality: "Tech City",
                addressRegion: "TC",
                postalCode: "12345",
                addressCountry: "US",
              },
              sameAs: [
                "https://twitter.com/playjunction",
                "https://facebook.com/playjunction",
                "https://instagram.com/playjunction",
                "https://youtube.com/playjunction",
                "https://discord.gg/playjunction",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "PC Games Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "PC Games",
                      category: "Video Games",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Enhanced Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://playjunction.com/#website",
              url: "https://playjunction.com",
              name: "PlayJunction",
              alternateName: "Play Junction",
              description: "Premium PC games at affordable prices",
              publisher: {
                "@id": "https://playjunction.com/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://playjunction.com/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "en-US",
            }),
          }}
        />

        {/* Store Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "PlayJunction",
              description: "Online store for PC games at affordable prices",
              url: "https://playjunction.com",
              telephone: "+1-555-GAMES",
              email: "support@playjunction.com",
              currenciesAccepted: "USD",
              paymentAccepted: ["Credit Card", "PayPal", "Cryptocurrency"],
              priceRange: "$5-$70",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "PC Games",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "PC Video Games",
                      applicationCategory: "Game",
                      operatingSystem: "Windows",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-950 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main role="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
