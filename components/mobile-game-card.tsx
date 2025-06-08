"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Star } from "lucide-react"

interface MobileGameCardProps {
  id: string
  title: string
  price: number
  image: string
  category: string[]
  downloads: string
  rating: number
  size: string
}

export function MobileGameCard({ id, title, price, image, category, downloads, rating, size }: MobileGameCardProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleQuickDownload = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsDownloading(true)

    // Simulate download process
    setTimeout(() => {
      // Open Google Play Store link
      const playStoreUrl = `https://play.google.com/store/apps/details?id=com.playjunction.${id}`
      window.open(playStoreUrl, "_blank")
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800 transition-all hover:shadow-xl hover:shadow-purple-500/20">
      <Link href={`/mobile-games/${id}`} className="block">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <Badge className="absolute top-2 right-2 bg-green-600 text-white">FREE</Badge>
      <div className="p-4">
        <Link href={`/mobile-games/${id}`} className="block">
          <h3 className="font-medium text-white group-hover:text-purple-400 transition-colors line-clamp-1">{title}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1 mb-2">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-300">{rating}</span>
          <span className="text-xs text-gray-500">({downloads})</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {category.slice(0, 2).map((cat) => (
            <Badge key={cat} variant="outline" className="text-xs bg-gray-700 text-gray-300 border-gray-600">
              {cat}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{size}</span>
          <Button
            size="sm"
            className="h-7 text-xs bg-green-600 hover:bg-green-700"
            onClick={handleQuickDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin mr-1"></div>
            ) : (
              <Download className="h-3 w-3 mr-1" />
            )}
            {isDownloading ? "Opening..." : "Install"}
          </Button>
        </div>
      </div>
    </div>
  )
}
