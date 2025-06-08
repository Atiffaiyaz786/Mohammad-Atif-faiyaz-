import { Suspense } from "react"
import { notFound } from "next/navigation"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { games } from "@/lib/games-database"

// Define valid categories
const validCategories = ["action", "adventure", "rpg", "strategy", "simulation", "sports", "racing", "indie"]

export function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }))
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase()

  if (!validCategories.includes(category)) {
    return {
      title: "Category Not Found | PlayJunction",
      description: "The requested game category could not be found.",
    }
  }

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${capitalizedCategory} Games | PlayJunction`,
    description: `Browse our collection of ${category} games at affordable prices. Find the best ${category} games for PC with huge discounts.`,
  }
}

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

  // Check if category is valid
  if (!validCategories.includes(category)) {
    notFound()
  }

  // Filter games by category
  const filteredGames = games.filter((game) => game.genre.some((g) => g.toLowerCase() === category))

  // Paginate results
  const totalGames = filteredGames.length
  const totalPages = Math.ceil(totalGames / gamesPerPage)
  const paginatedGames = filteredGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage)

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-6">{capitalizedCategory} Games</h1>

      {totalGames > 0 ? (
        <>
          <p className="text-gray-400 mb-8">
            Browse our collection of {totalGames} {category} games
          </p>

          <Suspense fallback={<div>Loading games...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </Suspense>

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl={`/browse/${category}?page=`} />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No games found</h2>
          <p className="text-gray-400 mb-8">
            We don't have any {category} games at the moment. Please check back later.
          </p>
        </div>
      )}
    </div>
  )
}
