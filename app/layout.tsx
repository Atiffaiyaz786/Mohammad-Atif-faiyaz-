import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PlayJunction - Affordable PC Games | Best Gaming Deals Online",
  description:
    "Discover premium PC games at affordable prices. Shop the latest AAA titles, indie games, and classic favorites with huge discounts. Your gaming journey starts at PlayJunction.",
  keywords:
    "PC games, affordable games, gaming deals, video games, steam games, digital games, game store, gaming marketplace, cheap games, game discounts",
  authors: [{ name: "PlayJunction Team" }],
  creator: "PlayJunction",
  publisher: "PlayJunction",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playjunction.com",
    siteName: "PlayJunction",
    title: "PlayJunction - Affordable PC Games | Best Gaming Deals Online",
    description:
      "Discover premium PC games at affordable prices. Shop the latest AAA titles, indie games, and classic favorites with huge discounts.",
    images: [
      {
        url: "https://playjunction.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlayJunction - Affordable PC Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayJunction - Affordable PC Games",
    description: "Discover premium PC games at affordable prices. Your gaming journey starts here.",
    images: ["https://playjunction.com/og-image.jpg"],
    creator: "@playjunction",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://playjunction.com",
  },
  generator: "Next.js",
  applicationName: "PlayJunction",
  referrer: "origin-when-cross-origin",
  category: "Gaming",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="google-site-verification" content="your-google-verification-code" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PlayJunction",
              url: "https://playjunction.com",
              logo: "https://playjunction.com/logo.png",
              description: "Premium PC games at affordable prices",
              sameAs: [
                "https://twitter.com/playjunction",
                "https://facebook.com/playjunction",
                "https://instagram.com/playjunction",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-GAMES",
                contactType: "customer service",
              },
            }),
          }}
        />

        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PlayJunction",
              url: "https://playjunction.com",
              description: "Discover premium PC games at affordable prices",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://playjunction.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-950 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
