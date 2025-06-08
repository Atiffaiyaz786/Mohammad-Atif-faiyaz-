import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming Soon | PlayJunction - Upcoming PC Games",
  description:
    "Explore upcoming PC game releases at PlayJunction. Pre-order the most anticipated titles and be the first to play on release day.",
  keywords: "upcoming PC games, game pre-orders, future game releases, anticipated games, PlayJunction pre-order",
}

interface UpcomingGame {
  id: string
  title: string
  image: string
  releaseDate: string
  description: string
  preorderPrice: number
  tags: string[]
}

export default function ComingSoonPage() {
  const upcomingGames: UpcomingGame[] = [
    {
      id: "gta-6",
      title: "Grand Theft Auto VI",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6h94.webp",
      releaseDate: "Fall 2025",
      description:
        "The next chapter in the Grand Theft Auto series. Return to Vice City in the most immersive and detailed GTA experience yet.",
      preorderPrice: 69.99,
      tags: ["Action", "Open World", "Crime"],
    },
    {
      id: "elder-scrolls-6",
      title: "The Elder Scrolls VI",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kkt.webp",
      releaseDate: "2026",
      description:
        "The long-awaited next installment in the Elder Scrolls series. A new land, a new story, and new adventures await.",
      preorderPrice: 69.99,
      tags: ["RPG", "Open World", "Fantasy"],
    },
    {
      id: "dragon-age-dreadwolf",
      title: "Dragon Age: Dreadwolf",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s6x.webp",
      releaseDate: "Late 2024",
      description:
        "The next generation of BioWare's acclaimed RPG series. Uncover the secrets of the Dread Wolf and shape the future of Thedas.",
      preorderPrice: 59.99,
      tags: ["RPG", "Fantasy", "Action"],
    },
    {
      id: "fable-4",
      title: "Fable",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.webp",
      releaseDate: "2025",
      description:
        "A new beginning for the legendary Fable franchise. Return to the fantasy world of Albion in this reboot of the beloved RPG series.",
      preorderPrice: 59.99,
      tags: ["RPG", "Fantasy", "Adventure"],
    },
    {
      id: "avowed",
      title: "Avowed",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mju.webp",
      releaseDate: "2024",
      description:
        "A first-person RPG set in the world of Eora from Obsidian Entertainment. Explore a fantasy world filled with magic and monsters.",
      preorderPrice: 59.99,
      tags: ["RPG", "First-Person", "Fantasy"],
    },
    {
      id: "stalker-2",
      title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vq8.webp",
      releaseDate: "2024",
      description:
        "The long-awaited sequel to the legendary S.T.A.L.K.E.R. series. Return to the Zone in this immersive first-person survival horror experience.",
      preorderPrice: 49.99,
      tags: ["FPS", "Survival Horror", "Post-apocalyptic"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Coming Soon</h1>
        <p className="text-gray-400">The most anticipated upcoming PC games. Pre-order now to secure your copy.</p>
      </div>

      <div className="space-y-8">
        {upcomingGames.map((game) => (
          <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
              <div className="aspect-[3/4] md:aspect-auto relative">
                <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {game.releaseDate}
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-2">{game.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-700 text-gray-300 border-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 flex-grow">{game.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-xl font-bold text-white">${game.preorderPrice}</div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950">
                      Notify Me
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">Pre-order Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
