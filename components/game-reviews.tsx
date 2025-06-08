"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface GameReviewsProps {
  gameId: string
}

export function GameReviews({ gameId }: GameReviewsProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
      },
      rating: 5,
      date: "2023-12-15",
      content:
        "One of the best games I've played in years. The story is captivating, and the gameplay is smooth and engaging. Highly recommended for any RPG fan!",
    },
    {
      id: 2,
      user: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40&text=SM",
      },
      rating: 4,
      date: "2023-11-28",
      content:
        "Great game overall, but there are still some minor bugs that need to be fixed. The graphics are stunning, and the open world is incredibly detailed.",
    },
    {
      id: 3,
      user: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
      },
      rating: 3,
      date: "2023-10-05",
      content:
        "Decent game, but I expected more from the story. The side quests are repetitive, and the combat system could use some improvements.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white">Customer Reviews</h3>
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-white">4.2</div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-400">Based on 387 reviews</div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-lg font-medium text-white mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-400 mb-2">Your Rating</div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                />
              ))}
            </div>
          </div>
          <Textarea
            placeholder="Share your thoughts about this game..."
            className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Submit Review</Button>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                  <AvatarFallback>
                    {review.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-white">{review.user.name}</div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{review.date}</div>
            </div>
            <p className="text-gray-300">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
