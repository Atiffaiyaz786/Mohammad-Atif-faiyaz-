"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { currencies } from "@/lib/currency"
import { useCurrency } from "@/hooks/use-currency"
import { ChevronDown, Globe } from "lucide-react"

export function CurrencySelector() {
  const { currency, changeCurrency, currencyInfo } = useCurrency()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
          <Globe className="h-4 w-4 mr-2" />
          {currencyInfo?.symbol} {currency}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
        {Object.entries(currencies).map(([code, info]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeCurrency(code)}
            className="text-white hover:bg-gray-700 cursor-pointer"
          >
            <span className="mr-2">{info.symbol}</span>
            <span className="mr-2">{code}</span>
            <span className="text-gray-400 text-sm">{info.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
