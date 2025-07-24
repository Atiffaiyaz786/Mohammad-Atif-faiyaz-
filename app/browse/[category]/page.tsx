import { notFound } from "next/navigation"
import { GameCard } from "@/components/game-card"
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

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category: category,
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase()

  if (!validCategories.includes(category)) {
    return {
      title: "Category Not Found | PlayJunction",
      description: "The requested game category could not be found.",
    }
  }

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${categoryTitle} Games | PlayJunction`,
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

  if (!validCategories.includes(category)) {
    notFound()
  }

  const filteredGames = games.filter((game) => game.genre.some((g) => g.toLowerCase() === category))

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{categoryTitle} Games</h1>
      <p className="text-gray-400 mb-8">Discover the best {category} games at affordable prices</p>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
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
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No games found</h2>
          <p className="text-gray-400">We don't have any {category} games available at the moment.</p>
        </div>
      )}
    </div>
  )
}
