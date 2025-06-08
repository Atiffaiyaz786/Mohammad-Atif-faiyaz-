import { GameCard } from "@/components/game-card"
import { GameFilters } from "@/components/game-filters"
import { Pagination } from "@/components/pagination"

export default function GamesPage() {
  // This would normally come from a database or API
  const games = [
    {
      id: "game-1",
      title: "Cyberpunk 2077",
      price: 29.99,
      originalPrice: 59.99,
      image: "/placeholder.svg?height=300&width=200&text=Cyberpunk",
      discount: 50,
    },
    {
      id: "game-2",
      title: "Red Dead Redemption 2",
      price: 39.99,
      originalPrice: 59.99,
      image: "/placeholder.svg?height=300&width=200&text=RDR2",
      discount: 33,
    },
    {
      id: "game-3",
      title: "Elden Ring",
      price: 44.99,
      originalPrice: 59.99,
      image: "/placeholder.svg?height=300&width=200&text=Elden",
      discount: 25,
    },
    {
      id: "game-4",
      title: "Baldur's Gate 3",
      price: 49.99,
      originalPrice: 59.99,
      image: "/placeholder.svg?height=300&width=200&text=BG3",
      discount: 17,
    },
    {
      id: "game-5",
      title: "Starfield",
      price: 54.99,
      originalPrice: 69.99,
      image: "/placeholder.svg?height=300&width=200&text=Starfield",
      discount: 21,
    },
    {
      id: "game-6",
      title: "Diablo IV",
      price: 39.99,
      originalPrice: 69.99,
      image: "/placeholder.svg?height=300&width=200&text=Diablo",
      discount: 43,
    },
    {
      id: "game-7",
      title: "Hogwarts Legacy",
      price: 34.99,
      originalPrice: 59.99,
      image: "/placeholder.svg?height=300&width=200&text=Hogwarts",
      discount: 42,
    },
    {
      id: "game-8",
      title: "Call of Duty: Modern Warfare III",
      price: 49.99,
      originalPrice: 69.99,
      image: "/placeholder.svg?height=300&width=200&text=COD",
      discount: 29,
    },
  ]

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
            <Pagination totalPages={10} currentPage={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
