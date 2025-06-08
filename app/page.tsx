import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GameCard } from "@/components/game-card"
import { FeaturedGames } from "@/components/featured-games"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Premium PC Games at <span className="text-purple-500">Affordable Prices</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Discover the latest AAA titles and indie gems at unbeatable prices. Your gaming journey starts here.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/games">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Browse Games</Button>
                </Link>
                <Link href="/deals">
                  <Button variant="outline" className="border-purple-600 text-purple-500 hover:bg-purple-950">
                    Today's Deals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 z-10 rounded-lg"></div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Featured games collage"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Featured Games</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our handpicked selection of top games at incredible prices
              </p>
            </div>
          </div>
          <FeaturedGames />
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 md:py-24 bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Browse by Category
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find your next favorite game by genre
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
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Latest Deals</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Grab these limited-time offers before they're gone
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <GameCard
                key={i}
                id={`deal-${i}`}
                title={`Game Deal ${i}`}
                price={19.99}
                originalPrice={59.99}
                image={`/placeholder.svg?height=300&width=200&text=Game${i}`}
                discount={67}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/deals">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">View All Deals</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Stay Updated on New Releases & Deals
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                  Subscribe to our newsletter and never miss a sale or new game release.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-500">By subscribing, you agree to our terms and privacy policy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
