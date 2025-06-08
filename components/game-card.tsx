import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { PriceDisplay } from "@/components/price-display"

interface GameCardProps {
  id: string
  title: string
  price: number
  originalPrice: number
  image: string
  discount: number
}

export function GameCard({ id, title, price, originalPrice, image, discount }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800 transition-all hover:shadow-xl hover:shadow-purple-500/20">
      <Link href={`/games/${id}`} className="block">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      {discount > 0 && <Badge className="absolute top-2 right-2 bg-purple-600 text-white">{discount}% OFF</Badge>}
      <div className="p-4">
        <Link href={`/games/${id}`} className="block">
          <h3 className="font-medium text-white group-hover:text-purple-400 transition-colors line-clamp-1">{title}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <PriceDisplay priceUSD={price} originalPriceUSD={originalPrice} className="text-white" />
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-purple-600 hover:text-white">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
