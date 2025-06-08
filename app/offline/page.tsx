"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">You're offline</h1>
      <p className="text-xl mb-8 max-w-md">
        It looks like you're currently offline. Please check your internet connection and try again.
      </p>
      <div className="space-y-4">
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button
          variant="outline"
          className="block border-purple-600 text-purple-500 hover:bg-purple-950"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </div>
    </div>
  )
}
