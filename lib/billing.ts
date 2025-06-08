export interface CountryBilling {
  code: string
  name: string
  currency: string
  taxRate: number
  taxName: string
  requiresVAT: boolean
}

export const countryBilling: Record<string, CountryBilling> = {
  US: {
    code: "US",
    name: "United States",
    currency: "USD",
    taxRate: 0.08,
    taxName: "Sales Tax",
    requiresVAT: false,
  },
  IN: {
    code: "IN",
    name: "India",
    currency: "INR",
    taxRate: 0.18,
    taxName: "GST",
    requiresVAT: false,
  },
  GB: {
    code: "GB",
    name: "United Kingdom",
    currency: "GBP",
    taxRate: 0.2,
    taxName: "VAT",
    requiresVAT: true,
  },
  DE: {
    code: "DE",
    name: "Germany",
    currency: "EUR",
    taxRate: 0.19,
    taxName: "VAT",
    requiresVAT: true,
  },
  FR: {
    code: "FR",
    name: "France",
    currency: "EUR",
    taxRate: 0.2,
    taxName: "VAT",
    requiresVAT: true,
  },
  CA: {
    code: "CA",
    name: "Canada",
    currency: "CAD",
    taxRate: 0.13,
    taxName: "HST",
    requiresVAT: false,
  },
  AU: {
    code: "AU",
    name: "Australia",
    currency: "AUD",
    taxRate: 0.1,
    taxName: "GST",
    requiresVAT: false,
  },
  JP: {
    code: "JP",
    name: "Japan",
    currency: "JPY",
    taxRate: 0.1,
    taxName: "Consumption Tax",
    requiresVAT: false,
  },
  BR: {
    code: "BR",
    name: "Brazil",
    currency: "USD",
    taxRate: 0.17,
    taxName: "ICMS",
    requiresVAT: false,
  },
  MX: {
    code: "MX",
    name: "Mexico",
    currency: "USD",
    taxRate: 0.16,
    taxName: "IVA",
    requiresVAT: false,
  },
}

export function getBillingInfo(countryCode: string): CountryBilling {
  return countryBilling[countryCode] || countryBilling["US"]
}

export function calculateTax(subtotal: number, countryCode: string): number {
  const billing = getBillingInfo(countryCode)
  return subtotal * billing.taxRate
}

export function formatTaxDisplay(countryCode: string): string {
  const billing = getBillingInfo(countryCode)
  return `${billing.taxName} (${(billing.taxRate * 100).toFixed(0)}%)`
}
