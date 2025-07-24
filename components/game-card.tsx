import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

interface GameCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  rating?: number
  reviews?: number
  genre?: string[]
  tags?: string[]
}

export function GameCard({
  id,
  title,
  price,
  originalPrice,
  discount,
  image,
  rating = 0,
  reviews = 0,
  genre = [],
  tags = [],
}: GameCardProps) {
  return (
    <Card className="group overflow-hidden bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discount && discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">-{discount}%</Badge>
        )}
      </div>

      <CardContent className="p-4">
        <Link href={`/games/${id}`} className="block">
          <h3 className="font-semibold text-white mb-2 line-clamp-2 hover:text-purple-400 transition-colors">
            {title}
          </h3>
        </Link>

        {genre.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {genre.slice(0, 2).map((g) => (
              <Badge key={g} variant="secondary" className="text-xs">
                {g}
              </Badge>
            ))}
          </div>
        )}

        {rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-300">
              {rating.toFixed(1)} ({reviews?.toLocaleString() || 0})
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {originalPrice && originalPrice > price ? (
            <>
              <span className="text-lg font-bold text-white">${price.toFixed(2)}</span>
              <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-white">{price === 0 ? "Free" : `$${price.toFixed(2)}`}</span>
          )}
        </div>

        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          <ShoppingCart className="h-4 w-4 mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
