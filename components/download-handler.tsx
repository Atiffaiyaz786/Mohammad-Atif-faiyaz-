"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, Key, CheckCircle, AlertCircle, Smartphone, Info } from "lucide-react"

interface DownloadHandlerProps {
  gameId: string
  gameTitle: string
  gameType: "pc" | "mobile"
  price: number
  platforms?: string[]
}

export function DownloadHandler({ gameId, gameTitle, gameType, price, platforms = [] }: DownloadHandlerProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)
  const [gameKey, setGameKey] = useState("")
  const [downloadLinks, setDownloadLinks] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showDemoNotice, setShowDemoNotice] = useState(false)

  const generateGameKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) result += "-"
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // Use real app IDs for popular games to avoid Play Store errors
  const getRealAppLinks = (gameId: string) => {
    // Map of our game IDs to real app IDs on stores
    const appIdMap: Record<string, { android?: string; ios?: string }> = {
      bgmi: {
        android: "com.pubg.imobile",
        ios: "id1526436837",
      },
      "free-fire": {
        android: "com.dts.freefireth",
        ios: "id1300146617",
      },
      "cod-mobile": {
        android: "com.activision.callofduty.shooter",
        ios: "id1287282214",
      },
      "pubg-mobile": {
        android: "com.tencent.ig",
        ios: "id1330123889",
      },
      "candy-crush-saga": {
        android: "com.king.candycrushsaga",
        ios: "id553834731",
      },
      "subway-surfers": {
        android: "com.kiloo.subwaysurf",
        ios: "id542609961",
      },
      "clash-of-clans": {
        android: "com.supercell.clashofclans",
        ios: "id529479190",
      },
      "among-us-mobile": {
        android: "com.innersloth.spacemafia",
        ios: "id1351168404",
      },
      // Default for games not in our map
      default: {
        android: "com.playjunction.games",
        ios: "id1234567890",
      },
    }

    const appIds = appIdMap[gameId] || appIdMap["default"]

    return {
      Android: appIds.android
        ? `https://play.google.com/store/apps/details?id=${appIds.android}`
        : `https://play.google.com/store/search?q=${encodeURIComponent(gameTitle)}&c=apps`,
      iOS: appIds.ios
        ? `https://apps.apple.com/app/id${appIds.ios}`
        : `https://apps.apple.com/search?term=${encodeURIComponent(gameTitle)}&entity=software`,
      APK: `#demo-apk-download`,
    }
  }

  const generateDownloadLinks = () => {
    if (gameType === "mobile") {
      return getRealAppLinks(gameId)
    } else {
      return {
        Steam: `steam://run/1091500`, // Cyberpunk 2077 Steam ID as example
        "Direct Download": `#demo-download`,
        Torrent: `#demo-torrent`,
      }
    }
  }

  const handleDownload = async () => {
    setIsDownloading(true)
    setIsLoading(true)

    try {
      // Simulate purchase/download process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      if (gameType === "pc" && price > 0) {
        // Generate game key for paid PC games
        const key = generateGameKey()
        setGameKey(key)

        // Store purchase in localStorage
        const purchases = JSON.parse(localStorage.getItem("playjunction_purchases") || "[]")
        purchases.push({
          gameId,
          gameTitle,
          gameKey: key,
          purchaseDate: new Date().toISOString(),
          price,
        })
        localStorage.setItem("playjunction_purchases", JSON.stringify(purchases))
      }

      // Generate download links
      const links = generateDownloadLinks()
      setDownloadLinks(links)
      setDownloadComplete(true)

      // Show demo notice
      setShowDemoNotice(true)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsLoading(false)
      setIsDownloading(false)
    }
  }

  const handleDirectDownload = (platform: string, url: string) => {
    // For demo purposes, show an alert instead of actual download
    if (url.startsWith("#demo")) {
      alert(`This is a demo. In a real app, this would download ${gameTitle} for ${platform}.`)
      return
    }

    // For real links, open in new tab
    window.open(url, "_blank")
  }

  if (downloadComplete) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            {gameType === "pc" ? "Purchase Complete!" : "Download Ready!"}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {gameType === "pc" ? "Your game key and download links are ready" : "Choose your preferred download method"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {showDemoNotice && (
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-400 font-medium">Demo Notice:</p>
                  <p className="text-gray-300 mt-1">
                    This is a demonstration website. The download links will take you to real app stores, but some links
                    may not work as they're for demonstration purposes only.
                  </p>
                </div>
              </div>
            </div>
          )}

          {gameKey && (
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-4 w-4 text-purple-400" />
                <span className="text-white font-medium">Your Game Key:</span>
              </div>
              <div className="bg-gray-900 p-3 rounded font-mono text-green-400 text-center text-lg">{gameKey}</div>
              <p className="text-xs text-gray-400 mt-2">Save this key! You'll need it to activate your game.</p>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-white font-medium">Download Options:</h3>
            {Object.entries(downloadLinks).map(([platform, url]) => (
              <div key={platform} className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  {gameType === "mobile" ? (
                    <Smartphone className="h-5 w-5 text-purple-400" />
                  ) : (
                    <Download className="h-5 w-5 text-purple-400" />
                  )}
                  <div>
                    <div className="text-white font-medium">{platform}</div>
                    <div className="text-xs text-gray-400">
                      {platform === "Steam" && "Launch Steam client"}
                      {platform === "Android" && "Google Play Store"}
                      {platform === "iOS" && "App Store"}
                      {platform === "APK" && "Direct APK download (Demo)"}
                      {platform === "Direct Download" && "Standalone installer (Demo)"}
                      {platform === "Torrent" && "P2P download (Demo)"}
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    if (platform === "Steam" || platform === "Android" || platform === "iOS") {
                      window.open(url, "_blank")
                    } else {
                      handleDirectDownload(platform, url)
                    }
                  }}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {platform === "Steam" || platform === "Android" || platform === "iOS" ? (
                    <>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Open
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>

          {gameType === "pc" && (
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-400 font-medium">Installation Instructions:</p>
                  <ol className="text-gray-300 mt-1 space-y-1 list-decimal list-inside">
                    <li>Download the game installer</li>
                    <li>Run the installer as administrator</li>
                    <li>Enter your game key when prompted</li>
                    <li>Follow the installation wizard</li>
                    <li>Launch and enjoy your game!</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {gameType === "mobile" && (
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Smartphone className="h-4 w-4 text-green-400 mt-0.5" />
                <div className="text-sm">
                  <p className="text-green-400 font-medium">Installation Tips:</p>
                  <ul className="text-gray-300 mt-1 space-y-1 list-disc list-inside">
                    <li>For APK: Enable "Unknown Sources" in Android settings</li>
                    <li>Recommended: Download from official app stores</li>
                    <li>Game is completely free to play</li>
                    <li>No registration required</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`w-full ${
        gameType === "mobile" ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"
      } text-white`}
      size="lg"
    >
      {isDownloading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          {gameType === "pc" ? "Processing Purchase..." : "Preparing Download..."}
        </div>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          {gameType === "pc" ? (price > 0 ? `Buy Now - $${price}` : "Download Free") : "Download Free"}
        </>
      )}
    </Button>
  )
}
