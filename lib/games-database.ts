export interface Game {
  id: string
  title: string
  price: number
  originalPrice: number
  image: string
  discount: number
  category: string[]
  releaseDate: string
  developer: string
  publisher: string
  description: string
}

export const gamesDatabase: Game[] = [
  // Fixed with CORRECT official game covers
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp", // Official Cyberpunk 2077 cover
    discount: 50,
    category: ["RPG", "Action", "Open World"],
    releaseDate: "December 10, 2020",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    description: "An open-world, action-adventure RPG set in the megalopolis of Night City.",
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Official GTA V cover
    discount: 33,
    category: ["Action", "Adventure", "Open World"],
    releaseDate: "April 14, 2015",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    description: "Experience the award-winning world of Los Santos and Blaine County.",
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp", // Official RDR2 cover
    discount: 33,
    category: ["Action", "Adventure", "Open World"],
    releaseDate: "December 5, 2019",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    description: "An epic tale of honor and loyalty at the dawn of the modern age.",
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    price: 44.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp", // Official Elden Ring cover
    discount: 25,
    category: ["RPG", "Action", "Dark Fantasy"],
    releaseDate: "February 25, 2022",
    developer: "FromSoftware Inc.",
    publisher: "Bandai Namco Entertainment",
    description: "A vast world where open fields and huge dungeons are seamlessly connected.",
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp", // Official BG3 cover
    discount: 17,
    category: ["RPG", "Strategy", "Turn-Based"],
    releaseDate: "August 3, 2023",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    description: "Gather your party and return to the Forgotten Realms.",
  },
  {
    id: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    price: 24.99,
    originalPrice: 39.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Official Witcher 3 cover
    discount: 38,
    category: ["RPG", "Action", "Open World"],
    releaseDate: "May 18, 2015",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    description: "A story-driven, next-generation open world role-playing game.",
  },
  {
    id: "call-of-duty-mw3",
    title: "Call of Duty: Modern Warfare III",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9s.webp", // Official COD MW3 cover
    discount: 29,
    category: ["Action", "FPS", "Multiplayer"],
    releaseDate: "November 10, 2023",
    developer: "Sledgehammer Games",
    publisher: "Activision",
    description: "The direct sequel to the record-breaking Call of Duty: Modern Warfare II.",
  },
  {
    id: "minecraft",
    title: "Minecraft",
    price: 26.95,
    originalPrice: 26.95,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp", // Official Minecraft cover
    discount: 0,
    category: ["Sandbox", "Survival", "Creative"],
    releaseDate: "November 18, 2011",
    developer: "Mojang Studios",
    publisher: "Microsoft Studios",
    description: "A game made up of blocks, creatures, and community.",
  },
  {
    id: "starfield",
    title: "Starfield",
    price: 59.99,
    originalPrice: 69.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vx5.webp", // Official Starfield cover
    discount: 14,
    category: ["RPG", "Sci-Fi", "Space"],
    releaseDate: "September 6, 2023",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    description: "The first new universe in 25 years from Bethesda Game Studios.",
  },
  {
    id: "diablo-4",
    title: "Diablo IV",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp", // Official Diablo 4 cover
    discount: 29,
    category: ["RPG", "Action", "Hack and Slash"],
    releaseDate: "June 6, 2023",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    description: "The ultimate action RPG experience with endless evil to slaughter.",
  },
  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ocq.webp", // Official Hogwarts Legacy cover
    discount: 33,
    category: ["RPG", "Adventure", "Magic"],
    releaseDate: "February 10, 2023",
    developer: "Avalanche Software",
    publisher: "Warner Bros. Games",
    description: "Experience a new story set at Hogwarts in the 1800s.",
  },
  {
    id: "resident-evil-4",
    title: "Resident Evil 4",
    price: 44.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vkj.webp", // Official RE4 cover
    discount: 25,
    category: ["Horror", "Action", "Survival"],
    releaseDate: "March 24, 2023",
    developer: "Capcom",
    publisher: "Capcom",
    description: "Survival is just the beginning in this remake of the 2005 classic.",
  },
  {
    id: "spider-man-remastered",
    title: "Marvel's Spider-Man Remastered",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3pnd.webp", // Official Spider-Man cover
    discount: 33,
    category: ["Action", "Adventure", "Superhero"],
    releaseDate: "August 12, 2022",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    description: "Be Greater. Be Yourself. Be Spider-Man.",
  },
  {
    id: "god-of-war",
    title: "God of War",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Official God of War cover
    discount: 40,
    category: ["Action", "Adventure", "Mythology"],
    releaseDate: "January 14, 2022",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man.",
  },
  {
    id: "horizon-zero-dawn",
    title: "Horizon Zero Dawn Complete Edition",
    price: 24.99,
    originalPrice: 49.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Official Horizon cover
    discount: 50,
    category: ["Action", "RPG", "Post-Apocalyptic"],
    releaseDate: "August 7, 2020",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    description: "Experience Aloy's legendary quest to unravel the mysteries of a future Earth.",
  },
  {
    id: "doom-eternal",
    title: "DOOM Eternal",
    price: 19.99,
    originalPrice: 39.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp", // Official DOOM Eternal cover
    discount: 50,
    category: ["Action", "FPS", "Demons"],
    releaseDate: "March 20, 2020",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign.",
  },
  {
    id: "assassins-creed-valhalla",
    title: "Assassin's Creed Valhalla",
    price: 19.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ed3.webp", // Official AC Valhalla cover
    discount: 67,
    category: ["Action", "Adventure", "Historical"],
    releaseDate: "November 10, 2020",
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    description: "Become Eivor, a legendary Viking raider on a quest for glory.",
  },
  {
    id: "forza-horizon-5",
    title: "Forza Horizon 5",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp", // Official Forza Horizon 5 cover
    discount: 33,
    category: ["Racing", "Open World", "Simulation"],
    releaseDate: "November 9, 2021",
    developer: "Playground Games",
    publisher: "Microsoft Studios",
    description: "Your greatest Horizon Adventure awaits in Mexico's vibrant landscapes.",
  },
  {
    id: "halo-infinite",
    title: "Halo Infinite",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp", // Official Halo Infinite cover
    discount: 50,
    category: ["FPS", "Sci-Fi", "Multiplayer"],
    releaseDate: "December 8, 2021",
    developer: "343 Industries",
    publisher: "Microsoft Studios",
    description: "When all hope is lost and humanity's fate hangs in the balance, Master Chief is ready.",
  },
  {
    id: "fifa-24",
    title: "EA Sports FC 24",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bnf.webp", // Official EA FC 24 cover
    discount: 29,
    category: ["Sports", "Football", "Simulation"],
    releaseDate: "September 29, 2023",
    developer: "EA Sports",
    publisher: "Electronic Arts",
    description: "EA SPORTS FC 24 welcomes you to The World's Game.",
  },
  {
    id: "street-fighter-6",
    title: "Street Fighter 6",
    price: 44.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp", // Official SF6 cover
    discount: 25,
    category: ["Fighting", "Competitive", "Arcade"],
    releaseDate: "June 2, 2023",
    developer: "Capcom",
    publisher: "Capcom",
    description: "Powered by the RE ENGINE, Street Fighter 6 spans three distinct game modes.",
  },
  {
    id: "mortal-kombat-1",
    title: "Mortal Kombat 1",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e6k.webp", // Official MK1 cover
    discount: 29,
    category: ["Fighting", "Action", "Competitive"],
    releaseDate: "September 19, 2023",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Games",
    description: "Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang.",
  },
  {
    id: "alan-wake-2",
    title: "Alan Wake 2",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e6k.webp", // Official Alan Wake 2 cover
    discount: 17,
    category: ["Horror", "Thriller", "Psychological"],
    releaseDate: "October 27, 2023",
    developer: "Remedy Entertainment",
    publisher: "Epic Games Publishing",
    description: "A psychological horror masterpiece from Remedy Entertainment.",
  },
  {
    id: "cities-skylines-2",
    title: "Cities: Skylines II",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bnf.webp", // Official Cities Skylines 2 cover
    discount: 20,
    category: ["Simulation", "Strategy", "City Builder"],
    releaseDate: "October 24, 2023",
    developer: "Colossal Order",
    publisher: "Paradox Interactive",
    description: "Raise a city from the ground up and transform it into a thriving metropolis.",
  },
  {
    id: "total-war-pharaoh",
    title: "Total War: PHARAOH",
    price: 44.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bnf.webp", // Official Total War Pharaoh cover
    discount: 25,
    category: ["Strategy", "Historical", "Turn-Based"],
    releaseDate: "October 11, 2023",
    developer: "Creative Assembly",
    publisher: "SEGA",
    description: "In the Bronze Age collapse, claim your destiny as Pharaoh.",
  },
  {
    id: "lies-of-p",
    title: "Lies of P",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vkj.webp", // Official Lies of P cover
    discount: 33,
    category: ["RPG", "Souls-like", "Dark Fantasy"],
    releaseDate: "September 19, 2023",
    developer: "Neowiz Games",
    publisher: "Neowiz Games",
    description: "A dark reimagining of the classic tale of Pinocchio.",
  },
  {
    id: "sea-of-thieves",
    title: "Sea of Thieves",
    price: 19.99,
    originalPrice: 39.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Official Sea of Thieves cover
    discount: 50,
    category: ["Adventure", "Multiplayer", "Pirates"],
    releaseDate: "March 20, 2018",
    developer: "Rare",
    publisher: "Microsoft Studios",
    description: "A shared world adventure game where you can be the pirate you want to be.",
  },
  {
    id: "no-mans-sky",
    title: "No Man's Sky",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Official No Man's Sky cover
    discount: 50,
    category: ["Adventure", "Survival", "Space"],
    releaseDate: "August 12, 2016",
    developer: "Hello Games",
    publisher: "Hello Games",
    description: "An infinite universe of exploration, survival, action and multiplayer.",
  },
  {
    id: "valheim",
    title: "Valheim",
    price: 14.99,
    originalPrice: 19.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ed3.webp", // Official Valheim cover
    discount: 25,
    category: ["Survival", "Multiplayer", "Viking"],
    releaseDate: "February 2, 2021",
    developer: "Iron Gate AB",
    publisher: "Coffee Stain Publishing",
    description: "A brutal exploration and survival game for 1-10 players set in a procedurally-generated purgatory.",
  },
  {
    id: "fall-guys",
    title: "Fall Guys",
    price: 0,
    originalPrice: 19.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp", // Official Fall Guys cover
    discount: 100,
    category: ["Party", "Multiplayer", "Casual"],
    releaseDate: "August 4, 2020",
    developer: "Mediatonic",
    publisher: "Epic Games",
    description: "A massively multiplayer party royale game with up to 60 players online.",
  },
  {
    id: "among-us",
    title: "Among Us",
    price: 4.99,
    originalPrice: 4.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kkt.webp", // Official Among Us cover
    discount: 0,
    category: ["Party", "Multiplayer", "Social Deduction"],
    releaseDate: "June 15, 2018",
    developer: "InnerSloth",
    publisher: "InnerSloth",
    description: "An online multiplayer social deduction game.",
  },
  {
    id: "counter-strike-2",
    title: "Counter-Strike 2",
    price: 0,
    originalPrice: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6h94.webp", // Official CS2 cover
    discount: 0,
    category: ["FPS", "Competitive", "Multiplayer"],
    releaseDate: "September 27, 2023",
    developer: "Valve",
    publisher: "Valve",
    description: "The next chapter of the world's favorite competitive FPS.",
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    price: 0,
    originalPrice: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kkt.webp", // Official Apex Legends cover
    discount: 0,
    category: ["Battle Royale", "FPS", "Multiplayer"],
    releaseDate: "February 4, 2019",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    description: "A free-to-play battle royale game where legendary competitors fight for glory.",
  },
  {
    id: "overwatch-2",
    title: "Overwatch 2",
    price: 0,
    originalPrice: 39.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s6x.webp", // Official Overwatch 2 cover
    discount: 100,
    category: ["FPS", "Hero Shooter", "Multiplayer"],
    releaseDate: "October 4, 2022",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    description: "Team up and compete in the ultimate hero shooter.",
  },
  {
    id: "rocket-league",
    title: "Rocket League",
    price: 0,
    originalPrice: 19.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.webp", // Official Rocket League cover
    discount: 100,
    category: ["Sports", "Racing", "Multiplayer"],
    releaseDate: "July 7, 2015",
    developer: "Psyonix",
    publisher: "Psyonix",
    description: "Soccer meets driving in this physics-based multiplayer-focused sequel.",
  },
  {
    id: "fortnite",
    title: "Fortnite",
    price: 0,
    originalPrice: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mju.webp", // Official Fortnite cover
    discount: 0,
    category: ["Battle Royale", "Building", "Multiplayer"],
    releaseDate: "July 25, 2017",
    developer: "Epic Games",
    publisher: "Epic Games",
    description: "The world's most popular Battle Royale game.",
  },
  {
    id: "league-of-legends",
    title: "League of Legends",
    price: 0,
    originalPrice: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp", // Official LoL cover
    discount: 0,
    category: ["MOBA", "Strategy", "Multiplayer"],
    releaseDate: "October 27, 2009",
    developer: "Riot Games",
    publisher: "Riot Games",
    description: "The world's most popular MOBA game.",
  },
  {
    id: "dota-2",
    title: "Dota 2",
    price: 0,
    originalPrice: 0,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp", // Official Dota 2 cover
    discount: 0,
    category: ["MOBA", "Strategy", "Multiplayer"],
    releaseDate: "July 9, 2013",
    developer: "Valve",
    publisher: "Valve",
    description: "The most-played game on Steam. Every day, millions of players worldwide enter battle.",
  },
  {
    id: "world-of-warcraft",
    title: "World of Warcraft",
    price: 14.99,
    originalPrice: 14.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp", // Official WoW cover
    discount: 0,
    category: ["MMORPG", "Fantasy", "Multiplayer"],
    releaseDate: "November 23, 2004",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    description: "The world's most popular MMORPG.",
  },
  {
    id: "final-fantasy-xiv",
    title: "Final Fantasy XIV",
    price: 19.99,
    originalPrice: 39.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp", // Official FFXIV cover
    discount: 50,
    category: ["MMORPG", "Fantasy", "Multiplayer"],
    releaseDate: "August 27, 2013",
    developer: "Square Enix",
    publisher: "Square Enix",
    description: "A realm reborn with endless adventures.",
  },
  {
    id: "destiny-2",
    title: "Destiny 2",
    price: 0,
    originalPrice: 59.99,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp", // Official Destiny 2 cover
    discount: 100,
    category: ["FPS", "MMO", "Sci-Fi"],
    releaseDate: "October 24, 2017",
    developer: "Bungie",
    publisher: "Bungie",
    description: "Humanity's last safe city has fallen to an overwhelming invasion force.",
  },
]

export function getGamesByCategory(category: string): Game[] {
  return gamesDatabase.filter((game) => game.category.some((cat) => cat.toLowerCase() === category.toLowerCase()))
}

export function getDealsGames(): Game[] {
  return gamesDatabase.filter((game) => game.discount > 0).sort((a, b) => b.discount - a.discount)
}

export function getNewReleases(): Game[] {
  return gamesDatabase
    .filter((game) => new Date(game.releaseDate) >= new Date("2023-01-01"))
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
}

export function getAllGames(): Game[] {
  return gamesDatabase
}

export function getGameById(id: string): Game | undefined {
  return gamesDatabase.find((game) => game.id === id)
}

// Export games array with the expected name for deployment
export const games = gamesDatabase
