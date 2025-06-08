"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink, Key, CheckCircle, AlertCircle, Smartphone } from "lucide-react"

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

  const generateGameKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) result += "-"
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  const generateDownloadLinks = () => {
    if (gameType === "mobile") {
      return {
        Android: `https://play.google.com/store/apps/details?id=com.playjunction.${gameId}`,
        iOS: `https://apps.apple.com/app/id${Math.floor(Math.random() * 1000000000)}`,
        APK: `https://cdn.playjunction.com/mobile/${gameId}/latest.apk`,
      }
    } else {
      return {
        Steam: `steam://install/${Math.floor(Math.random() * 1000000)}`,
        "Direct Download": `https://cdn.playjunction.com/games/${gameId}/installer.exe`,
        Torrent: `https://cdn.playjunction.com/games/${gameId}/game.torrent`,
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

      // For mobile games, automatically redirect to store
      if (gameType === "mobile" && platforms.includes("Android")) {
        window.open(links.Android, "_blank")
      }
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsLoading(false)
      setIsDownloading(false)
    }
  }

  const handleDirectDownload = (platform: string, url: string) => {
    // Create a temporary download link
    const link = document.createElement("a")
    link.href = url
    link.download = `${gameTitle}-${platform}.${gameType === "mobile" ? "apk" : "exe"}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show download started notification
    alert(`Download started for ${gameTitle} (${platform})`)
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
                      {platform === "APK" && "Direct APK download"}
                      {platform === "Direct Download" && "Standalone installer"}
                      {platform === "Torrent" && "P2P download"}
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
