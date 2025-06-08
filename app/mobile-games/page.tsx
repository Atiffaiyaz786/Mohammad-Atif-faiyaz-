import { MobileGameCard } from "@/components/mobile-game-card"
import { getAllMobileGames } from "@/lib/mobile-games-database"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Mobile Games | PlayJunction - Download Android & iOS Games",
  description:
    "Download the best free mobile games for Android and iOS. BGMI, Free Fire, Call of Duty Mobile, and 100+ more games available for free download.",
  keywords: "free mobile games, Android games, iOS games, BGMI, Free Fire, mobile gaming, PlayJunction mobile",
}

export default function MobileGamesPage() {
  const mobileGames = getAllMobileGames()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Free Mobile Games</h1>
        <p className="text-gray-400">Download the best free mobile games for Android and iOS devices</p>
      </div>

      <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-green-600 rounded-full p-2">
            <span className="text-xl">📱</span>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">All Mobile Games are FREE!</h2>
            <p className="text-gray-300 text-sm">Download and play instantly on your Android or iOS device.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mobileGames.map((game) => (
          <MobileGameCard
            key={game.id}
            id={game.id}
            title={game.title}
            price={game.price}
            image={game.image}
            category={game.category}
            downloads={game.downloads}
            rating={game.rating}
            size={game.size}
          />
        ))}
      </div>
    </div>
  )
}
