"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Download, Smartphone } from "lucide-react"
import { DownloadHandler } from "@/components/download-handler"

interface MobileGameCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  rating?: number
  reviews?: number
  genre?: string
  tags?: string[]
  size?: string
  iosAppId?: string
  androidPackage?: string
}

export function MobileGameCard({
  id,
  title,
  price,
  originalPrice,
  discount,
  image,
  rating,
  reviews,
  genre,
  tags = [],
  size,
  iosAppId,
  androidPackage,
}: MobileGameCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/mobile-games/${id}`}>
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
        {genre && (
          <Badge variant="secondary" className="absolute top-2 right-2">
            <Smartphone className="h-3 w-3 mr-1" />
            {genre}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <Link href={`/mobile-games/${id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 hover:text-blue-600 transition-colors">{title}</h3>
        </Link>

        {rating && reviews && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews.toLocaleString()})</span>
          </div>
        )}

        {size && <div className="text-sm text-muted-foreground mb-2">Size: {size}</div>}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
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
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <DownloadHandler gameTitle={title} iosAppId={iosAppId} androidPackage={androidPackage} className="w-full">
          <Download className="h-4 w-4 mr-2" />
          {price === 0 ? "Download Free" : "Get Game"}
        </DownloadHandler>
      </CardFooter>
    </Card>
  )
}
