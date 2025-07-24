export interface MobileGame {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  description: string
  category: string
  genre: string[]
  rating: number
  reviews: number
  releaseDate: string
  developer: string
  publisher: string
  tags: string[]
  screenshots: string[]
  size: string
  androidId?: string
  iosId?: string
  features: string[]
}

export const mobileGames: MobileGame[] = [
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Clash+of+Clans",
    description: "Join millions of players worldwide as you build your village, raise a clan, and compete.",
    category: "strategy",
    genre: ["Strategy", "Tower Defense", "Multiplayer"],
    rating: 4.5,
    reviews: 125000,
    releaseDate: "2012-08-02",
    developer: "Supercell",
    publisher: "Supercell",
    tags: ["Strategy", "Base Building", "Multiplayer", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "285 MB",
    androidId: "com.supercell.clashofclans",
    iosId: "529479190",
    features: ["Online multiplayer", "In-app purchases", "Cloud save"],
  },
  {
    id: "pokemon-go",
    title: "Pokémon GO",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Pokemon+GO",
    description: "Get on your feet and step into the world of Pokémon GO!",
    category: "adventure",
    genre: ["Adventure", "Augmented Reality", "Collection"],
    rating: 4.2,
    reviews: 89000,
    releaseDate: "2016-07-06",
    developer: "Niantic",
    publisher: "Niantic",
    tags: ["AR", "GPS", "Collection", "Social"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "312 MB",
    androidId: "com.nianticlabs.pokemongo",
    iosId: "1094591345",
    features: ["Location-based", "AR camera", "Social features"],
  },
  {
    id: "candy-crush-saga",
    title: "Candy Crush Saga",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Candy+Crush+Saga",
    description: "The sweetest match 3 puzzle game! Switch and match candies to advance through levels.",
    category: "puzzle",
    genre: ["Puzzle", "Match-3", "Casual"],
    rating: 4.3,
    reviews: 156000,
    releaseDate: "2012-04-12",
    developer: "King",
    publisher: "King",
    tags: ["Match-3", "Puzzle", "Casual", "Colorful"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "156 MB",
    androidId: "com.king.candycrushsaga",
    iosId: "553834731",
    features: ["Thousands of levels", "Social features", "Daily rewards"],
  },
  {
    id: "among-us",
    title: "Among Us",
    price: 4.99,
    originalPrice: 4.99,
    image: "/placeholder.svg?height=300&width=400&text=Among+Us",
    description:
      "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure.",
    category: "social",
    genre: ["Social Deduction", "Multiplayer", "Party"],
    rating: 4.1,
    reviews: 78000,
    releaseDate: "2018-06-15",
    developer: "InnerSloth",
    publisher: "InnerSloth",
    tags: ["Multiplayer", "Social", "Deduction", "Party"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "89 MB",
    androidId: "com.innersloth.spacemafia",
    iosId: "1351168404",
    features: ["Online multiplayer", "Local WiFi", "Cross-platform"],
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Subway+Surfers",
    description: "DASH as fast as you can! DODGE the oncoming trains!",
    category: "arcade",
    genre: ["Arcade", "Endless Runner", "Action"],
    rating: 4.4,
    reviews: 234000,
    releaseDate: "2012-05-24",
    developer: "SYBO Games",
    publisher: "SYBO Games",
    tags: ["Endless Runner", "Arcade", "Colorful", "Fast-paced"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "178 MB",
    androidId: "com.kiloo.subwaysurf",
    iosId: "512939461",
    features: ["Endless gameplay", "Power-ups", "Character customization"],
  },
  {
    id: "call-of-duty-mobile",
    title: "Call of Duty: Mobile",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=COD+Mobile",
    description: "The definitive Call of Duty mobile experience.",
    category: "action",
    genre: ["First-Person Shooter", "Battle Royale", "Multiplayer"],
    rating: 4.2,
    reviews: 167000,
    releaseDate: "2019-10-01",
    developer: "TiMi Studio Group",
    publisher: "Activision Publishing",
    tags: ["FPS", "Battle Royale", "Multiplayer", "Competitive"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "1.8 GB",
    androidId: "com.activision.callofduty.shooter",
    iosId: "1287282214",
    features: ["Battle Royale", "Multiplayer modes", "Controller support"],
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Genshin+Impact",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy.",
    category: "rpg",
    genre: ["Action RPG", "Open World", "Gacha"],
    rating: 4.6,
    reviews: 145000,
    releaseDate: "2020-09-28",
    developer: "miHoYo",
    publisher: "miHoYo",
    tags: ["Open World", "RPG", "Anime", "Gacha"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "4.2 GB",
    androidId: "com.miHoYo.GenshinImpact",
    iosId: "1517783697",
    features: ["Open world exploration", "Co-op multiplayer", "Cross-platform"],
  },
  {
    id: "minecraft-mobile",
    title: "Minecraft",
    price: 6.99,
    originalPrice: 6.99,
    image: "/placeholder.svg?height=300&width=400&text=Minecraft+Mobile",
    description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.",
    category: "sandbox",
    genre: ["Sandbox", "Survival", "Creative"],
    rating: 4.5,
    reviews: 198000,
    releaseDate: "2011-11-17",
    developer: "Mojang Studios",
    publisher: "Microsoft Corporation",
    tags: ["Sandbox", "Building", "Survival", "Creative"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    size: "1.1 GB",
    androidId: "com.mojang.minecraftpe",
    iosId: "479516143",
    features: ["Infinite worlds", "Multiplayer", "Cross-platform"],
  },
]

// Required exports - ALL FUNCTIONS MUST BE PRESENT
export function getAllMobileGames(): MobileGame[] {
  return mobileGames
}

export function getFeaturedMobileGames(): MobileGame[] {
  return mobileGames.slice(0, 4)
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
      game.genre.some((g) => g.toLowerCase().includes(lowercaseQuery)),
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
