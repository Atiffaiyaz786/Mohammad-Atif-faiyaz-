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
  title: "PlayJunction - Premium PC Games at Affordable Prices",
  description:
    "Discover the best PC games at PlayJunction. Huge discounts on AAA titles, indie games, and classics. Fast delivery, secure payments.",
  keywords: "PC games, affordable gaming, video game deals, digital games, steam alternatives, gaming marketplace",
  authors: [{ name: "PlayJunction Team" }],
  creator: "PlayJunction",
  publisher: "PlayJunction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://playjunction.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playjunction.com",
    title: "PlayJunction - Premium PC Games at Affordable Prices",
    description: "Discover the best PC games at PlayJunction. Huge discounts on AAA titles, indie games, and classics.",
    siteName: "PlayJunction",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayJunction - Premium PC Games at Affordable Prices",
    description: "Discover the best PC games at PlayJunction. Huge discounts on AAA titles, indie games, and classics.",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="min-h-screen bg-gray-950 text-white">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
            <Analytics />
            <ServiceWorkerRegistration />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
