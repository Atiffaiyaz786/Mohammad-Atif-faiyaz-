export interface Currency {
  code: string
  symbol: string
  name: string
  rate: number // Rate relative to USD
}

export const currencies: Record<string, Currency> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee", rate: 83.12 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rate: 0.79 },
  CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar", rate: 1.35 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.52 },
  JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen", rate: 149.5 },
}

export const countryToCurrency: Record<string, string> = {
  US: "USD",
  IN: "INR",
  GB: "GBP",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  CA: "CAD",
  AU: "AUD",
  JP: "JPY",
  BR: "USD", // Default to USD for unsupported currencies
  MX: "USD",
  RU: "USD",
  CN: "USD",
}

export function convertPrice(priceUSD: number, targetCurrency: string): number {
  const currency = currencies[targetCurrency]
  if (!currency) return priceUSD
  return Math.round(priceUSD * currency.rate * 100) / 100
}

export function formatPrice(price: number, currencyCode: string): string {
  const currency = currencies[currencyCode]
  if (!currency) return `$${price.toFixed(2)}`

  // Special formatting for different currencies
  if (currencyCode === "INR") {
    return `${currency.symbol}${Math.round(price)}`
  } else if (currencyCode === "JPY") {
    return `${currency.symbol}${Math.round(price)}`
  } else {
    return `${currency.symbol}${price.toFixed(2)}`
  }
}

export async function detectUserCountry(): Promise<string> {
  try {
    // Try to get country from IP geolocation
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    return data.country_code || "US"
  } catch (error) {
    // Fallback to timezone-based detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (timezone.includes("Asia/Kolkata") || timezone.includes("Asia/Calcutta")) return "IN"
    if (timezone.includes("America/New_York") || timezone.includes("America/Los_Angeles")) return "US"
    if (timezone.includes("Europe/London")) return "GB"
    if (timezone.includes("Europe/Berlin")) return "DE"
    if (timezone.includes("Asia/Tokyo")) return "JP"
    return "US" // Default fallback
  }
}
