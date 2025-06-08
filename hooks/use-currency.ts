"use client"

import { useState, useEffect } from "react"
import { detectUserCountry, countryToCurrency, currencies } from "@/lib/currency"

export function useCurrency() {
  const [currency, setCurrency] = useState("USD")
  const [country, setCountry] = useState("US")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function initializeCurrency() {
      try {
        // Check if user has a saved preference
        const savedCurrency = localStorage.getItem("preferred-currency")
        const savedCountry = localStorage.getItem("user-country")

        if (savedCurrency && savedCountry) {
          setCurrency(savedCurrency)
          setCountry(savedCountry)
          setIsLoading(false)
          return
        }

        // Detect user's country
        const detectedCountry = await detectUserCountry()
        const detectedCurrency = countryToCurrency[detectedCountry] || "USD"

        setCountry(detectedCountry)
        setCurrency(detectedCurrency)

        // Save preferences
        localStorage.setItem("user-country", detectedCountry)
        localStorage.setItem("preferred-currency", detectedCurrency)
      } catch (error) {
        console.error("Failed to detect currency:", error)
        setCurrency("USD")
        setCountry("US")
      } finally {
        setIsLoading(false)
      }
    }

    initializeCurrency()
  }, [])

  const changeCurrency = (newCurrency: string) => {
    setCurrency(newCurrency)
    localStorage.setItem("preferred-currency", newCurrency)
  }

  return {
    currency,
    country,
    isLoading,
    changeCurrency,
    currencyInfo: currencies[currency],
  }
}
