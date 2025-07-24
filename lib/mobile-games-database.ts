export interface MobileGame {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  description: string
  genre: string[]
  tags: string[]
  rating: number
  reviews: number
  releaseDate: string
  developer: string
  publisher: string
  platforms: string[]
  category: string
  size: string
  androidId?: string
  iosId?: string
  features: string[]
  screenshots: string[]
  ageRating: string
  inAppPurchases: boolean
}

const mobileGames: MobileGame[] = [
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Clash+of+Clans",
    description: "Build your village, raise a clan, and compete in epic Clan Wars!",
    genre: ["Strategy", "Simulation"],
    tags: ["Free to Play", "Strategy", "Multiplayer", "Base Building"],
    rating: 4.5,
    reviews: 2500000,
    releaseDate: "2012-08-02",
    developer: "Supercell",
    publisher: "Supercell",
    platforms: ["Android", "iOS"],
    category: "strategy",
    size: "200 MB",
    androidId: "com.supercell.clashofclans",
    iosId: "529479190",
    features: ["Free-to-play", "Online multiplayer", "In-app purchases"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "10+",
    inAppPurchases: true,
  },
  {
    id: "pokemon-go",
    title: "Pokémon GO",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Pokemon+GO",
    description: "Catch Pokémon in the real world with augmented reality!",
    genre: ["Adventure", "AR"],
    tags: ["Free to Play", "AR", "Location-based", "Collection"],
    rating: 4.2,
    reviews: 1800000,
    releaseDate: "2016-07-06",
    developer: "Niantic",
    publisher: "Niantic",
    platforms: ["Android", "iOS"],
    category: "adventure",
    size: "300 MB",
    androidId: "com.nianticlabs.pokemongo",
    iosId: "1094591345",
    features: ["Free-to-play", "Augmented Reality", "Location-based"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "9+",
    inAppPurchases: true,
  },
  {
    id: "among-us",
    title: "Among Us",
    price: 4.99,
    image: "/placeholder.svg?height=300&width=400&text=Among+Us",
    description: "Play with 4-15 players online or via local WiFi as you attempt to prep your spaceship for departure.",
    genre: ["Social Deduction", "Multiplayer"],
    tags: ["Multiplayer", "Social", "Deduction", "Cross-platform"],
    rating: 4.3,
    reviews: 890000,
    releaseDate: "2018-06-15",
    developer: "InnerSloth",
    publisher: "InnerSloth",
    platforms: ["Android", "iOS", "Windows"],
    category: "social",
    size: "250 MB",
    androidId: "com.innersloth.spacemafia",
    iosId: "1351168404",
    features: ["Cross-platform multiplayer", "Voice chat", "Customization"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "9+",
    inAppPurchases: true,
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Genshin+Impact",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy.",
    genre: ["RPG", "Adventure", "Action"],
    tags: ["Free to Play", "Open World", "Anime", "Gacha"],
    rating: 4.6,
    reviews: 1200000,
    releaseDate: "2020-09-28",
    developer: "miHoYo",
    publisher: "miHoYo",
    platforms: ["Android", "iOS", "Windows", "PlayStation"],
    category: "rpg",
    size: "15 GB",
    androidId: "com.miHoYo.GenshinImpact",
    iosId: "1517783697",
    features: ["Free-to-play", "Cross-platform", "Co-op multiplayer"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "12+",
    inAppPurchases: true,
  },
  {
    id: "call-of-duty-mobile",
    title: "Call of Duty: Mobile",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=COD+Mobile",
    description: "The definitive Call of Duty experience on mobile devices.",
    genre: ["FPS", "Action", "Battle Royale"],
    tags: ["Free to Play", "FPS", "Battle Royale", "Competitive"],
    rating: 4.4,
    reviews: 3200000,
    releaseDate: "2019-10-01",
    developer: "TiMi Studio Group",
    publisher: "Activision",
    platforms: ["Android", "iOS"],
    category: "shooter",
    size: "2 GB",
    androidId: "com.activision.callofduty.shooter",
    iosId: "1287282214",
    features: ["Free-to-play", "Battle Royale", "Multiplayer"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "17+",
    inAppPurchases: true,
  },
  {
    id: "minecraft-mobile",
    title: "Minecraft",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=400&text=Minecraft+Mobile",
    description: "Build, explore and survive in randomly generated worlds!",
    genre: ["Sandbox", "Survival", "Creative"],
    tags: ["Building", "Crafting", "Multiplayer", "Creative"],
    rating: 4.5,
    reviews: 1500000,
    releaseDate: "2011-10-07",
    developer: "Mojang Studios",
    publisher: "Microsoft",
    platforms: ["Android", "iOS"],
    category: "simulation",
    size: "500 MB",
    androidId: "com.mojang.minecraftpe",
    iosId: "479516143",
    features: ["Cross-platform", "Multiplayer", "Creative mode"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "9+",
    inAppPurchases: true,
  },
  {
    id: "pubg-mobile",
    title: "PUBG MOBILE",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=PUBG+Mobile",
    description: "The original Battle Royale experience on mobile.",
    genre: ["Battle Royale", "FPS", "Action"],
    tags: ["Free to Play", "Battle Royale", "Competitive", "Team-Based"],
    rating: 4.2,
    reviews: 2800000,
    releaseDate: "2018-03-19",
    developer: "LightSpeed & Quantum Studios",
    publisher: "Tencent Games",
    platforms: ["Android", "iOS"],
    category: "shooter",
    size: "2.5 GB",
    androidId: "com.tencent.ig",
    iosId: "1330123889",
    features: ["Free-to-play", "Battle Royale", "Voice chat"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "17+",
    inAppPurchases: true,
  },
  {
    id: "candy-crush-saga",
    title: "Candy Crush Saga",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Candy+Crush",
    description: "Match candies to progress through thousands of levels in this sweet puzzle adventure!",
    genre: ["Puzzle", "Casual"],
    tags: ["Free to Play", "Puzzle", "Casual", "Match-3"],
    rating: 4.1,
    reviews: 5600000,
    releaseDate: "2012-04-12",
    developer: "King",
    publisher: "King",
    platforms: ["Android", "iOS"],
    category: "puzzle",
    size: "150 MB",
    androidId: "com.king.candycrushsaga",
    iosId: "553834731",
    features: ["Free-to-play", "Social features", "Thousands of levels"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
    ageRating: "4+",
    inAppPurchases: true,
  },
]

export function getAllMobileGames(): MobileGame[] {
  return mobileGames
}

export function getFeaturedMobileGames(): MobileGame[] {
  return mobileGames.filter((game) => game.rating >= 4.3).slice(0, 6)
}

export function getDealsMobileGames(): MobileGame[] {
  return mobileGames.filter((game) => game.discount && game.discount > 0)
}

export function getNewMobileReleases(): MobileGame[] {
  return mobileGames.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).slice(0, 8)
}

export function getMobileGamesByCategory(category: string): MobileGame[] {
  return mobileGames.filter(
    (game) =>
      game.category.toLowerCase() === category.toLowerCase() ||
      game.genre.some((g) => g.toLowerCase() === category.toLowerCase()),
  )
}

export function searchMobileGames(query: string): MobileGame[] {
  const searchTerm = query.toLowerCase()
  return mobileGames.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm) ||
      game.description.toLowerCase().includes(searchTerm) ||
      game.genre.some((g) => g.toLowerCase().includes(searchTerm)) ||
      game.tags.some((t) => t.toLowerCase().includes(searchTerm)),
  )
}

export function getMobileGameById(id: string): MobileGame | undefined {
  return mobileGames.find((game) => game.id === id)
}

export const mobileCategories = [
  "action",
  "adventure",
  "rpg",
  "strategy",
  "simulation",
  "puzzle",
  "casual",
  "shooter",
  "social",
  "racing",
]

export { mobileGames }
