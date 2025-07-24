import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://playjunction.com"
  const lastModified = new Date()

  const gameIds = [
    "cyberpunk-2077",
    "gta-v",
    "red-dead-redemption-2",
    "elden-ring",
    "baldurs-gate-3",
    "the-witcher-3",
    "call-of-duty-mw3",
    "minecraft",
    "starfield",
    "diablo-4",
  ]

  const mobileGameIds = ["bgmi", "free-fire", "cod-mobile", "genshin-impact", "clash-of-clans"]

  const gameUrls = gameIds.map((gameId) => ({
    url: `${baseUrl}/games/${gameId}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const mobileGameUrls = mobileGameIds.map((gameId) => ({
    url: `${baseUrl}/mobile-games/${gameId}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const categories = ["action", "adventure", "rpg", "strategy", "sports", "simulation"]
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
  ]
}
