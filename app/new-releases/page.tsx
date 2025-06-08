import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Releases | PlayJunction - Latest PC Games",
  description:
    "Discover the newest PC game releases at PlayJunction. Get the latest AAA titles and indie games with fast digital delivery and competitive prices.",
  keywords: "new PC games, latest game releases, new video games, recent game launches, PlayJunction new games",
}

export default function NewReleasesPage() {
  // Recently released games
  const newReleases = [
    {
      id: "baldurs-gate-3",
      title: "Baldur's Gate 3",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp",
      discount: 17,
    },
    {
      id: "call-of-duty-mw3",
      title: "Call of Duty: Modern Warfare III",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9s.webp",
      discount: 29,
    },
    {
      id: "starfield",
      title: "Starfield",
      price: 59.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vx5.webp",
      discount: 14,
    },
    {
      id: "diablo-4",
      title: "Diablo IV",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp",
      discount: 29,
    },
    {
      id: "hogwarts-legacy",
      title: "Hogwarts Legacy",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ocq.webp",
      discount: 33,
    },
    {
      id: "resident-evil-4",
      title: "Resident Evil 4",
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vkj.webp",
      discount: 25,
    },
    {
      id: "spider-man-2",
      title: "Marvel's Spider-Man 2",
      price: 59.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vkk.webp",
      discount: 14,
    },
    {
      id: "alan-wake-2",
      title: "Alan Wake 2",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e6k.webp",
      discount: 17,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">New Releases</h1>
        <p className="text-gray-400">The latest and greatest PC games, fresh off the press</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newReleases.map((game) => (
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

      <div className="mt-8">
        <Pagination totalPages={2} currentPage={1} />
      </div>
    </div>
  )
}
