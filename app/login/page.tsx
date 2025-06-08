"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, CheckCircle, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // Check if user came from successful signup
    if (searchParams.get("signup") === "success") {
      setShowSuccessMessage(true)
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccessMessage(false), 5000)
    }
  }, [searchParams])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Check if user exists in localStorage (from signup)
          const userData = localStorage.getItem("playjunction_user")
          if (userData) {
            const user = JSON.parse(userData)
            if (user.email === formData.email) {
              resolve(user)
            } else {
              reject(new Error("Invalid credentials"))
            }
          } else {
            // Simulate successful login for demo
            if (formData.email === "demo@playjunction.com" && formData.password === "password123") {
              resolve({ email: formData.email, firstName: "Demo", lastName: "User" })
            } else {
              reject(new Error("Invalid credentials"))
            }
          }
        }, 1500)
      })

      // Success - redirect to account page
      router.push("/account")
    } catch (error: any) {
      if (error.message === "Invalid credentials") {
        setErrors({ general: "Invalid email or password. Please try again." })
      } else {
        setErrors({ general: "Something went wrong. Please try again." })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-purple-500">Play</span>
              <span className="text-white">Junction</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome Back</CardTitle>
          <CardDescription className="text-center text-gray-400">Sign in to your PlayJunction account</CardDescription>
        </CardHeader>
        <CardContent>
          {showSuccessMessage && (
            <div className="mb-4 p-3 bg-green-900/20 border border-green-800 rounded-md flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-green-400 text-sm">Account created successfully! Please sign in.</span>
            </div>
          )}

          {errors.general && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-800 rounded-md flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-red-400" />
              <span className="text-red-400 text-sm">{errors.general}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  required
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Link href="/forgot-password" className="text-sm text-purple-500 hover:text-purple-400">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`pl-10 pr-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs">{errors.password}</p>}
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="text-center mb-4">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-purple-500 hover:text-purple-400 font-medium">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="bg-gray-800 p-3 rounded-md">
              <p className="text-xs text-gray-400 mb-2">Demo credentials for testing:</p>
              <p className="text-xs text-gray-300">Email: demo@playjunction.com</p>
              <p className="text-xs text-gray-300">Password: password123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
