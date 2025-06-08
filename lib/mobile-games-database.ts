export interface MobileGame {
  id: string
  title: string
  price: number // Will be 0 for free games
  image: string
  category: string[]
  developer: string
  publisher: string
  description: string
  platform: string[] // Android, iOS, or both
  size: string // App size
  downloads: string // Number of downloads
  rating: number
}

export const mobileGamesDatabase: MobileGame[] = [
  // Popular Battle Royale Games
  {
    id: "bgmi",
    title: "Battlegrounds Mobile India (BGMI)",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/DYEG3HH-M54_2bLw1Sy7VTKnydSfPHGul3Xo25OxDR9yVKkmUkPpR4KyMPRsaQVtgA=w240-h480-rw",
    category: ["Battle Royale", "Action", "Shooter"],
    developer: "Krafton",
    publisher: "Krafton",
    description: "The Indian version of PUBG Mobile with intense battle royale gameplay.",
    platform: ["Android", "iOS"],
    size: "722 MB",
    downloads: "100M+",
    rating: 4.2,
  },
  {
    id: "free-fire",
    title: "Garena Free Fire MAX",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/9zc9s-oKQh0TZV7hNPf1rIHfAEAGYb0ivBbb0l9ZYcIbC_SAH3EZCYMZIQdNR2LF6V4=w240-h480-rw",
    category: ["Battle Royale", "Action", "Shooter"],
    developer: "Garena International",
    publisher: "Garena International",
    description: "Ultimate survival shooter game with 10-minute matches and 50 players.",
    platform: ["Android", "iOS"],
    size: "510 MB",
    downloads: "500M+",
    rating: 4.1,
  },
  {
    id: "cod-mobile",
    title: "Call of Duty: Mobile",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/aOVexQckoyjN2WJp_xy3WuU5kV6NTnLVmIT_9Lj8tpqiTbOQUb1tdIJoLfuCPl0Cvg=w240-h480-rw",
    category: ["FPS", "Action", "Battle Royale"],
    developer: "Activision",
    publisher: "Activision",
    description: "Official Call of Duty experience on mobile with multiplayer and battle royale.",
    platform: ["Android", "iOS"],
    size: "1.5 GB",
    downloads: "100M+",
    rating: 4.3,
  },
  {
    id: "pubg-mobile",
    title: "PUBG Mobile",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=w240-h480-rw",
    category: ["Battle Royale", "Action", "Shooter"],
    developer: "Tencent Games",
    publisher: "Tencent Games",
    description: "The original battle royale experience on mobile.",
    platform: ["Android", "iOS"],
    size: "698 MB",
    downloads: "1B+",
    rating: 4.1,
  },
  {
    id: "apex-legends-mobile",
    title: "Apex Legends Mobile",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/vIGF4eBXvBMSqN1MsNTe5K0DwfT-pu-LQo5_R5Z1tJVuYezLOVyQFvPUQwzRUVKzS4I=w240-h480-rw",
    category: ["Battle Royale", "FPS", "Action"],
    developer: "Electronic Arts",
    publisher: "Electronic Arts",
    description: "Strategic battle royale shooter with unique characters and abilities.",
    platform: ["Android", "iOS"],
    size: "2.1 GB",
    downloads: "10M+",
    rating: 4.0,
  },

  // Popular Casual Games
  {
    id: "candy-crush-saga",
    title: "Candy Crush Saga",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp8TNHMgYYcbkCwsUJCEoeQ=w240-h480-rw",
    category: ["Casual", "Puzzle", "Match-3"],
    developer: "King",
    publisher: "King",
    description: "Switch and match candies in this tasty puzzle adventure.",
    platform: ["Android", "iOS"],
    size: "156 MB",
    downloads: "1B+",
    rating: 4.4,
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/N0UxhBVUmx8s7y3F7Kqre2AcpXyPDKAp8nHjiPPoOONc_sfugHCYMgBQ_J-kpqwEZg=w240-h480-rw",
    category: ["Casual", "Endless Runner", "Arcade"],
    developer: "SYBO Games",
    publisher: "SYBO Games",
    description: "Dash as fast as you can through the subway and escape from the grumpy Inspector.",
    platform: ["Android", "iOS"],
    size: "173 MB",
    downloads: "1B+",
    rating: 4.5,
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/go51JYpTV-SxHGZzBqIWQrPRt0GzwR_zzSnLYcA-mJTBjNHQG1nBRVOgzXUtpGwFwA=w240-h480-rw",
    category: ["Casual", "Endless Runner", "Arcade"],
    developer: "Imangi Studios",
    publisher: "Imangi Studios",
    description: "Navigate perilous cliffs, zip lines, mines and forests as you try to escape with the cursed idol.",
    platform: ["Android", "iOS"],
    size: "114 MB",
    downloads: "500M+",
    rating: 4.3,
  },
  {
    id: "among-us-mobile",
    title: "Among Us",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/VHB9bVB8cTcnqwnu0nJqKYbiutRclnbGxTpwnayKB4vMxZj8pk1220Rg-6oQ68DwAkqO=w240-h480-rw",
    category: ["Social", "Party", "Strategy"],
    developer: "InnerSloth LLC",
    publisher: "InnerSloth LLC",
    description:
      "Work together to prepare your spaceship for departure, but beware as one or more random players among the crew are Impostors.",
    platform: ["Android", "iOS"],
    size: "157 MB",
    downloads: "100M+",
    rating: 4.2,
  },
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3-lCZQFJuFfhZk-Aw-ooMs6PB6x-1znVt9B-fEMHeKH3KtpQm=w240-h480-rw",
    category: ["Strategy", "Building", "MMO"],
    developer: "Supercell",
    publisher: "Supercell",
    description: "Build your village, train your troops and battle with millions of other players online.",
    platform: ["Android", "iOS"],
    size: "193 MB",
    downloads: "500M+",
    rating: 4.5,
  },

  // Popular RPG Games
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/So91qs_eRRralMxUmwOlnJT4CwKxqG9Pp-KbuQyFsrEgRwDnXvNLOFmhrEh4Esv5UfA=w240-h480-rw",
    category: ["RPG", "Open World", "Adventure"],
    developer: "miHoYo",
    publisher: "miHoYo",
    description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy.",
    platform: ["Android", "iOS"],
    size: "15 GB",
    downloads: "100M+",
    rating: 4.3,
  },
  {
    id: "raid-shadow-legends",
    title: "RAID: Shadow Legends",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUbkxUj3gnEHBCJ7uxYg=w240-h480-rw",
    category: ["RPG", "Turn-based", "Fantasy"],
    developer: "Plarium Global Ltd",
    publisher: "Plarium Global Ltd",
    description:
      "Collect over 400 Champions and assemble the perfect team for dungeon runs, arena battles, and story campaigns.",
    platform: ["Android", "iOS"],
    size: "2.8 GB",
    downloads: "50M+",
    rating: 4.1,
  },
  {
    id: "pokemon-go",
    title: "Pokémon GO",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/SVQIX_fYcu5o-TN2ygO-QQUaHgAUjLYwUWB2GGRjfRdXOzVW9ILxgyX0M8hXXwU6RHQ=w240-h480-rw",
    category: ["AR", "Adventure", "Collecting"],
    developer: "Niantic, Inc.",
    publisher: "Niantic, Inc.",
    description: "Venture to the real world to discover and catch Pokémon species.",
    platform: ["Android", "iOS"],
    size: "112 MB",
    downloads: "100M+",
    rating: 4.1,
  },
  {
    id: "mobile-legends",
    title: "Mobile Legends: Bang Bang",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/ha1vofCWS5lFhVe0gabwIetwjT4fUY5vLFgRPBT5XNJvD9-XZgLgIcRNyx-oNCQn4rY=w240-h480-rw",
    category: ["MOBA", "Action", "Strategy"],
    developer: "Moonton",
    publisher: "Moonton",
    description: "5v5 MOBA game designed for mobile with 10-second matchmaking and 10-minute battles.",
    platform: ["Android", "iOS"],
    size: "143 MB",
    downloads: "500M+",
    rating: 4.2,
  },
  {
    id: "roblox-mobile",
    title: "Roblox",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2o8VFljYWQ1a5F_7THrbIx-jN_QZVE5FuGbHtR7wFjNgsuzslnolA=w240-h480-rw",
    category: ["Adventure", "Simulation", "Social"],
    developer: "Roblox Corporation",
    publisher: "Roblox Corporation",
    description: "Millions of user-created worlds to explore, play games, and socialize with friends.",
    platform: ["Android", "iOS"],
    size: "167 MB",
    downloads: "500M+",
    rating: 4.4,
  },

  // Sports Games
  {
    id: "fifa-mobile",
    title: "EA SPORTS FC Mobile",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/Ni0S2Ltuia4c8KXDsHXoK9t0X-ihAzKk_0u7iVT9pCn5Ks7OCuJWGh_eRGCw7pYUruk=w240-h480-rw",
    category: ["Sports", "Football", "Simulation"],
    developer: "Electronic Arts",
    publisher: "Electronic Arts",
    description: "Build your Ultimate Team and compete in authentic football matches on mobile.",
    platform: ["Android", "iOS"],
    size: "1.5 GB",
    downloads: "100M+",
    rating: 4.2,
  },
  {
    id: "8-ball-pool",
    title: "8 Ball Pool",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/bPz1guJ6FTlfWoKEX3OMhk5IXiLTqwzQmGFpHMDGnb0EIDN1L59H6zQB866uQ9RUFQ=w240-h480-rw",
    category: ["Sports", "Billiards", "Multiplayer"],
    developer: "Miniclip.com",
    publisher: "Miniclip.com",
    description: "Play the world's #1 pool game with friends and competitors worldwide.",
    platform: ["Android", "iOS"],
    size: "88 MB",
    downloads: "500M+",
    rating: 4.4,
  },
  {
    id: "wcc3",
    title: "World Cricket Championship 3",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/Cy1Nt3alWN_9irZhw9eJWDIVXzGaIYVAJcbjlKYTZcGLWQJ03kMGkOVygYlZ4fRxvnA=w240-h480-rw",
    category: ["Sports", "Cricket", "Simulation"],
    developer: "Nextwave Multimedia",
    publisher: "Nextwave Multimedia",
    description: "The most complete cricket game with realistic physics and animations.",
    platform: ["Android", "iOS"],
    size: "450 MB",
    downloads: "50M+",
    rating: 4.0,
  },
  {
    id: "asphalt-9",
    title: "Asphalt 9: Legends",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/V0x3OvMK-r8ghp-V7sFVMjbCZ9fYgvQnBGFRfvmH-uhXpnVElr_1pNZIQhPwPlGeRGE=w240-h480-rw",
    category: ["Racing", "Arcade", "Action"],
    developer: "Gameloft SE",
    publisher: "Gameloft SE",
    description: "Take the wheel of over 50 prestigious dream cars and race across spectacular locations.",
    platform: ["Android", "iOS"],
    size: "2.5 GB",
    downloads: "100M+",
    rating: 4.5,
  },
  {
    id: "real-cricket",
    title: "Real Cricket™ 20",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/gKRvPTDGkew-REhsZ0hQwTgUqXW-TeZNYMgpjiwLOHnQQjs1mkSWGIv_FuR_8WnI9ss=w240-h480-rw",
    category: ["Sports", "Cricket", "Simulation"],
    developer: "Nautilus Mobile",
    publisher: "Nautilus Mobile",
    description: "The most complete mobile cricket game with realistic gameplay and tournaments.",
    platform: ["Android", "iOS"],
    size: "350 MB",
    downloads: "100M+",
    rating: 4.2,
  },

  // More games to reach 100+
  {
    id: "brain-test",
    title: "Brain Test: Tricky Puzzles",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRQJvPrGJkE1YOMIlGUdKcmGXRGOjXgJ9-Pp5MQ1f4k=w240-h480-rw",
    category: ["Puzzle", "Brain Training", "Casual"],
    developer: "Unico Studio",
    publisher: "Unico Studio",
    description: "Addictive brain games with tricky puzzles that challenge your mind.",
    platform: ["Android", "iOS"],
    size: "76 MB",
    downloads: "100M+",
    rating: 4.2,
  },
  {
    id: "wordscapes",
    title: "Wordscapes",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXs2yve3Ev4wY=w240-h480-rw",
    category: ["Word", "Puzzle", "Brain Training"],
    developer: "PeopleFun",
    publisher: "PeopleFun",
    description: "A challenging word game that combines word search and crossword puzzles.",
    platform: ["Android", "iOS"],
    size: "85 MB",
    downloads: "100M+",
    rating: 4.6,
  },
  {
    id: "2048",
    title: "2048",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/YU-v_L4Hp_5gzheZEQnYD0pjjCXZzpjFGPUJM-9bCjHPCIQqNYOBfqCXJSvNnPRKYw=w240-h480-rw",
    category: ["Puzzle", "Logic", "Numbers"],
    developer: "Estoty Entertainment",
    publisher: "Estoty Entertainment",
    description: "Join the numbers and get to the 2048 tile in this addictive puzzle game.",
    platform: ["Android", "iOS"],
    size: "25 MB",
    downloads: "100M+",
    rating: 4.4,
  },
  {
    id: "homescapes",
    title: "Homescapes",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/cWG9-bk2_-LRRbAjwLXAWjWpQwEMjhdLRJHkHzUgqQQrEHeFx55Eyh4ZwL2kJT0Fmbs=w240-h480-rw",
    category: ["Puzzle", "Match-3", "Decoration"],
    developer: "Playrix",
    publisher: "Playrix",
    description: "Help Austin the butler renovate the mansion by solving match-3 puzzles.",
    platform: ["Android", "iOS"],
    size: "156 MB",
    downloads: "100M+",
    rating: 4.3,
  },
  {
    id: "gardenscapes",
    title: "Gardenscapes",
    price: 0,
    image:
      "https://play-lh.googleusercontent.com/iOoSEpZsUfjDPUZGoe2n1XdsA-LBKPJN2S8G5jS_84-9PGHJcgQi0JDwGFYIL5qMzf8=w240-h480-rw",
    category: ["Puzzle", "Match-3", "Decoration"],
    developer: "Playrix",
    publisher: "Playrix",
    description: "Restore a beautiful garden to its former glory by completing match-3 levels.",
    platform: ["Android", "iOS"],
    size: "162 MB",
    downloads: "100M+",
    rating: 4.3,
  },
]

export function getMobileGamesByCategory(category: string): MobileGame[] {
  return mobileGamesDatabase.filter((game) => game.category.some((cat) => cat.toLowerCase() === category.toLowerCase()))
}

export function getAllMobileGames(): MobileGame[] {
  return mobileGamesDatabase
}

export function getMobileGameById(id: string): MobileGame | undefined {
  return mobileGamesDatabase.find((game) => game.id === id)
}

export function getPopularMobileGames(): MobileGame[] {
  return mobileGamesDatabase
    .filter((game) => Number.parseInt(game.downloads.replace(/[^\d]/g, "")) >= 100)
    .sort((a, b) => b.rating - a.rating)
}

export function getFreeMobileGames(): MobileGame[] {
  return mobileGamesDatabase.filter((game) => game.price === 0)
}
