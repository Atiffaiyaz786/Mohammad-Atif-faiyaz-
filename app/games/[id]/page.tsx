import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GameReviews } from "@/components/game-reviews"
import { GameRequirements } from "@/components/game-requirements"
import { DownloadHandler } from "@/components/download-handler"
import { ShoppingCart, Heart, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getGameById } from "@/lib/games-database"

interface GamePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = getGameById(params.id)

  if (!game) {
    return {
      title: "Game Not Found | PlayJunction",
      description: "The requested game could not be found on PlayJunction.",
    }
  }

  return {
    title: `${game.title} - $${game.price} | PlayJunction`,
    description: `Buy ${game.title} for PC at the best price. ${game.description.substring(0, 150)}...`,
    keywords: `${game.title}, ${game.category.join(", ")}, PC game, buy game`,
    openGraph: {
      title: `${game.title} - $${game.price}`,
      description: game.description,
      images: [
        {
          url: game.image,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.title} - $${game.price}`,
      description: game.description,
      images: [game.image],
    },
    alternates: {
      canonical: `https://playjunction.com/games/${game.id}`,
    },
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameById(params.id)

  if (!game) {
    notFound()
  }

  const systemRequirements = {
    minimum: {
      os: "Windows 10 (64-bit)",
      cpu: "Intel Core i5-3570K or AMD FX-8310",
      ram: "8 GB",
      gpu: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
      storage: "70 GB available space",
    },
    recommended: {
      os: "Windows 10 (64-bit)",
      cpu: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
      ram: "12 GB",
      gpu: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 590",
      storage: "70 GB SSD",
    },
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: game.title,
    description: game.description,
    image: game.image,
    brand: {
      "@type": "Brand",
      name: game.developer,
    },
    offers: {
      "@type": "Offer",
      price: game.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "PlayJunction",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.5,
      reviewCount: 387,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Images */}
          <div className="w-full lg:w-2/3">
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={`${game.title} screenshot ${index}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Game details */}
          <div className="w-full lg:w-1/3">
            <h1 className="text-3xl font-bold mb-2 text-white">{game.title}</h1>

            <div className="flex items-center gap-2 mb-4">
              {game.category.map((cat) => (
                <Badge key={cat} variant="outline" className="bg-gray-800 text-purple-400 border-purple-500">
                  {cat}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold text-white">${game.price}</div>
              {game.originalPrice > game.price && (
                <>
                  <div className="text-xl line-through text-gray-500">${game.originalPrice}</div>
                  <Badge className="bg-purple-600 text-white">{game.discount}% OFF</Badge>
                </>
              )}
            </div>

            {/* Download Handler Component */}
            <div className="mb-6">
              <DownloadHandler gameId={game.id} gameTitle={game.title} gameType="pc" price={game.price} />
            </div>

            <div className="flex gap-2 mb-8">
              <Button variant="outline" className="flex-1 border-purple-600 text-purple-500 hover:bg-purple-950">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-500 hover:bg-purple-950">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-500 hover:bg-purple-950">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-400">Developer:</span>
                <span className="text-white">{game.developer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Publisher:</span>
                <span className="text-white">{game.publisher}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Release Date:</span>
                <span className="text-white">{game.releaseDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rating:</span>
                <span className="text-white">4.5/5 (387 reviews)</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-white mb-2">Game Categories</h3>
              <div className="flex flex-wrap gap-2">
                {game.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="bg-gray-700 text-gray-300">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mt-12">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="requirements">System Requirements</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="bg-gray-800 p-6 rounded-b-lg mt-0">
            <p className="text-gray-300 leading-relaxed">{game.description}</p>
            <div className="mt-6">
              <h3 className="font-medium text-white mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {game.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="bg-gray-700 text-gray-300">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="requirements" className="bg-gray-800 p-6 rounded-b-lg mt-0">
            <GameRequirements requirements={systemRequirements} />
          </TabsContent>
          <TabsContent value="reviews" className="bg-gray-800 p-6 rounded-b-lg mt-0">
            <GameReviews gameId={game.id} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
