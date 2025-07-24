import type { MetadataRoute } from "next"
import { getAllGames } from "@/lib/games-database"
import { getAllMobileGames } from "@/lib/mobile-games-database"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://playjunction.vercel.app"

  const games = getAllGames()
  const mobileGames = getAllMobileGames()

  const gameUrls = games.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const mobileGameUrls = mobileGames.map((game) => ({
    url: `${baseUrl}/mobile-games/${game.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const categories = [
    "action",
    "adventure",
    "rpg",
    "strategy",
    "simulation",
    "sports",
    "racing",
    "shooter",
    "puzzle",
    "horror",
  ]
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/browse/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobile-games`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/new-releases`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/account`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...gameUrls,
    ...mobileGameUrls,
    ...categoryUrls,
  ]
}
