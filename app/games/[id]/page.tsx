import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GameReviews } from "@/components/game-reviews"
import { GameRequirements } from "@/components/game-requirements"
import { ShoppingCart, Heart, Share2 } from "lucide-react"

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  // In a real app, you would fetch this data from an API or database
  const game = {
    id: params.id,
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
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
    images: [
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6urt.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6urv.webp",
      "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6urw.webp",
    ],
    mainImage: "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/sc6urt.webp",
    systemRequirements: {
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
    },
  }

  return (
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
            <div className="text-xl line-through text-gray-500">${game.originalPrice}</div>
            <Badge className="bg-purple-600 text-white">{game.discount}% OFF</Badge>
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
          <GameRequirements requirements={game.systemRequirements} />
        </TabsContent>
        <TabsContent value="reviews" className="bg-gray-800 p-6 rounded-b-lg mt-0">
          <GameReviews gameId={game.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
