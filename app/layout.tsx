import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ServiceWorkerRegistration } from "@/components/service-worker-registration"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "PlayJunction - Affordable PC Games Store",
    template: "%s | PlayJunction",
  },
  description:
    "Discover the best PC games at unbeatable prices. PlayJunction offers instant digital delivery, secure payments, and 24/7 customer support.",
  keywords: ["PC games", "digital games", "game store", "affordable games", "instant download", "gaming"],
  authors: [{ name: "PlayJunction Team" }],
  creator: "PlayJunction",
  publisher: "PlayJunction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://playjunction.vercel.app"),
  alternates: {
    canonical: "https://playjunction.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playjunction.vercel.app",
    siteName: "PlayJunction",
    title: "PlayJunction - Affordable PC Games Store",
    description: "Discover the best PC games at unbeatable prices with instant digital delivery.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=PlayJunction",
        width: 1200,
        height: 630,
        alt: "PlayJunction - Affordable PC Games Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayJunction - Affordable PC Games Store",
    description: "Discover the best PC games at unbeatable prices with instant digital delivery.",
    images: ["/placeholder.svg?height=630&width=1200&text=PlayJunction"],
    creator: "@playjunction",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PlayJunction" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="min-h-screen bg-gray-950 text-white">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Suspense>
          <Analytics />
          <ServiceWorkerRegistration />
        </ThemeProvider>
      </body>
    </html>
  )
}
