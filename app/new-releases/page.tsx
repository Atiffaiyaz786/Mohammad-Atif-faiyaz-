import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { getNewReleases } from "@/lib/games-database"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Releases | PlayJunction - Latest PC Games",
  description:
    "Discover the newest PC game releases at PlayJunction. Get the latest AAA titles and indie games with fast digital delivery and competitive prices.",
  keywords: "new PC games, latest game releases, new video games, recent game launches, PlayJunction new games",
}

export default function NewReleasesPage() {
  const newReleases = getNewReleases()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">New Releases</h1>
        <p className="text-gray-400">The latest and greatest PC games, fresh off the press</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newReleases.map((game) => (
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
        <Pagination totalPages={Math.ceil(newReleases.length / 16)} currentPage={1} />
      </div>
    </div>
  )
}
