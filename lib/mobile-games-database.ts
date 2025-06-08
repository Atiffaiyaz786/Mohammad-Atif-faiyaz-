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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp", // Official BGMI cover
    category: ["Battle Royale", "Action", "Shooter"],
    developer: "Krafton",
    publisher: "Krafton",
    description:
      "The Indian version of PUBG Mobile with intense battle royale gameplay featuring 100 players on a massive 8x8 km map.",
    platform: ["Android", "iOS"],
    size: "722 MB",
    downloads: "100M+",
    rating: 4.2,
  },
  {
    id: "free-fire",
    title: "Garena Free Fire MAX",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp", // Official Free Fire cover
    category: ["Battle Royale", "Action", "Shooter"],
    developer: "Garena International",
    publisher: "Garena International",
    description:
      "Ultimate survival shooter game with 10-minute matches and 50 players. Enhanced graphics and exclusive content.",
    platform: ["Android", "iOS"],
    size: "510 MB",
    downloads: "500M+",
    rating: 4.1,
  },
  {
    id: "cod-mobile",
    title: "Call of Duty: Mobile",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Official COD Mobile cover
    category: ["FPS", "Action", "Battle Royale"],
    developer: "Activision",
    publisher: "Activision",
    description:
      "Official Call of Duty experience on mobile with multiplayer modes, battle royale, and iconic maps from the franchise.",
    platform: ["Android", "iOS"],
    size: "1.5 GB",
    downloads: "100M+",
    rating: 4.3,
  },
  {
    id: "pubg-mobile",
    title: "PUBG Mobile",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp", // Official PUBG Mobile cover
    category: ["Battle Royale", "Action", "Shooter"],
    developer: "Tencent Games",
    publisher: "Tencent Games",
    description: "The original battle royale experience on mobile with realistic graphics and intense gameplay.",
    platform: ["Android", "iOS"],
    size: "698 MB",
    downloads: "1B+",
    rating: 4.1,
  },
  {
    id: "apex-legends-mobile",
    title: "Apex Legends Mobile",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vx5.webp", // Official Apex Legends cover
    category: ["Battle Royale", "FPS", "Action"],
    developer: "Electronic Arts",
    publisher: "Electronic Arts",
    description: "Strategic battle royale shooter with unique characters and abilities. Team up and fight for glory.",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp", // Candy Crush cover
    category: ["Casual", "Puzzle", "Match-3"],
    developer: "King",
    publisher: "King",
    description: "Switch and match candies in this tasty puzzle adventure with thousands of levels.",
    platform: ["Android", "iOS"],
    size: "156 MB",
    downloads: "1B+",
    rating: 4.4,
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Subway Surfers cover
    category: ["Casual", "Endless Runner", "Arcade"],
    developer: "SYBO Games",
    publisher: "SYBO Games",
    description: "Dash as fast as you can through the subway and escape from the grumpy Inspector and his dog.",
    platform: ["Android", "iOS"],
    size: "173 MB",
    downloads: "1B+",
    rating: 4.5,
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp", // Temple Run 2 cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kkt.webp", // Among Us cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s6x.webp", // Clash of Clans cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.webp", // Official Genshin Impact cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mju.webp", // RAID cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp", // Pokemon GO cover
    category: ["AR", "Adventure", "Collecting"],
    developer: "Niantic, Inc.",
    publisher: "Niantic, Inc.",
    description: "Venture to the real world to discover and catch Pokémon species using augmented reality.",
    platform: ["Android", "iOS"],
    size: "112 MB",
    downloads: "100M+",
    rating: 4.1,
  },
  {
    id: "mobile-legends",
    title: "Mobile Legends: Bang Bang",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9s.webp", // Mobile Legends cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6h94.webp", // Roblox cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vkj.webp", // FIFA Mobile cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ocq.webp", // 8 Ball Pool cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e6k.webp", // WCC3 cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp", // Asphalt 9 cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp", // Real Cricket cover
    category: ["Sports", "Cricket", "Simulation"],
    developer: "Nautilus Mobile",
    publisher: "Nautilus Mobile",
    description: "The most complete mobile cricket game with realistic gameplay and tournaments.",
    platform: ["Android", "iOS"],
    size: "350 MB",
    downloads: "100M+",
    rating: 4.2,
  },

  // More popular games
  {
    id: "brain-test",
    title: "Brain Test: Tricky Puzzles",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Brain Test cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp", // Wordscapes cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp", // 2048 cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Homescapes cover
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp", // Gardenscapes cover
    category: ["Puzzle", "Match-3", "Decoration"],
    developer: "Playrix",
    publisher: "Playrix",
    description: "Restore a beautiful garden to its former glory by completing match-3 levels.",
    platform: ["Android", "iOS"],
    size: "162 MB",
    downloads: "100M+",
    rating: 4.3,
  },
  {
    id: "clash-royale",
    title: "Clash Royale",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s6x.webp", // Clash Royale cover
    category: ["Strategy", "Card", "Real-time"],
    developer: "Supercell",
    publisher: "Supercell",
    description: "Collect and upgrade dozens of cards featuring Clash of Clans troops, spells and defenses.",
    platform: ["Android", "iOS"],
    size: "134 MB",
    downloads: "100M+",
    rating: 4.2,
  },
  {
    id: "brawl-stars",
    title: "Brawl Stars",
    price: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.webp", // Brawl Stars cover
    category: ["Action", "MOBA", "Shooter"],
    developer: "Supercell",
    publisher: "Supercell",
    description: "Fast-paced 3v3 multiplayer battles with unique characters and abilities.",
    platform: ["Android", "iOS"],
    size: "158 MB",
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
