import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GameCard } from "@/components/game-card"
import { FeaturedGames } from "@/components/featured-games"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PlayJunction - Premium PC Games at Unbeatable Prices | Gaming Store",
  description:
    "Welcome to PlayJunction! Discover the best PC games at affordable prices. Shop Cyberpunk 2077, GTA V, Elden Ring, and more with discounts up to 70% off. Fast digital delivery, secure payments, and excellent customer support.",
  keywords:
    "PlayJunction, PC games store, affordable gaming, video game deals, digital games, steam alternatives, gaming marketplace, cheap PC games, game discounts, online game store",
  openGraph: {
    title: "PlayJunction - Premium PC Games at Unbeatable Prices",
    description:
      "Shop the best PC games at PlayJunction. Huge discounts on AAA titles, indie games, and classics. Fast delivery, secure payments.",
    url: "https://playjunction.com",
    type: "website",
    images: [
      {
        url: "https://playjunction.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "PlayJunction Homepage - PC Games Store",
      },
    ],
  },
  alternates: {
    canonical: "https://playjunction.com",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://playjunction.com/#webpage",
    url: "https://playjunction.com",
    name: "PlayJunction - Premium PC Games at Unbeatable Prices",
    description:
      "Welcome to PlayJunction! Discover the best PC games at affordable prices with discounts up to 70% off.",
    isPartOf: {
      "@id": "https://playjunction.com/#website",
    },
    about: {
      "@id": "https://playjunction.com/#organization",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Featured PC Games",
      description: "Top-rated PC games available at PlayJunction",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "Cyberpunk 2077",
            url: "https://playjunction.com/games/cyberpunk-2077",
            offers: {
              "@type": "Offer",
              price: "29.99",
              priceCurrency: "USD",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "Grand Theft Auto V",
            url: "https://playjunction.com/games/gta-v",
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
            },
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 to-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Welcome to <span className="text-purple-500">PlayJunction</span> - Premium PC Games at{" "}
                    <span className="text-purple-500">Affordable Prices</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Discover the latest AAA titles, indie gems, and classic favorites at PlayJunction. Get unbeatable
                    prices with discounts up to 70% off. Fast digital delivery, secure payments, and 24/7 customer
                    support. Your gaming journey starts here!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/games">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                      Browse Games
                    </Button>
                  </Link>
                  <Link href="/deals">
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-500 hover:bg-purple-950"
                      size="lg"
                    >
                      Today's Deals
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>✓ Instant Digital Delivery</span>
                  <span>✓ Secure Payments</span>
                  <span>✓ 24/7 Support</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 z-10 rounded-lg"></div>
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Gaming setup with multiple monitors and RGB lighting - PlayJunction"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <section className="w-full py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Featured Games at PlayJunction
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our handpicked selection of top PC games at incredible prices. All games include instant
                  digital delivery and lifetime access.
                </p>
              </div>
            </div>
            <FeaturedGames />
          </div>
        </section>

        {/* Mobile Games Section */}
        <section className="w-full py-12 md:py-24 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Free Mobile Games
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download the best free mobile games for Android and iOS. All games are completely free to play!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
              {[
                {
                  id: "bgmi",
                  title: "BGMI",
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp", // Official BGMI cover
                  rating: 4.2,
                  downloads: "100M+",
                },
                {
                  id: "free-fire",
                  title: "Free Fire MAX",
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp", // Official Free Fire cover
                  rating: 4.1,
                  downloads: "500M+",
                },
                {
                  id: "cod-mobile",
                  title: "COD Mobile",
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Official COD Mobile cover
                  rating: 4.3,
                  downloads: "100M+",
                },
                {
                  id: "genshin-impact",
                  title: "Genshin Impact",
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.webp", // Official Genshin Impact cover
                  rating: 4.3,
                  downloads: "100M+",
                },
                {
                  id: "clash-of-clans",
                  title: "Clash of Clans",
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s6x.webp", // Official Clash of Clans cover
                  rating: 4.5,
                  downloads: "500M+",
                },
                {
                  id: "subway-surfers",
                  title: "Subway Surfers",
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Official Subway Surfers cover
                  rating: 4.5,
                  downloads: "1B+",
                },
              ].map((game) => (
                <Link
                  key={game.id}
                  href={`/mobile-games/${game.id}`}
                  className="group relative overflow-hidden rounded-lg bg-gray-700 transition-all hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    FREE
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                      {game.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs text-gray-300">{game.rating}</span>
                      <span className="text-xs text-gray-500">({game.downloads})</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/mobile-games">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                  View All Mobile Games
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose PlayJunction */}
        <section className="w-full py-12 md:py-24 bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                Why Choose PlayJunction?
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl">
                PlayJunction is your trusted partner for affordable PC gaming
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
                <p className="text-gray-400">Up to 70% off on popular PC games. We guarantee the lowest prices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Delivery</h3>
                <p className="text-gray-400">Get your game keys instantly after purchase. Start playing immediately.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Safe</h3>
                <p className="text-gray-400">SSL encrypted payments and verified game keys from authorized sources.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Huge Selection</h3>
                <p className="text-gray-400">Thousands of PC games from AAA blockbusters to indie masterpieces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Browse Games by Category
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find your next favorite game by genre at PlayJunction
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
              {["Action", "Adventure", "RPG", "Strategy", "Simulation", "Sports"].map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg bg-gray-800 transition-all hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
                      {category}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Deals */}
        <section className="w-full py-12 md:py-24 bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Latest Deals at PlayJunction
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Grab these limited-time offers before they're gone! Save big on popular PC games.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                {
                  id: "cyberpunk-2077",
                  title: "Cyberpunk 2077",
                  price: 19.99,
                  originalPrice: 59.99,
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp",
                  discount: 67,
                },
                {
                  id: "gta-v",
                  title: "Grand Theft Auto V",
                  price: 14.99,
                  originalPrice: 29.99,
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp",
                  discount: 50,
                },
                {
                  id: "the-witcher-3",
                  title: "The Witcher 3: Wild Hunt",
                  price: 19.99,
                  originalPrice: 39.99,
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
                  discount: 50,
                },
                {
                  id: "elden-ring",
                  title: "Elden Ring",
                  price: 39.99,
                  originalPrice: 59.99,
                  image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
                  discount: 33,
                },
              ].map((game, i) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  image={game.image}
                  discount={game.discount}
                />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/deals">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                  View All Deals
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    Stay Updated with PlayJunction
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                    Subscribe to our newsletter and never miss a sale, new game release, or exclusive deal at
                    PlayJunction.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    placeholder="Enter your email for PlayJunction updates"
                    type="email"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing to PlayJunction, you agree to our terms and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
