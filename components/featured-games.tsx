"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function FeaturedGames() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const featuredGames = [
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
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative mt-8">
      <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 rounded-full bg-gray-800/80 text-white shadow-md ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
          }`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>
      <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {featuredGames.map((game) => (
          <div key={game.id} className="min-w-[250px] snap-start">
            <GameCard
              id={game.id}
              title={game.title}
              price={game.price}
              originalPrice={game.originalPrice}
              image={game.image}
              discount={game.discount}
            />
          </div>
        ))}
      </div>
      <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 rounded-full bg-gray-800/80 text-white shadow-md ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
          }`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}
