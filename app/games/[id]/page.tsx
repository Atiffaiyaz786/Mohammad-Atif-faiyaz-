import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GameReviews } from "@/components/game-reviews"
import { GameRequirements } from "@/components/game-requirements"
import { ShoppingCart, Heart, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface GamePageProps {
  params: {
    id: string
  }
}

// Expanded game database with real games
const gamesDatabase = {
  "cyberpunk-2077": {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    releaseDate: "December 10, 2020",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    genres: ["RPG", "Action", "Open World"],
    features: ["Single-player", "Full controller support", "Steam Achievements"],
    tags: ["Cyberpunk", "Open World", "RPG", "Sci-fi", "Futuristic"],
    rating: 4.2,
    reviewCount: 387,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/sc6urt.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6urt.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6urv.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6urw.webp",
    ],
  },
  "gta-v": {
    id: "gta-v",
    title: "Grand Theft Auto V",
    description:
      "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.",
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    releaseDate: "April 14, 2015",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    genres: ["Action", "Adventure", "Open World"],
    features: ["Single-player", "Online multiplayer", "Full controller support"],
    tags: ["Open World", "Crime", "Action", "Multiplayer", "Driving"],
    rating: 4.6,
    reviewCount: 1250,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/gtav1.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/gtav1.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/gtav2.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/gtav3.webp",
    ],
  },
  "red-dead-redemption-2": {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    description:
      "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run.",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    releaseDate: "December 5, 2019",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    genres: ["Action", "Adventure", "Open World"],
    features: ["Single-player", "Online multiplayer", "Full controller support"],
    tags: ["Western", "Open World", "Story Rich", "Multiplayer", "Action"],
    rating: 4.5,
    reviewCount: 892,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/rdr2main.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/rdr21.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/rdr22.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/rdr23.webp",
    ],
  },
  "elden-ring": {
    id: "elden-ring",
    title: "Elden Ring",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.",
    price: 44.99,
    originalPrice: 59.99,
    discount: 25,
    releaseDate: "February 25, 2022",
    developer: "FromSoftware Inc.",
    publisher: "Bandai Namco Entertainment",
    genres: ["RPG", "Action", "Dark Fantasy"],
    features: ["Single-player", "Online Co-op", "Steam Achievements"],
    tags: ["Souls-like", "Dark Fantasy", "Difficult", "RPG", "Open World"],
    rating: 4.7,
    reviewCount: 1205,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/eldenring1.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/eldenring1.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/eldenring2.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/eldenring3.webp",
    ],
  },
  "baldurs-gate-3": {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    description:
      "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain.",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    releaseDate: "August 3, 2023",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    genres: ["RPG", "Strategy", "Turn-Based"],
    features: ["Single-player", "Online Co-op", "Local Co-op"],
    tags: ["RPG", "D&D", "Turn-Based Combat", "Story Rich", "Fantasy"],
    rating: 4.8,
    reviewCount: 756,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/bg3main.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/bg31.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/bg32.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/bg33.webp",
    ],
  },
  "call-of-duty-mw3": {
    id: "call-of-duty-mw3",
    title: "Call of Duty: Modern Warfare III",
    description:
      "In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    releaseDate: "November 10, 2023",
    developer: "Sledgehammer Games",
    publisher: "Activision",
    genres: ["Action", "FPS", "Multiplayer"],
    features: ["Single-player", "Online multiplayer", "Cross-platform"],
    tags: ["FPS", "Military", "Multiplayer", "Action", "Competitive"],
    rating: 3.8,
    reviewCount: 432,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/codmw3main.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/codmw31.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/codmw32.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/codmw33.webp",
    ],
  },
  "the-witcher-3": {
    id: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    description:
      "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world. The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game.",
    price: 24.99,
    originalPrice: 39.99,
    discount: 38,
    releaseDate: "May 18, 2015",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    genres: ["RPG", "Action", "Open World"],
    features: ["Single-player", "Full controller support", "Steam Achievements"],
    tags: ["RPG", "Open World", "Fantasy", "Story Rich", "Medieval"],
    rating: 4.9,
    reviewCount: 2100,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/witcher3main.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/witcher31.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/witcher32.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/witcher33.webp",
    ],
  },
  minecraft: {
    id: "minecraft",
    title: "Minecraft",
    description:
      "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then it's a good thing that Minecraft can be played with friends.",
    price: 26.95,
    originalPrice: 26.95,
    discount: 0,
    releaseDate: "November 18, 2011",
    developer: "Mojang Studios",
    publisher: "Microsoft Studios",
    genres: ["Sandbox", "Survival", "Creative"],
    features: ["Single-player", "Online multiplayer", "Cross-platform"],
    tags: ["Sandbox", "Building", "Survival", "Multiplayer", "Creative"],
    rating: 4.4,
    reviewCount: 3200,
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/minecraftmain.webp",
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/minecraft1.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/minecraft2.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/minecraft3.webp",
    ],
  },
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = gamesDatabase[params.id as keyof typeof gamesDatabase]

  if (!game) {
    return {
      title: "Game Not Found | PlayJunction",
      description: "The requested game could not be found on PlayJunction.",
    }
  }

  return {
    title: `${game.title} - $${game.price} | PlayJunction`,
    description: `Buy ${game.title} for PC at the best price. ${game.description.substring(0, 150)}...`,
    keywords: `${game.title}, ${game.genres.join(", ")}, ${game.tags.join(", ")}, PC game, buy game`,
    openGraph: {
      title: `${game.title} - $${game.price}`,
      description: game.description,
      images: [
        {
          url: game.mainImage,
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
      images: [game.mainImage],
    },
    alternates: {
      canonical: `https://playjunction.com/games/${game.id}`,
    },
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = gamesDatabase[params.id as keyof typeof gamesDatabase]

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
    image: game.mainImage,
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
      ratingValue: game.rating,
      reviewCount: game.reviewCount,
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
              <img src={game.mainImage || "/placeholder.svg"} alt={game.title} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {game.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${game.title} screenshot ${index + 1}`}
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
              {game.genres.map((genre) => (
                <Badge key={genre} variant="outline" className="bg-gray-800 text-purple-400 border-purple-500">
                  {genre}
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

            <div className="flex gap-2 mb-8">
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
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
                <span className="text-white">
                  {game.rating}/5 ({game.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-white mb-2">Game Features</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {game.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
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
              <h3 className="font-medium text-white mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">
                    {tag}
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
