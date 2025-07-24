export interface MobileGame {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  description: string
  category: string
  genre: string
  rating: number
  reviews: number
  releaseDate: string
  developer: string
  publisher: string
  tags: string[]
  screenshots: string[]
  size: string
  version: string
  compatibility: string
  iosAppId?: string
  androidPackage?: string
}

export const mobileGames: MobileGame[] = [
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Clash+of+Clans",
    description:
      "Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars!",
    category: "strategy",
    genre: "Strategy",
    rating: 4.5,
    reviews: 2500000,
    releaseDate: "2012-08-02",
    developer: "Supercell",
    publisher: "Supercell",
    tags: ["Strategy", "Multiplayer", "Base Building", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "285 MB",
    version: "15.83.27",
    compatibility: "iOS 9.0+ / Android 4.1+",
    iosAppId: "529479190",
    androidPackage: "com.supercell.clashofclans",
  },
  {
    id: "pokemon-go",
    title: "Pokémon GO",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Pokemon+GO",
    description: "Join Trainers across the globe who are discovering Pokémon as they explore the world around them.",
    category: "adventure",
    genre: "Adventure",
    rating: 4.1,
    reviews: 15000000,
    releaseDate: "2016-07-06",
    developer: "Niantic",
    publisher: "Niantic",
    tags: ["AR", "Adventure", "Location-Based", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "312 MB",
    version: "0.291.0",
    compatibility: "iOS 12.0+ / Android 6.0+",
    iosAppId: "1094591345",
    androidPackage: "com.nianticlabs.pokemongo",
  },
  {
    id: "candy-crush-saga",
    title: "Candy Crush Saga",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Candy+Crush+Saga",
    description: "Switch and match Candies in this tasty puzzle adventure to progress to the next level.",
    category: "puzzle",
    genre: "Puzzle",
    rating: 4.3,
    reviews: 8500000,
    releaseDate: "2012-04-12",
    developer: "King",
    publisher: "King",
    tags: ["Puzzle", "Match-3", "Casual", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "156 MB",
    version: "1.245.0.1",
    compatibility: "iOS 10.0+ / Android 4.4+",
    iosAppId: "553834731",
    androidPackage: "com.king.candycrushsaga",
  },
  {
    id: "among-us",
    title: "Among Us",
    price: 4.99,
    originalPrice: 4.99,
    image: "/placeholder.svg?height=300&width=400&text=Among+Us",
    description: "Play with 4-15 players online or via local WiFi as you attempt to prep your spaceship for departure.",
    category: "social",
    genre: "Social Deduction",
    rating: 4.2,
    reviews: 1200000,
    releaseDate: "2018-06-15",
    developer: "InnerSloth LLC",
    publisher: "InnerSloth LLC",
    tags: ["Multiplayer", "Social Deduction", "Party", "Cross-Platform"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "250 MB",
    version: "2023.11.28",
    compatibility: "iOS 10.0+ / Android 4.2+",
    iosAppId: "1351168404",
    androidPackage: "com.innersloth.spacemafia",
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Genshin+Impact",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy.",
    category: "rpg",
    genre: "Action RPG",
    rating: 4.6,
    reviews: 3200000,
    releaseDate: "2020-09-28",
    developer: "miHoYo",
    publisher: "miHoYo",
    tags: ["Open World", "RPG", "Gacha", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "18.5 GB",
    version: "4.2.0",
    compatibility: "iOS 9.0+ / Android 7.0+",
    iosAppId: "1517783697",
    androidPackage: "com.miHoYo.GenshinImpact",
  },
  {
    id: "call-of-duty-mobile",
    title: "Call of Duty: Mobile",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Call+of+Duty+Mobile",
    description: "Play iconic multiplayer maps and modes anytime, anywhere.",
    category: "action",
    genre: "First-Person Shooter",
    rating: 4.4,
    reviews: 5800000,
    releaseDate: "2019-10-01",
    developer: "TiMi Studio Group",
    publisher: "Activision Publishing",
    tags: ["FPS", "Battle Royale", "Multiplayer", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "3.5 GB",
    version: "1.0.36",
    compatibility: "iOS 9.0+ / Android 5.1+",
    iosAppId: "1287282214",
    androidPackage: "com.activision.callofduty.shooter",
  },
  {
    id: "minecraft-mobile",
    title: "Minecraft",
    price: 6.99,
    originalPrice: 6.99,
    image: "/placeholder.svg?height=300&width=400&text=Minecraft+Mobile",
    description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.",
    category: "sandbox",
    genre: "Sandbox",
    rating: 4.5,
    reviews: 2100000,
    releaseDate: "2011-11-17",
    developer: "Mojang Studios",
    publisher: "Microsoft Corporation",
    tags: ["Sandbox", "Creative", "Survival", "Cross-Platform"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "1.2 GB",
    version: "1.20.40",
    compatibility: "iOS 10.0+ / Android 4.2+",
    iosAppId: "479516143",
    androidPackage: "com.mojang.minecraftpe",
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Subway+Surfers",
    description:
      "DASH as fast as you can! DODGE the oncoming trains! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.",
    category: "arcade",
    genre: "Endless Runner",
    rating: 4.4,
    reviews: 12000000,
    releaseDate: "2012-05-24",
    developer: "SYBO",
    publisher: "SYBO",
    tags: ["Endless Runner", "Arcade", "Casual", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "180 MB",
    version: "3.17.1",
    compatibility: "iOS 9.0+ / Android 4.4+",
    iosAppId: "512939461",
    androidPackage: "com.kiloo.subwaysurf",
  },
]

// Required exports
export function getAllMobileGames(): MobileGame[] {
  return mobileGames
}

export function getFeaturedMobileGames(): MobileGame[] {
  return mobileGames.slice(0, 4)
}

export function getDealsMobileGames(): MobileGame[] {
  return mobileGames.filter((game) => game.discount && game.discount > 0)
}

export function getNewMobileReleases(): MobileGame[] {
  return mobileGames.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).slice(0, 8)
}

export function getMobileGamesByCategory(category: string): MobileGame[] {
  return mobileGames.filter((game) => game.category.toLowerCase() === category.toLowerCase())
}

export function searchMobileGames(query: string): MobileGame[] {
  const lowercaseQuery = query.toLowerCase()
  return mobileGames.filter(
    (game) =>
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery) ||
      game.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      game.genre.toLowerCase().includes(lowercaseQuery),
  )
}

export function getMobileGameById(id: string): MobileGame | undefined {
  return mobileGames.find((game) => game.id === id)
}

export const mobileCategories = [
  { id: "action", name: "Action", count: mobileGames.filter((g) => g.category === "action").length },
  { id: "rpg", name: "RPG", count: mobileGames.filter((g) => g.category === "rpg").length },
  { id: "strategy", name: "Strategy", count: mobileGames.filter((g) => g.category === "strategy").length },
  { id: "puzzle", name: "Puzzle", count: mobileGames.filter((g) => g.category === "puzzle").length },
  { id: "arcade", name: "Arcade", count: mobileGames.filter((g) => g.category === "arcade").length },
  { id: "adventure", name: "Adventure", count: mobileGames.filter((g) => g.category === "adventure").length },
  { id: "social", name: "Social", count: mobileGames.filter((g) => g.category === "social").length },
  { id: "sandbox", name: "Sandbox", count: mobileGames.filter((g) => g.category === "sandbox").length },
]
