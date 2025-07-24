"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CurrencySelector } from "@/components/currency-selector"
import { Search, Menu, ShoppingCart, User } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  const navigationItems = [
    { href: "/games", label: "All Games" },
    { href: "/deals", label: "Deals" },
    { href: "/new-releases", label: "New Releases" },
    { href: "/mobile-games", label: "Mobile Games" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">PJ</span>
          </div>
          <span className="font-bold text-xl text-white">PlayJunction</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-sm mx-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
          </form>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <CurrencySelector />

          <Link href="/cart">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          <Link href="/account">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
              <User className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-white">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-800">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
