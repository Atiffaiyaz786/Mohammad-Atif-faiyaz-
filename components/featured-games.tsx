"use client"

import { GameCard } from "@/components/game-card"
import { getFeaturedGames } from "@/lib/games-database"

export function FeaturedGames() {
  const featuredGames = getFeaturedGames()

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
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
      </div>
    </section>
  )
}
