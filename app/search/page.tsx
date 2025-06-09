import { Suspense } from "react"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { games } from "@/lib/games-database"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; page?: string }
}) {
  const query = searchParams.q || ""
  const currentPage = Number(searchParams.page) || 1
  const gamesPerPage = 12

  // Filter games based on search query
  const filteredGames = query
    ? games.filter(
        (game) =>
          game.title.toLowerCase().includes(query.toLowerCase()) ||
          game.description.toLowerCase().includes(query.toLowerCase()) ||
          game.genre.some((g) => g.toLowerCase().includes(query.toLowerCase())),
      )
    : []

  // Paginate results
  const totalGames = filteredGames.length
  const totalPages = Math.ceil(totalGames / gamesPerPage)
  const paginatedGames = filteredGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-purple-500">{query}</span>
      </h1>

      {totalGames > 0 ? (
        <>
          <p className="text-gray-400 mb-8">Found {totalGames} games matching your search</p>

          <Suspense fallback={<div>Loading games...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </Suspense>

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl={`/search?q=${encodeURIComponent(query)}&page=`}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No games found</h2>
          <p className="text-gray-400 mb-8">
            We couldn't find any games matching "{query}". Please try a different search term.
          </p>
        </div>
      )}
    </div>
  )
}
