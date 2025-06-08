import { GameCard } from "@/components/game-card"
import { GameFilters } from "@/components/game-filters"
import { Pagination } from "@/components/pagination"

export default function GamesPage() {
  // Fixed games list with correct logos
  const games = [
    {
      id: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      price: 29.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp", // Correct Cyberpunk 2077 cover
      discount: 50,
    },
    {
      id: "gta-v",
      title: "Grand Theft Auto V",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Correct GTA V cover
      discount: 33,
    },
    {
      id: "red-dead-redemption-2",
      title: "Red Dead Redemption 2",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp", // Correct RDR2 cover
      discount: 33,
    },
    {
      id: "elden-ring",
      title: "Elden Ring",
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp", // Correct Elden Ring cover
      discount: 25,
    },
    {
      id: "baldurs-gate-3",
      title: "Baldur's Gate 3",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp", // Correct BG3 cover
      discount: 17,
    },
    {
      id: "call-of-duty-mw3",
      title: "Call of Duty: Modern Warfare III",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9s.webp", // Correct COD MW3 cover
      discount: 29,
    },
    {
      id: "the-witcher-3",
      title: "The Witcher 3: Wild Hunt",
      price: 24.99,
      originalPrice: 39.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Correct Witcher 3 cover
      discount: 38,
    },
    {
      id: "minecraft",
      title: "Minecraft",
      price: 26.95,
      originalPrice: 26.95,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp", // Correct Minecraft cover
      discount: 0,
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
