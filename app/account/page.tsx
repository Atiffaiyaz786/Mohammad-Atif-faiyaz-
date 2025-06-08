"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, MapPin, Package, Heart, Settings } from "lucide-react"

export default function AccountPage() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Gaming Street, Tech City, TC 12345",
  })

  const [isEditing, setIsEditing] = useState(false)

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 89.97,
      items: [
        { name: "Cyberpunk 2077", price: 29.99 },
        { name: "The Witcher 3: Wild Hunt", price: 24.99 },
        { name: "Elden Ring", price: 44.99 },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "Processing",
      total: 59.98,
      items: [
        { name: "Grand Theft Auto V", price: 19.99 },
        { name: "Red Dead Redemption 2", price: 39.99 },
      ],
    },
  ]

  const wishlistItems = [
    {
      id: "baldurs-gate-3",
      title: "Baldur's Gate 3",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w2t.webp",
    },
    {
      id: "call-of-duty-mw3",
      title: "Call of Duty: Modern Warfare III",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9s.webp",
    },
  ]

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Here you would typically save to a backend
    alert("Profile updated successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">My Account</h1>
          <p className="text-gray-400">Welcome back, {user.firstName}!</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-gray-800 grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="data-[state=active]:bg-purple-600">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-purple-600">
            <Package className="w-4 h-4 mr-2" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="data-[state=active]:bg-purple-600">
            <Heart className="w-4 h-4 mr-2" />
            Wishlist
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Profile Information</CardTitle>
              <CardDescription className="text-gray-400">
                Update your account details and personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    disabled={!isEditing}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    disabled={!isEditing}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white">
                  Address
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="address"
                    value={user.address}
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                {isEditing ? (
                  <>
                    <Button onClick={handleSaveProfile} className="bg-purple-600 hover:bg-purple-700">
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="border-gray-600 text-white"
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)} className="bg-purple-600 hover:bg-purple-700">
                    Edit Profile
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Order History</CardTitle>
              <CardDescription className="text-gray-400">View your recent purchases and order status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-white">Order {order.id}</h3>
                        <p className="text-sm text-gray-400">Placed on {order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={order.status === "Delivered" ? "default" : "secondary"}
                          className={
                            order.status === "Delivered" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                          }
                        >
                          {order.status}
                        </Badge>
                        <p className="text-white font-bold mt-1">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.name}</span>
                          <span className="text-white">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">My Wishlist</CardTitle>
              <CardDescription className="text-gray-400">Games you want to buy later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-gray-700 rounded-lg p-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="font-medium text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white font-bold">${item.price}</span>
                      <span className="text-gray-500 text-sm line-through">${item.originalPrice}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Account Settings</CardTitle>
              <CardDescription className="text-gray-400">Manage your account preferences and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Security</h3>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  Change Password
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  Enable Two-Factor Authentication
                </Button>
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Notifications</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-gray-300">Email notifications for new deals</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-gray-300">Order status updates</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Marketing emails</span>
                  </label>
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Danger Zone</h3>
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
