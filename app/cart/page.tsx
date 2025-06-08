"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { PriceDisplay } from "@/components/price-display"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      price: 29.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp",
      quantity: 1,
    },
    {
      id: "gta-v",
      title: "Grand Theft Auto V",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp",
      quantity: 1,
    },
    {
      id: "elden-ring",
      title: "Elden Ring",
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
      quantity: 1,
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">Looks like you haven't added any games to your cart yet.</p>
        <Link href="/games">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Browse Games</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-700 last:border-b-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-20 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <PriceDisplay priceUSD={item.price} className="text-white font-bold" />
                    <PriceDisplay priceUSD={item.originalPrice} className="text-gray-500 text-sm line-through" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-gray-600 text-white hover:bg-gray-700"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center text-white">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-gray-600 text-white hover:bg-gray-700"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-white font-bold min-w-[80px] text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Input
                placeholder="Promo code"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                Apply Code
              </Button>
            </div>

            <Separator className="bg-gray-700 my-6" />

            <Link href="/checkout">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3">
                Proceed to Checkout
              </Button>
            </Link>

            <div className="mt-4 text-center">
              <Link href="/games" className="text-purple-400 hover:text-purple-300 text-sm">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
