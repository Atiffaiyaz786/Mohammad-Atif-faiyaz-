export interface Game {
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
}

export const games: Game[] = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    image: "/placeholder.svg?height=300&width=400&text=Cyberpunk+2077",
    description: "An open-world, action-adventure RPG set in the dark future of Night City.",
    category: "action",
    genre: ["RPG", "Action", "Open World"],
    rating: 4.2,
    reviews: 15420,
    releaseDate: "2020-12-10",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    tags: ["Open World", "RPG", "Cyberpunk", "Action"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
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
  },
  {
    id: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    image: "/placeholder.svg?height=300&width=400&text=The+Witcher+3",
    description: "A story-driven open world RPG set in a visually stunning fantasy universe.",
    category: "rpg",
    genre: ["RPG", "Open World", "Fantasy"],
    rating: 4.8,
    reviews: 28750,
    releaseDate: "2015-05-19",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    tags: ["Open World", "RPG", "Fantasy", "Story Rich"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
        memory: "6 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
        storage: "35 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz",
        memory: "8 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290",
        storage: "35 GB available space",
      },
    },
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "/placeholder.svg?height=300&width=400&text=Red+Dead+Redemption+2",
    description: "An epic tale of life in America's unforgiving heartland.",
    category: "action",
    genre: ["Action", "Adventure", "Open World"],
    rating: 4.6,
    reviews: 22100,
    releaseDate: "2019-11-05",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    tags: ["Open World", "Western", "Story Rich", "Action"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7 SP1 64-bit",
        processor: "Intel Core i5-2500K / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
        storage: "150 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        storage: "150 GB available space",
      },
    },
  },
  {
    id: "grand-theft-auto-v",
    title: "Grand Theft Auto V",
    price: 14.99,
    originalPrice: 29.99,
    discount: 50,
    image: "/placeholder.svg?height=300&width=400&text=GTA+V",
    description: "The biggest, most dynamic and most diverse open world ever created.",
    category: "action",
    genre: ["Action", "Adventure", "Open World"],
    rating: 4.4,
    reviews: 45200,
    releaseDate: "2015-04-14",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    tags: ["Open World", "Crime", "Action", "Multiplayer"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 8.1 64-bit",
        processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core Processor",
        memory: "4 GB RAM",
        graphics: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
        storage: "72 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
        storage: "72 GB available space",
      },
    },
  },
  {
    id: "minecraft",
    title: "Minecraft",
    price: 26.95,
    image: "/placeholder.svg?height=300&width=400&text=Minecraft",
    description: "A game about placing blocks and going on adventures.",
    category: "sandbox",
    genre: ["Sandbox", "Survival", "Creative"],
    rating: 4.7,
    reviews: 38900,
    releaseDate: "2011-11-18",
    developer: "Mojang Studios",
    publisher: "Microsoft Studios",
    tags: ["Sandbox", "Survival", "Creative", "Multiplayer"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7",
        processor: "Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics 4000 / AMD Radeon R5 series",
        storage: "1 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-4690 3.5GHz / AMD A10-7800 APU 3.5 GHz",
        memory: "8 GB RAM",
        graphics: "GeForce 700 Series / AMD Radeon Rx 200 Series",
        storage: "4 GB available space",
      },
    },
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
    category: "rpg",
    genre: ["Action RPG", "Souls-like", "Open World"],
    rating: 4.5,
    reviews: 31200,
    releaseDate: "2022-02-25",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    tags: ["Souls-like", "Open World", "Dark Fantasy", "Difficult"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 11",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB",
        storage: "60 GB available space",
      },
    },
  },
  {
    id: "valorant",
    title: "Valorant",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Valorant",
    description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
    category: "action",
    genre: ["First-Person Shooter", "Tactical", "Competitive"],
    rating: 4.3,
    reviews: 18500,
    releaseDate: "2020-06-02",
    developer: "Riot Games",
    publisher: "Riot Games",
    tags: ["FPS", "Tactical", "Competitive", "Free-to-Play"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core 2 Duo E8400 / AMD Athlon 200GE",
        memory: "4 GB RAM",
        graphics: "Intel HD 4000 / AMD Radeon R5 200",
        storage: "8 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4150 / AMD FX-6300",
        memory: "4 GB RAM",
        graphics: "GeForce GT 730 / AMD Radeon R7 240",
        storage: "8 GB available space",
      },
    },
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    price: 0,
    image: "/placeholder.svg?height=300&width=400&text=Apex+Legends",
    description: "A free-to-play battle royale game where legendary competitors fight for glory, fame, and fortune.",
    category: "action",
    genre: ["Battle Royale", "First-Person Shooter", "Team-Based"],
    rating: 4.1,
    reviews: 25600,
    releaseDate: "2019-02-04",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    tags: ["Battle Royale", "FPS", "Free-to-Play", "Team-Based"],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "Intel Core i3-6300 3.8GHz / AMD FX-4350 4.2GHz",
        memory: "6 GB RAM",
        graphics: "NVIDIA GeForce GT 640 / AMD Radeon HD 7700",
        storage: "22 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3570K / AMD FX-8350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
        storage: "22 GB available space",
      },
    },
  },
]

// Required exports - ALL FUNCTIONS MUST BE PRESENT
export function getAllGames(): Game[] {
  return games
}

export function getFeaturedGames(): Game[] {
  return games.slice(0, 4)
}

export function getDealsGames(): Game[] {
  return games.filter((game) => game.discount && game.discount > 0)
}

export function getNewReleases(): Game[] {
  return games.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).slice(0, 8)
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter((game) => game.category.toLowerCase() === category.toLowerCase())
}

export function searchGames(query: string): Game[] {
  const lowercaseQuery = query.toLowerCase()
  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery) ||
      game.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      game.genre.some((g) => g.toLowerCase().includes(lowercaseQuery)),
  )
}

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id)
}

export const categories = [
  { id: "action", name: "Action", count: games.filter((g) => g.category === "action").length },
  { id: "rpg", name: "RPG", count: games.filter((g) => g.category === "rpg").length },
  { id: "strategy", name: "Strategy", count: games.filter((g) => g.category === "strategy").length },
  { id: "simulation", name: "Simulation", count: games.filter((g) => g.category === "simulation").length },
  { id: "sports", name: "Sports", count: games.filter((g) => g.category === "sports").length },
  { id: "racing", name: "Racing", count: games.filter((g) => g.category === "racing").length },
  { id: "adventure", name: "Adventure", count: games.filter((g) => g.category === "adventure").length },
  { id: "sandbox", name: "Sandbox", count: games.filter((g) => g.category === "sandbox").length },
]
