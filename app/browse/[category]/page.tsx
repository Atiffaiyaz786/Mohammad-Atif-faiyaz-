import { Suspense } from "react"
import { notFound } from "next/navigation"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { getAllGames } from "@/lib/games-database"
import type { Metadata } from "next"

interface PageProps {
  params: { category: string }
  searchParams: { page?: string }
}

const validCategories = ["action", "adventure", "rpg", "strategy", "sports", "simulation", "puzzle"]

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = params.category

  if (!validCategories.includes(category)) {
    return {
      title: "Category Not Found",
    }
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${categoryName} Games - PlayJunction`,
    description: `Browse our collection of ${categoryName.toLowerCase()} games at affordable prices. Find the best ${categoryName.toLowerCase()} games with instant digital delivery.`,
  }
}

function CategoryContent({ category, page }: { category: string; page: number }) {
  const allGames = getAllGames()

  // Filter games by category - handle both string and array genres
  const filteredGames = allGames.filter((game) => {
    if (!game.genre) return false

    // Handle both string and array genres
    if (typeof game.genre === "string") {
      return game.genre.toLowerCase() === category.toLowerCase()
    }

    if (Array.isArray(game.genre)) {
      return game.genre.some((g) => g.toLowerCase() === category.toLowerCase())
    }

    return false
  })

  const gamesPerPage = 12
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage)
  const startIndex = (page - 1) * gamesPerPage
  const endIndex = startIndex + gamesPerPage
  const currentGames = filteredGames.slice(startIndex, endIndex)

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  if (filteredGames.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{categoryName} Games</h1>
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No {categoryName.toLowerCase()} games found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{categoryName} Games</h1>
        <p className="text-gray-400">
          Showing {filteredGames.length} {categoryName.toLowerCase()} games
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {currentGames.map((game) => (
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
            genre={Array.isArray(game.genre) ? game.genre : [game.genre]}
            tags={game.tags || []}
          />
        ))}
      </div>

      {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} baseUrl={`/browse/${category}`} />}
    </div>
  )
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  const category = params.category
  const page = Number.parseInt(searchParams.page || "1", 10)

  if (!validCategories.includes(category)) {
    notFound()
  }

  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-64 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-lg h-80"></div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <CategoryContent category={category} page={page} />
    </Suspense>
  )
}
