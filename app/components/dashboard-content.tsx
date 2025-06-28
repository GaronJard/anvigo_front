"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, Eye, DollarSign, ShoppingCart, BarChart3 } from "lucide-react"
import Navigation from "./navigation"
import KeywordGenerator from "./keyword-generator"
import PositionChecker from "./position-checker"
import FeedbackForm from "./feedback-form"

// Mock data (same as before)
const dashboardStats = {
  revenue: { value: 125430, change: 12.5, trend: "up" },
  sales: { value: 1247, change: -3.2, trend: "down" },
  avgCheck: { value: 2340, change: 8.7, trend: "up" },
  visibility: { value: 87, change: 5.1, trend: "up" },
}

const topProducts = [
  {
    id: 1,
    name: "Мужская рубашка классическая",
    image: "/placeholder.svg?height=60&width=60",
    earnings: 15420,
    trend: "up",
    change: 15.2,
  },
  {
    id: 2,
    name: "Женские джинсы slim fit",
    image: "/placeholder.svg?height=60&width=60",
    earnings: 12340,
    trend: "down",
    change: -5.8,
  },
  {
    id: 3,
    name: "Кроссовки спортивные",
    image: "/placeholder.svg?height=60&width=60",
    earnings: 9870,
    trend: "up",
    change: 22.1,
  },
]

const keyQueries = [
  {
    id: 1,
    query: "мужская рубашка белая",
    position: 12,
    competition: "medium",
    movement: 3,
    trend: "up",
  },
  {
    id: 2,
    query: "рубашка классическая",
    position: 8,
    competition: "high",
    movement: -2,
    trend: "down",
  },
  {
    id: 3,
    query: "белая рубашка мужская",
    position: 15,
    competition: "low",
    movement: 5,
    trend: "up",
  },
]

const priceHistory = [
  {
    id: 1,
    product: "Мужская рубашка классическая",
    currentPrice: 2890,
    minPrice: 2450,
    maxPrice: 3200,
    change: -5.2,
  },
  {
    id: 2,
    product: "Женские джинсы slim fit",
    currentPrice: 3450,
    minPrice: 3100,
    maxPrice: 3800,
    change: 2.1,
  },
]

export default function DashboardContent() {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "keyword-generator":
        return <KeywordGenerator />
      case "position-checker":
        return <PositionChecker />
      case "feedback":
        return <FeedbackForm />
      default:
        return <Dashboard />
    }
  }

  const Dashboard = () => (
    <div className="space-y-8">
      {/* Statistics Overview */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Обзор статистики</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/80">Выручка</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₽{dashboardStats.revenue.value.toLocaleString()}</div>
              <div className="flex items-center text-xs text-white/60">
                {dashboardStats.revenue.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-400 mr-1" />
                )}
                {dashboardStats.revenue.change}% за месяц
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/80">Продажи</CardTitle>
              <ShoppingCart className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{dashboardStats.sales.value}</div>
              <div className="flex items-center text-xs text-white/60">
                {dashboardStats.sales.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-400 mr-1" />
                )}
                {Math.abs(dashboardStats.sales.change)}% за месяц
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/80">Средний чек</CardTitle>
              <BarChart3 className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₽{dashboardStats.avgCheck.value}</div>
              <div className="flex items-center text-xs text-white/60">
                <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
                {dashboardStats.avgCheck.change}% за месяц
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/80">Видимость</CardTitle>
              <Eye className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{dashboardStats.visibility.value}%</div>
              <div className="flex items-center text-xs text-white/60">
                <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
                {dashboardStats.visibility.change}% за месяц
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Top Products */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Топ товары</h2>
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-white font-medium">{product.name}</h3>
                      <p className="text-white/60 text-sm">₽{product.earnings.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {product.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                    <span className={`text-sm ${product.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                      {product.trend === "up" ? "+" : ""}
                      {product.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Queries */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Ключевые запросы</h2>
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {keyQueries.map((query) => (
                <div key={query.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{query.query}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-white/60 text-sm">Позиция: {query.position}</span>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          query.competition === "high"
                            ? "bg-red-500/20 text-red-300"
                            : query.competition === "medium"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-green-500/20 text-green-300"
                        }`}
                      >
                        {query.competition === "high"
                          ? "Высокая"
                          : query.competition === "medium"
                            ? "Средняя"
                            : "Низкая"}{" "}
                        конкуренция
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {query.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 text-green-400" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-400" />
                    )}
                    <span className={`text-sm ${query.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                      {Math.abs(query.movement)} поз.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price History */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">История цен</h2>
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {priceHistory.map((item) => (
                <div key={item.id} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-white font-medium mb-3">{item.product}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-white/60 text-sm">Текущая цена</p>
                      <p className="text-white font-bold">₽{item.currentPrice}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Минимальная</p>
                      <p className="text-green-400 font-bold">₽{item.minPrice}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Максимальная</p>
                      <p className="text-red-400 font-bold">₽{item.maxPrice}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Изменение</p>
                      <p className={`font-bold ${item.change > 0 ? "text-green-400" : "text-red-400"}`}>
                        {item.change > 0 ? "+" : ""}
                        {item.change}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        style={{
                          width: `${((item.currentPrice - item.minPrice) / (item.maxPrice - item.minPrice)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>
    </div>
  )
}
