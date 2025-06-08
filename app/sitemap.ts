import type { MetadataRoute } from "next"
import { games } from "@/lib/games-database"
import { mobileGames } from "@/lib/mobile-games-database"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://playjunction.com"
  const lastModified = new Date()

  // Generate URLs for all PC games
  const gameUrls = games.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Generate URLs for all mobile games
  const mobileGameUrls = mobileGames.map((game) => ({
    url: `${baseUrl}/mobile-games/${game.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Generate URLs for category pages
  const categories = ["action", "adventure", "rpg", "strategy", "sports", "simulation", "puzzle"]
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/browse/${category}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobile-games`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/new-releases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...gameUrls,
    ...mobileGameUrls,
    ...categoryUrls,
    {
      url: `${baseUrl}/cart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/account`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/login`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
