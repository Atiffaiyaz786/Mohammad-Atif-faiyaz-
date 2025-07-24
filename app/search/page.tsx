import { Suspense } from "react"
import { GameCard } from "@/components/game-card"
import { MobileGameCard } from "@/components/mobile-game-card"
import { searchGames } from "@/lib/games-database"
import { searchMobileGames } from "@/lib/mobile-games-database"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search Games | PlayJunction",
  description: "Search for PC and mobile games at affordable prices on PlayJunction.",
}

interface SearchResultsProps {
  searchParams: { q?: string; type?: string }
}

function SearchResults({ searchParams }: SearchResultsProps) {
  const query = searchParams.q || ""
  const type = searchParams.type || "all"

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Search Games</h1>
          <p className="text-gray-400">Enter a search term to find games</p>
        </div>
      </div>
    )
  }

  const pcGames = type === "all" || type === "pc" ? searchGames(query) : []
  const mobileGames = type === "all" || type === "mobile" ? searchMobileGames(query) : []
  const totalResults = pcGames.length + mobileGames.length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Search Results for "{query}"</h1>
        <p className="text-gray-400">
          Found {totalResults} {totalResults === 1 ? "game" : "games"}
        </p>
      </div>

      {totalResults === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg mb-4">No games found matching your search.</p>
          <p className="text-gray-500">Try different keywords or browse our categories.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {pcGames.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">PC Games ({pcGames.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pcGames.map((game) => (
                  <GameCard
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    price={game.price}
                    originalPrice={game.originalPrice}
                    image={game.image}
                    discount={game.discount}
                    rating={game.rating}
                    reviews={game.reviews}
                  />
                ))}
              </div>
            </section>
          )}

          {mobileGames.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Mobile Games ({mobileGames.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mobileGames.map((game) => (
                  <MobileGameCard
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    price={game.price}
                    originalPrice={game.originalPrice}
                    image={game.image}
                    discount={game.discount}
                    rating={game.rating}
                    downloads={game.downloads}
                    playStoreId={game.playStoreId}
                    appStoreId={game.appStoreId}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}

export default function SearchPage({ searchParams }: SearchResultsProps) {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="text-white">Loading search results...</div>
        </div>
      }
    >
      <SearchResults searchParams={searchParams} />
    </Suspense>
  )
}
