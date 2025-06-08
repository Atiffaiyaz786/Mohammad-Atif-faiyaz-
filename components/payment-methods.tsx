"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAvailablePaymentMethods, merchantBankAccounts } from "@/lib/payment"
import { useCurrency } from "@/hooks/use-currency"
import { CreditCard, Smartphone, Building, Bitcoin, Copy, Check } from "lucide-react"

interface PaymentMethodsProps {
  total: number
  onPaymentComplete: (paymentData: any) => void
}

export function PaymentMethods({ total, onPaymentComplete }: PaymentMethodsProps) {
  const { country, currency } = useCurrency()
  const [selectedMethod, setSelectedMethod] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedField, setCopiedField] = useState("")

  const availableMethods = getAvailablePaymentMethods(country)
  const merchantAccount = merchantBankAccounts[country] || merchantBankAccounts["US"]

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(""), 2000)
  }

  const handlePayment = async (method: string, paymentData: any) => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    onPaymentComplete({
      method,
      amount: total,
      currency,
      ...paymentData,
      transactionId: `TXN_${Date.now()}`,
      status: "completed",
    })

    setIsProcessing(false)
  }

  const getMethodIcon = (type: string) => {
    switch (type) {
      case "card":
        return <CreditCard className="h-5 w-5" />
      case "bank":
        return <Building className="h-5 w-5" />
      case "wallet":
        return <Smartphone className="h-5 w-5" />
      case "crypto":
        return <Bitcoin className="h-5 w-5" />
      default:
        return <CreditCard className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {availableMethods.map((method) => (
          <Card
            key={method.id}
            className={`cursor-pointer transition-all ${
              selectedMethod === method.id
                ? "border-purple-500 bg-purple-950/20"
                : "border-gray-700 bg-gray-800 hover:border-gray-600"
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <CardContent className="p-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-2xl">{method.icon}</div>
                <div className="text-sm font-medium text-white">{method.name}</div>
                <div className="text-xs text-gray-400">{method.description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedMethod && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              {availableMethods.find((m) => m.id === selectedMethod)?.name} Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMethod === "credit_card" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardNumber" className="text-white">
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiryDate" className="text-white">
                      Expiry Date
                    </Label>
                    <Input id="expiryDate" placeholder="MM/YY" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cvv" className="text-white">
                      CVV
                    </Label>
                    <Input id="cvv" placeholder="123" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="cardName" className="text-white">
                      Cardholder Name
                    </Label>
                    <Input id="cardName" placeholder="John Doe" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                </div>
                <Button
                  onClick={() => handlePayment("credit_card", { cardNumber: "****1234" })}
                  disabled={isProcessing}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isProcessing ? "Processing..." : `Pay Now`}
                </Button>
              </div>
            )}

            {selectedMethod === "upi" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="upiId" className="text-white">
                    UPI ID
                  </Label>
                  <Input id="upiId" placeholder="yourname@paytm" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-white text-sm mb-2">Or scan QR code with any UPI app:</p>
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-800 text-xs">QR Code</span>
                  </div>
                </div>
                <Button
                  onClick={() => handlePayment("upi", { upiId: "user@paytm" })}
                  disabled={isProcessing}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isProcessing ? "Processing..." : "Pay with UPI"}
                </Button>
              </div>
            )}

            {selectedMethod === "net_banking" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bankSelect" className="text-white">
                    Select Your Bank
                  </Label>
                  <select
                    id="bankSelect"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Choose your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="pnb">Punjab National Bank</option>
                  </select>
                </div>
                <Button
                  onClick={() => handlePayment("net_banking", { bank: "sbi" })}
                  disabled={isProcessing}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isProcessing ? "Redirecting..." : "Continue to Bank"}
                </Button>
              </div>
            )}

            {selectedMethod === "bank_transfer" && (
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-3">Transfer to our bank account:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bank Name:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white">{merchantAccount.bankName}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(merchantAccount.bankName, "bank")}
                          className="h-6 w-6 p-0"
                        >
                          {copiedField === "bank" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Account Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white">{merchantAccount.accountNumber}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(merchantAccount.accountNumber, "account")}
                          className="h-6 w-6 p-0"
                        >
                          {copiedField === "account" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{country === "IN" ? "IFSC Code:" : "Routing Number:"}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white">{merchantAccount.routingNumber}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(merchantAccount.routingNumber, "routing")}
                          className="h-6 w-6 p-0"
                        >
                          {copiedField === "routing" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-600 rounded">
                    <p className="text-yellow-200 text-xs">
                      Please include your order ID in the transfer reference. Your order will be processed within 24
                      hours after payment verification.
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => handlePayment("bank_transfer", { accountNumber: merchantAccount.accountNumber })}
                  disabled={isProcessing}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isProcessing ? "Processing..." : "I have made the transfer"}
                </Button>
              </div>
            )}

            {selectedMethod === "paypal" && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-gray-300 mb-4">You will be redirected to PayPal to complete your payment</p>
                </div>
                <Button
                  onClick={() => handlePayment("paypal", { email: "user@example.com" })}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isProcessing ? "Redirecting..." : "Continue with PayPal"}
                </Button>
              </div>
            )}

            {selectedMethod === "crypto" && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Select Cryptocurrency</Label>
                  <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white mt-1">
                    <option value="btc">Bitcoin (BTC)</option>
                    <option value="eth">Ethereum (ETH)</option>
                    <option value="usdt">Tether (USDT)</option>
                  </select>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-white text-sm mb-2">Send payment to this address:</p>
                  <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                    <span className="text-white text-xs font-mono">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "crypto")}
                      className="h-6 w-6 p-0"
                    >
                      {copiedField === "crypto" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handlePayment("crypto", { currency: "btc" })}
                  disabled={isProcessing}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  {isProcessing ? "Processing..." : "I have sent the payment"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
