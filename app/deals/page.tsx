import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { getDealsGames } from "@/lib/games-database"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deals & Discounts | PlayJunction - PC Games at Unbeatable Prices",
  description:
    "Discover the best PC game deals with discounts up to 70% off. Limited-time offers on AAA titles, indie gems, and classic favorites at PlayJunction.",
  keywords: "PC game deals, game discounts, cheap PC games, gaming deals, PlayJunction deals, video game sales",
}

export default function DealsPage() {
  const dealGames = getDealsGames()

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
        <Pagination totalPages={Math.ceil(dealGames.length / 16)} currentPage={1} />
      </div>
    </div>
  )
}
