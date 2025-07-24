"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/games/${id}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {discount && discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">-{discount}%</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Link href={`/games/${id}`}>
            <h3 className="font-semibold text-lg line-clamp-1 hover:text-blue-600 transition-colors">{title}</h3>
          </Link>

          {genre.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {genre.slice(0, 2).map((g) => (
                <Badge key={g} variant="secondary" className="text-xs">
                  {g}
                </Badge>
              ))}
            </div>
          )}

          {rating > 0 && reviews > 0 && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating.toFixed(1)}</span>
              <span>({reviews.toLocaleString()} reviews)</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {originalPrice && originalPrice > price ? (
                <>
                  <span className="text-lg font-bold text-green-600">${price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-lg font-bold">{price === 0 ? "Free" : `$${price.toFixed(2)}`}</span>
              )}
            </div>
            <Button size="sm" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              {price === 0 ? "Download" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
