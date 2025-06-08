import { Suspense } from "react"
import { GameCard } from "@/components/game-card"
import { MobileGameCard } from "@/components/mobile-game-card"
import { Pagination } from "@/components/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { games } from "@/lib/games-database"
import { mobileGames } from "@/lib/mobile-games-database"

// Create a separate component for the search results
function SearchResults({ searchParams }: { searchParams: { q?: string; page?: string } }) {
  const query = searchParams.q?.toLowerCase() || ""
  const currentPage = Number(searchParams.page) || 1
  const gamesPerPage = 12

  const filteredPcGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query) ||
      game.genre.some((genre) => genre.toLowerCase().includes(query)),
  )

  const filteredMobileGames = mobileGames.filter(
    (game) =>
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query) ||
      game.genres.some((genre) => genre.toLowerCase().includes(query)),
  )

  const totalResults = filteredPcGames.length + filteredMobileGames.length

  // Paginate PC games
  const totalPcPages = Math.ceil(filteredPcGames.length / gamesPerPage)
  const paginatedPcGames = filteredPcGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage)

  // Paginate mobile games
  const totalMobilePages = Math.ceil(filteredMobileGames.length / gamesPerPage)
  const paginatedMobileGames = filteredMobileGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage)

  if (!query) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Start Your Search</h2>
        <p className="text-gray-400">Enter a game title, genre, or keyword to find your next favorite game.</p>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>
      <p className="text-gray-400 mb-6">
        {totalResults} results found for "{query}"
      </p>

      <Tabs defaultValue="pc" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="pc">PC Games ({filteredPcGames.length})</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Games ({filteredMobileGames.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pc">
          {filteredPcGames.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedPcGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
              {totalPcPages > 1 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPcPages}
                    baseUrl={`/search?q=${encodeURIComponent(query)}&page=`}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-xl">No PC games found matching "{query}"</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="mobile">
          {filteredMobileGames.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedMobileGames.map((game) => (
                  <MobileGameCard key={game.id} game={game} />
                ))}
              </div>
              {totalMobilePages > 1 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalMobilePages}
                    baseUrl={`/search?q=${encodeURIComponent(query)}&page=`}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-xl">No mobile games found matching "{query}"</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </>
  )
}

// Loading component for Suspense fallback
function SearchLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-300 rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main page component
export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<SearchLoading />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
