import { GameCard } from "@/components/game-card"
import { GameFilters } from "@/components/game-filters"
import { Pagination } from "@/components/pagination"
import { getAllGames } from "@/lib/games-database"

export default function GamesPage() {
  const games = getAllGames()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Browse Games</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <GameFilters />
        </div>

        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game) => (
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
            <Pagination totalPages={Math.ceil(games.length / 16)} currentPage={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
