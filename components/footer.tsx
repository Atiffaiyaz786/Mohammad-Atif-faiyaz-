import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, CreditCard, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
              <span className="text-purple-500">Play</span>Junction
            </Link>
            <p className="text-gray-400 mb-4">
              Your destination for affordable PC games. Discover the latest titles at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/games" className="text-gray-400 hover:text-purple-500">
                  All Games
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-400 hover:text-purple-500">
                  Deals & Promotions
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-gray-400 hover:text-purple-500">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-gray-400 hover:text-purple-500">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-gray-400 hover:text-purple-500">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-purple-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-purple-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-purple-500">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-purple-500">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Secure Shopping</h3>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-purple-500" />
              <span className="text-gray-400">100% Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-purple-500" />
              <span className="text-gray-400">Multiple Payment Options</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <img src="/placeholder.svg?height=30&width=50&text=Visa" alt="Visa" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50&text=MC" alt="Mastercard" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50&text=Amex" alt="American Express" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50&text=PayPal" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PlayJunction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-purple-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-purple-500 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-purple-500 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
