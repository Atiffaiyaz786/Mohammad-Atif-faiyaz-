"use client"

import { convertPrice, formatPrice } from "@/lib/currency"
import { useCurrency } from "@/hooks/use-currency"

interface PriceDisplayProps {
  priceUSD: number
  originalPriceUSD?: number
  className?: string
}

export function PriceDisplay({ priceUSD, originalPriceUSD, className = "" }: PriceDisplayProps) {
  const { currency, isLoading } = useCurrency()

  if (isLoading) {
    return <span className={className}>Loading...</span>
  }

  const convertedPrice = convertPrice(priceUSD, currency)
  const convertedOriginalPrice = originalPriceUSD ? convertPrice(originalPriceUSD, currency) : null

  return (
    <div className={className}>
      <span className="font-bold">{formatPrice(convertedPrice, currency)}</span>
      {convertedOriginalPrice && convertedOriginalPrice > convertedPrice && (
        <span className="ml-2 text-gray-500 line-through text-sm">{formatPrice(convertedOriginalPrice, currency)}</span>
      )}
    </div>
  )
}
