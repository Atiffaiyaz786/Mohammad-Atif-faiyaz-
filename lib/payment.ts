export interface PaymentMethod {
  id: string
  name: string
  type: "card" | "bank" | "wallet" | "crypto"
  icon: string
  countries: string[]
  description: string
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "credit_card",
    name: "Credit/Debit Card",
    type: "card",
    icon: "💳",
    countries: ["*"], // Available worldwide
    description: "Visa, Mastercard, American Express",
  },
  {
    id: "paypal",
    name: "PayPal",
    type: "wallet",
    icon: "🅿️",
    countries: ["*"],
    description: "Pay with your PayPal account",
  },
  {
    id: "upi",
    name: "UPI",
    type: "bank",
    icon: "📱",
    countries: ["IN"],
    description: "Google Pay, PhonePe, Paytm, BHIM",
  },
  {
    id: "net_banking",
    name: "Net Banking",
    type: "bank",
    icon: "🏦",
    countries: ["IN"],
    description: "All major Indian banks supported",
  },
  {
    id: "bank_transfer",
    name: "Bank Transfer",
    type: "bank",
    icon: "🏧",
    countries: ["*"],
    description: "Direct bank account transfer",
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    type: "crypto",
    icon: "₿",
    countries: ["*"],
    description: "Bitcoin, Ethereum, USDT",
  },
]

export function getAvailablePaymentMethods(country: string): PaymentMethod[] {
  return paymentMethods.filter((method) => method.countries.includes("*") || method.countries.includes(country))
}

export interface BankAccount {
  accountNumber: string
  routingNumber: string
  bankName: string
  accountType: "checking" | "savings"
  country: string
}

// Mock bank account for demonstration
export const merchantBankAccounts: Record<string, BankAccount> = {
  IN: {
    accountNumber: "1234567890",
    routingNumber: "SBIN0001234",
    bankName: "State Bank of India",
    accountType: "checking",
    country: "IN",
  },
  US: {
    accountNumber: "9876543210",
    routingNumber: "021000021",
    bankName: "Chase Bank",
    accountType: "checking",
    country: "US",
  },
}
