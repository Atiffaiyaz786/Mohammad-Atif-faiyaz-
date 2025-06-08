"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PaymentMethods } from "@/components/payment-methods"
import { PriceDisplay } from "@/components/price-display"
import { useCurrency } from "@/hooks/use-currency"
import { getBillingInfo, calculateTax, formatTaxDisplay } from "@/lib/billing"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const router = useRouter()
  const { currency, country } = useCurrency()
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
  ])

  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: country,
    address: "",
    city: "",
    postalCode: "",
    vatNumber: "",
  })

  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>(null)

  const billingData = getBillingInfo(billingInfo.country || country)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = calculateTax(subtotal, billingInfo.country || country)
  const total = subtotal + tax

  const handlePaymentComplete = (paymentData: any) => {
    setOrderDetails({
      orderId: `ORD-${Date.now()}`,
      items: cartItems,
      subtotal,
      tax,
      total,
      currency,
      payment: paymentData,
      billingInfo,
      billingData,
      timestamp: new Date().toISOString(),
    })
    setPaymentCompleted(true)
  }

  if (paymentCompleted && orderDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
            <p className="text-gray-400">Thank you for your purchase at PlayJunction</p>
          </div>

          <Card className="bg-gray-800 border-gray-700 mb-6">
            <CardHeader>
              <CardTitle className="text-white">Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Order ID:</span>
                <span className="text-white font-mono">{orderDetails.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment Method:</span>
                <span className="text-white">{orderDetails.payment.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Billing Country:</span>
                <span className="text-white">{orderDetails.billingData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Amount:</span>
                <PriceDisplay priceUSD={orderDetails.total} className="text-white font-bold" />
              </div>
              <Separator className="bg-gray-700" />
              <div className="space-y-2">
                {orderDetails.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.title}</span>
                    <PriceDisplay priceUSD={item.price} className="text-white" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-gray-400">Your game keys will be delivered to your email within 5-10 minutes.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/account">
                <Button className="bg-purple-600 hover:bg-purple-700">View My Games</Button>
              </Link>
              <Link href="/games">
                <Button variant="outline" className="border-gray-600 text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-white">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Billing & Payment */}
        <div className="space-y-6">
          {/* Billing Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Billing Information</CardTitle>
              <CardDescription className="text-gray-400">Enter your billing details for the invoice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={billingInfo.firstName}
                    onChange={(e) => setBillingInfo({ ...billingInfo, firstName: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={billingInfo.lastName}
                    onChange={(e) => setBillingInfo({ ...billingInfo, lastName: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={billingInfo.email}
                  onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-white">
                  Country
                </Label>
                <select
                  id="country"
                  value={billingInfo.country}
                  onChange={(e) => setBillingInfo({ ...billingInfo, country: e.target.value })}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="">Select Country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="JP">Japan</option>
                  <option value="BR">Brazil</option>
                  <option value="MX">Mexico</option>
                </select>
              </div>
              <div>
                <Label htmlFor="address" className="text-white">
                  Address
                </Label>
                <Input
                  id="address"
                  value={billingInfo.address}
                  onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-white">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={billingInfo.city}
                    onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode" className="text-white">
                    Postal Code
                  </Label>
                  <Input
                    id="postalCode"
                    value={billingInfo.postalCode}
                    onChange={(e) => setBillingInfo({ ...billingInfo, postalCode: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
              {billingData.requiresVAT && (
                <div>
                  <Label htmlFor="vatNumber" className="text-white">
                    VAT Number (Optional)
                  </Label>
                  <Input
                    id="vatNumber"
                    value={billingInfo.vatNumber}
                    onChange={(e) => setBillingInfo({ ...billingInfo, vatNumber: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="GB123456789"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Payment Method</CardTitle>
              <CardDescription className="text-gray-400">Choose your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentMethods total={total} onPaymentComplete={handlePaymentComplete} />
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <Card className="bg-gray-800 border-gray-700 sticky top-4">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-2">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-white text-sm">{item.title}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-gray-400 text-sm">Qty: {item.quantity}</span>
                      <PriceDisplay priceUSD={item.price} className="text-white font-bold" />
                    </div>
                  </div>
                </div>
              ))}

              <Separator className="bg-gray-700" />

              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <PriceDisplay priceUSD={subtotal} />
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>{formatTaxDisplay(billingInfo.country || country)}</span>
                  <PriceDisplay priceUSD={tax} />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <PriceDisplay priceUSD={total} />
                </div>
              </div>

              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-300 text-sm">🔒 Secure payment powered by industry-standard encryption</p>
                <p className="text-gray-400 text-xs mt-1">
                  Billing to: {billingData.name} ({billingData.currency})
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
