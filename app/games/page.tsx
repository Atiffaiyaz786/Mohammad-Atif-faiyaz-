import { GameCard } from "@/components/game-card"
import { GameFilters } from "@/components/game-filters"
import { Pagination } from "@/components/pagination"

export default function GamesPage() {
  // This would normally come from a database or API
  const games = [
    {
      id: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      price: 29.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp",
      discount: 50,
    },
    {
      id: "red-dead-2",
      title: "Red Dead Redemption 2",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
      discount: 33,
    },
    {
      id: "elden-ring",
      title: "Elden Ring",
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
      discount: 25,
    },
    {
      id: "baldurs-gate-3",
      title: "Baldur's Gate 3",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp",
      discount: 17,
    },
    {
      id: "starfield",
      title: "Starfield",
      price: 54.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6eqb.webp",
      discount: 21,
    },
    {
      id: "diablo-4",
      title: "Diablo IV",
      price: 39.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w95.webp",
      discount: 43,
    },
    {
      id: "hogwarts-legacy",
      title: "Hogwarts Legacy",
      price: 34.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6hqb.webp",
      discount: 42,
    },
    {
      id: "call-of-duty-mw3",
      title: "Call of Duty: Modern Warfare III",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9s.webp",
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
