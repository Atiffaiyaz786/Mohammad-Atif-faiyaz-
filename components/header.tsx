"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, Menu, User, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { CurrencySelector } from "@/components/currency-selector"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 lg:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-950 text-white border-gray-800">
              <div className="grid gap-6 py-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-purple-500">Play</span>Junction
                </Link>
                <div className="grid gap-4">
                  <Link href="/games" className="text-base hover:text-purple-400">
                    All Games
                  </Link>
                  <Link href="/deals" className="text-base hover:text-purple-400">
                    Deals
                  </Link>
                  <Link href="/new-releases" className="text-base hover:text-purple-400">
                    New Releases
                  </Link>
                  <Link href="/coming-soon" className="text-base hover:text-purple-400">
                    Coming Soon
                  </Link>
                  <Link href="/mobile-games" className="text-base hover:text-purple-400">
                    Mobile Games
                  </Link>
                </div>
                <div className="grid gap-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full border-purple-600 text-purple-500 hover:bg-purple-950">
                      <LogIn className="mr-2 h-4 w-4" /> Log In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-purple-500">Play</span>Junction
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800 hover:text-purple-400">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-900 text-white">
                    {[
                      { title: "Action", href: "/games?category=action" },
                      { title: "Adventure", href: "/games?category=adventure" },
                      { title: "RPG", href: "/games?category=rpg" },
                      { title: "Strategy", href: "/games?category=strategy" },
                      { title: "Simulation", href: "/games?category=simulation" },
                      { title: "Sports", href: "/games?category=sports" },
                      { title: "Racing", href: "/games?category=racing" },
                      { title: "Indie", href: "/games?category=indie" },
                    ].map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-purple-400"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/deals" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-gray-800 hover:text-purple-400",
                    )}
                  >
                    Deals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/new-releases" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-gray-800 hover:text-purple-400",
                    )}
                  >
                    New Releases
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/coming-soon" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-gray-800 hover:text-purple-400",
                    )}
                  >
                    Coming Soon
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/mobile-games" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white hover:bg-gray-800 hover:text-purple-400",
                    )}
                  >
                    Mobile Games
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search games..."
                className="w-[200px] md:w-[300px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:bg-gray-800"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <CurrencySelector />
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-purple-600 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <div className="hidden md:flex gap-2">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:bg-gray-800">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
            </Link>
          </div>
          <Link href="/account" className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
