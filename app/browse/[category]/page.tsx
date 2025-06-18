import { notFound } from "next/navigation"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { games } from "@/lib/games-database"

const validCategories = [
  "action",
  "adventure",
  "rpg",
  "strategy",
  "simulation",
  "sports",
  "racing",
  "puzzle",
  "horror",
  "indie",
]

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams: { page?: string }
}) {
  const category = params.category.toLowerCase()
  const currentPage = Number(searchParams.page) || 1
  const gamesPerPage = 12

  // Validate category
  if (!validCategories.includes(category)) {
    notFound()
  }

  // Filter games by category
  const filteredGames = games.filter((game) => game.genre.some((g) => g.toLowerCase() === category))

  // Paginate results
  const totalGames = filteredGames.length
  const totalPages = Math.ceil(totalGames / gamesPerPage)
  const paginatedGames = filteredGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage)

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{categoryTitle} Games</h1>
      <p className="text-gray-400 mb-8">Discover the best {category} games at affordable prices</p>

      {filteredGames.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl={`/browse/${category}?page=`} />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No games found</h2>
          <p className="text-gray-400">We don't have any {category} games available at the moment.</p>
        </div>
      )}
    </div>
  )
}

// Generate static params for better performance
export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category: category,
  }))
}
