import { Suspense } from "react"
import type { Metadata } from "next"
import { GameCard } from "@/components/game-card"
import { getDealsGames } from "@/lib/games-database"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Game Deals - PlayJunction",
  description: "Discover amazing deals and discounts on PC games. Save up to 90% on popular titles.",
}

function DealsContent() {
  const dealsGames = getDealsGames()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Flame className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Flash Sale</h1>
          <Badge variant="secondary" className="bg-white text-red-600">
            <Clock className="h-3 w-3 mr-1" />
            Limited Time
          </Badge>
        </div>
        <p className="text-lg opacity-90">Save up to 90% on selected games! Don't miss these incredible deals.</p>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dealsGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            price={game.price}
            originalPrice={game.originalPrice}
            discount={game.discount}
            image={game.image}
            rating={game.rating}
            reviews={game.reviews}
            genre={game.genre}
            tags={game.tags}
          />
        ))}
      </div>

      {dealsGames.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No deals available</h2>
          <p className="text-muted-foreground">Check back later for amazing deals!</p>
        </div>
      )}
    </div>
  )
}

export default function DealsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading deals...</div>}>
      <DealsContent />
    </Suspense>
  )
}
