export interface Game {
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
  systemRequirements: {
    minimum: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
    recommended: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
  }
  features: string[]
  screenshots: string[]
  trailer?: string
  category: string
}

const games: Game[] = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    image: "/placeholder.svg?height=300&width=400&text=Cyberpunk+2077",
    description: "An open-world, action-adventure RPG set in the dark future of Night City.",
    genre: ["RPG", "Action", "Adventure"],
    tags: ["Open World", "Cyberpunk", "Futuristic", "Story Rich"],
    rating: 4.2,
    reviews: 125000,
    releaseDate: "2020-12-10",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    platforms: ["Windows", "PlayStation", "Xbox"],
    category: "action",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3570K or AMD FX-8310",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 780 or AMD Radeon RX 470",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury",
        storage: "70 GB available space",
      },
    },
    features: ["Single-player", "Full controller support", "Steam Achievements"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    image: "/placeholder.svg?height=300&width=400&text=Elden+Ring",
    description:
      "A fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki and George R.R. Martin.",
    genre: ["RPG", "Action", "Adventure"],
    tags: ["Souls-like", "Dark Fantasy", "Difficult", "Open World"],
    rating: 4.8,
    reviews: 89000,
    releaseDate: "2022-02-25",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    platforms: ["Windows", "PlayStation", "Xbox"],
    category: "rpg",
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 11",
        processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 or AMD Radeon RX Vega 56",
        storage: "60 GB available space",
      },
    },
    features: ["Single-player", "Online Co-op", "Steam Achievements"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    image: "/placeholder.svg?height=300&width=400&text=GTA+V",
    description: "An action-adventure game played from either a third-person or first-person perspective.",
    genre: ["Action", "Adventure", "Crime"],
    tags: ["Open World", "Crime", "Multiplayer", "Driving"],
    rating: 4.5,
    reviews: 156000,
    releaseDate: "2013-09-17",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    platforms: ["Windows", "PlayStation", "Xbox"],
    category: "action",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz or AMD Phenom 9850 Quad-Core Processor",
        memory: "4 GB RAM",
        graphics: "NVIDIA 9800 GT 1GB or AMD HD 4870 1GB",
        storage: "72 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5 3470 @ 3.2GHz or AMD X8 FX-8350 @ 4GHz",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 660 2GB or AMD HD 7870 2GB",
        storage: "72 GB available space",
      },
    },
    features: ["Single-player", "Online multiplayer", "Steam Achievements"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "witcher-3",
    title: "The Witcher 3: Wild Hunt",
    price: 9.99,
    originalPrice: 39.99,
    discount: 75,
    image: "/placeholder.svg?height=300&width=400&text=Witcher+3",
    description: "A story-driven open world RPG set in a visually stunning fantasy universe.",
    genre: ["RPG", "Adventure", "Fantasy"],
    tags: ["Open World", "Story Rich", "Fantasy", "Choices Matter"],
    rating: 4.9,
    reviews: 203000,
    releaseDate: "2015-05-19",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    platforms: ["Windows", "PlayStation", "Xbox", "Nintendo Switch"],
    category: "rpg",
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "Intel CPU Core i5-2500K 3.3GHz or AMD CPU Phenom II X4 940",
        memory: "6 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 660 or AMD GPU Radeon HD 7870",
        storage: "35 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel CPU Core i7 3770 3.4 GHz or AMD CPU AMD FX-8350 4 GHz",
        memory: "8 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 770 or AMD GPU Radeon R9 290",
        storage: "35 GB available space",
      },
    },
    features: ["Single-player", "Steam Achievements", "Full controller support"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "/placeholder.svg?height=300&width=400&text=RDR2",
    description: "An epic tale of life in America's unforgiving heartland.",
    genre: ["Action", "Adventure", "Western"],
    tags: ["Open World", "Western", "Story Rich", "Realistic"],
    rating: 4.7,
    reviews: 98000,
    releaseDate: "2019-11-05",
    developer: "Rockstar Studios",
    publisher: "Rockstar Games",
    platforms: ["Windows", "PlayStation", "Xbox"],
    category: "action",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-2500K or AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 770 2GB or AMD Radeon R9 280",
        storage: "150 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4770K or AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 480 4GB",
        storage: "150 GB available space",
      },
    },
    features: ["Single-player", "Online multiplayer", "Steam Achievements"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "minecraft",
    title: "Minecraft",
    price: 26.95,
    image: "/placeholder.svg?height=300&width=400&text=Minecraft",
    description: "A sandbox game where you can build anything you can imagine.",
    genre: ["Sandbox", "Survival", "Creative"],
    tags: ["Building", "Crafting", "Multiplayer", "Creative"],
    rating: 4.6,
    reviews: 234000,
    releaseDate: "2011-11-18",
    developer: "Mojang Studios",
    publisher: "Microsoft Studios",
    platforms: ["Windows", "Mac", "Linux"],
    category: "simulation",
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i3-3210 or AMD A8-7600 APU",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics 4000 or AMD Radeon R5 series",
        storage: "4 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-4690 or AMD A10-7800 APU",
        memory: "8 GB RAM",
        graphics: "GeForce 700 Series or AMD Radeon Rx 200 Series",
        storage: "4 GB available space",
      },
    },
    features: ["Single-player", "Multiplayer", "Cross-platform"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "valorant",
    title: "VALORANT",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=VALORANT",
    description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
    genre: ["FPS", "Tactical", "Competitive"],
    tags: ["Free to Play", "Competitive", "Team-Based", "Tactical"],
    rating: 4.3,
    reviews: 87000,
    releaseDate: "2020-06-02",
    developer: "Riot Games",
    publisher: "Riot Games",
    platforms: ["Windows"],
    category: "shooter",
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core 2 Duo E8400 or AMD Athlon 200GE",
        memory: "4 GB RAM",
        graphics: "Intel HD 4000 or AMD Radeon R5 200",
        storage: "8 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4150 or AMD Ryzen 3 1200",
        memory: "4 GB RAM",
        graphics: "NVIDIA GeForce GT 730 or AMD Radeon R7 240",
        storage: "8 GB available space",
      },
    },
    features: ["Free-to-play", "Competitive multiplayer", "Anti-cheat"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Apex+Legends",
    description: "A free-to-play battle royale game where legendary competitors fight for glory, fame, and fortune.",
    genre: ["Battle Royale", "FPS", "Action"],
    tags: ["Free to Play", "Battle Royale", "Team-Based", "Hero Shooter"],
    rating: 4.1,
    reviews: 145000,
    releaseDate: "2019-02-04",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    platforms: ["Windows", "PlayStation", "Xbox", "Nintendo Switch"],
    category: "shooter",
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "Intel Core i3-6300 3.8GHz or AMD FX-4350 4.2GHz",
        memory: "6 GB RAM",
        graphics: "NVIDIA GeForce GT 640 or Radeon HD 7700",
        storage: "22 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i5 3570K or AMD Ryzen 5",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or AMD Radeon R9 290",
        storage: "22 GB available space",
      },
    },
    features: ["Free-to-play", "Battle Royale", "Cross-platform"],
    screenshots: [
      "/placeholder.svg?height=200&width=300&text=Screenshot+1",
      "/placeholder.svg?height=200&width=300&text=Screenshot+2",
    ],
  },
]

export function getAllGames(): Game[] {
  return games
}

export function getFeaturedGames(): Game[] {
  return games.filter((game) => game.rating >= 4.5).slice(0, 6)
}

export function getDealsGames(): Game[] {
  return games.filter((game) => game.discount && game.discount > 0)
}

export function getNewReleases(): Game[] {
  return games.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).slice(0, 8)
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter(
    (game) =>
      game.category.toLowerCase() === category.toLowerCase() ||
      game.genre.some((g) => g.toLowerCase() === category.toLowerCase()),
  )
}

export function searchGames(query: string): Game[] {
  const searchTerm = query.toLowerCase()
  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm) ||
      game.description.toLowerCase().includes(searchTerm) ||
      game.genre.some((g) => g.toLowerCase().includes(searchTerm)) ||
      game.tags.some((t) => t.toLowerCase().includes(searchTerm)),
  )
}

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id)
}

export const categories = [
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

export { games }
