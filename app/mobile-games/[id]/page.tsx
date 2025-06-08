import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Star, Users, Smartphone } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getMobileGameById } from "@/lib/mobile-games-database"

interface MobileGamePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: MobileGamePageProps): Promise<Metadata> {
  const game = getMobileGameById(params.id)

  if (!game) {
    return {
      title: "Mobile Game Not Found | PlayJunction",
      description: "The requested mobile game could not be found on PlayJunction.",
    }
  }

  return {
    title: `${game.title} - Free Download | PlayJunction Mobile Games`,
    description: `Download ${game.title} for free on Android and iOS. ${game.description.substring(0, 150)}...`,
    keywords: `${game.title}, ${game.category.join(", ")}, mobile game, free download, Android, iOS`,
    openGraph: {
      title: `${game.title} - Free Download`,
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
      title: `${game.title} - Free Download`,
      description: game.description,
      images: [game.image],
    },
    alternates: {
      canonical: `https://playjunction.com/mobile-games/${game.id}`,
    },
  }
}

export default function MobileGamePage({ params }: MobileGamePageProps) {
  const game = getMobileGameById(params.id)

  if (!game) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: game.title,
    description: game.description,
    image: game.image,
    applicationCategory: "GameApplication",
    operatingSystem: game.platform.join(", "),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: game.rating,
      reviewCount: Number.parseInt(game.downloads.replace(/[^\d]/g, "")) || 1000,
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
              <div className="text-3xl font-bold text-green-500">FREE</div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-white font-medium">{game.rating}</span>
                <span className="text-gray-400">({game.downloads})</span>
              </div>
            </div>

            <div className="flex gap-2 mb-8">
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                <Download className="mr-2 h-4 w-4" /> Download Free
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
                <span className="text-gray-400">Size:</span>
                <span className="text-white">{game.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Downloads:</span>
                <span className="text-white">{game.downloads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Platform:</span>
                <span className="text-white">{game.platform.join(", ")}</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-white mb-2">Available On</h3>
              <div className="flex gap-2">
                {game.platform.map((platform) => (
                  <Badge key={platform} variant="secondary" className="bg-gray-700 text-gray-300">
                    <Smartphone className="h-3 w-3 mr-1" />
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mt-12">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="description">Description</TabsTrigger>
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
          <TabsContent value="reviews" className="bg-gray-800 p-6 rounded-b-lg mt-0">
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">User Reviews</h3>
              <p className="text-gray-400">Reviews and ratings from mobile app stores</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-white">{game.rating}</span>
                <span className="text-gray-400">out of 5</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
