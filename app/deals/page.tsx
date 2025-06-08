import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deals & Discounts | PlayJunction - PC Games at Unbeatable Prices",
  description:
    "Discover the best PC game deals with discounts up to 70% off. Limited-time offers on AAA titles, indie gems, and classic favorites at PlayJunction.",
  keywords: "PC game deals, game discounts, cheap PC games, gaming deals, PlayJunction deals, video game sales",
}

export default function DealsPage() {
  // Games with significant discounts
  const dealGames = [
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
      id: "red-dead-redemption-2",
      title: "Red Dead Redemption 2",
      price: 29.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
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
      id: "assassins-creed-valhalla",
      title: "Assassin's Creed Valhalla",
      price: 19.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ed3.webp",
      discount: 67,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Hot Deals & Discounts</h1>
        <p className="text-gray-400">Limited-time offers on top PC games. Grab them before they're gone!</p>
      </div>

      <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 rounded-full p-2">
            <span className="text-xl">🔥</span>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">Flash Sale: Extra 10% off with code FLASH10</h2>
            <p className="text-gray-300 text-sm">Offer ends in 48 hours. Applies to all games on this page.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dealGames.map((game) => (
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
        <Pagination totalPages={3} currentPage={1} />
      </div>
    </div>
  )
}
