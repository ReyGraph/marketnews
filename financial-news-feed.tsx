"use client"

import { useState, useEffect } from "react"
import { Search, TrendingUp, Clock, ChevronRight, Star, Bell, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const newsItems = [
  {
    id: 1,
    title: "Tesla, Alphabet, and Amazon in the Spotlight: Surging Developments Hint at Soaring Stock Prices!",
    stocks: ["TSLA", "GOOGL", "AMZN", "NVDA", "AAPL"],
    time: "Today, 4:39 PM",
    trend: "up",
    priority: "high",
  },
  {
    id: 2,
    title: "Surging Defense Needs Could Skyrocket These Three Stocks — Is Your Portfolio Ready?",
    stocks: ["BAESY", "LMT", "RTX", "NOC"],
    time: "Today, 12:52 PM",
    trend: "up",
    priority: "medium",
  },
  {
    id: 3,
    title: "Is Your Portfolio Ready? Amazon, Apple, and Alphabet Set for Unprecedented Growth!",
    stocks: ["AMZN", "AAPL", "GOOGL"],
    time: "Today, 9:05 AM",
    trend: "up",
    priority: "high",
  },
  {
    id: 4,
    title: "Surging Vaccine Demand Amid New Health Guidelines: Are These 3 Stocks Set for a Massive Uptick?",
    stocks: ["NVAX", "PFE", "MRNA", "JNJ"],
    time: "Today, 5:18 AM",
    trend: "up",
    priority: "medium",
  },
  {
    id: 5,
    title: "Cyberattacks Surge: Is This the Breakout Moment for These Tech Stocks?",
    stocks: ["CRWD", "ZS", "OKTA", "PANW"],
    time: "Yesterday, 11:45 PM",
    trend: "up",
    priority: "low",
  },
]

const TrendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-purple-300">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function FinancialNewsFeed() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(newsItems.map((item) => item.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const filteredNews = newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stocks.some((stock) => stock.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Market Intelligence</h1>
              <p className="text-gray-400">Real-time financial insights and stock analysis</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white rounded-xl"
              >
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white rounded-xl"
              >
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search stocks, companies, or news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </div>

        {/* News Feed */}
        <div className="space-y-4">
          {filteredNews.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                animatedItems.includes(item.id) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Priority Indicator */}
              {item.priority === "high" && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3 leading-relaxed group-hover:text-purple-200 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Stock Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.stocks.slice(0, 4).map((stock, stockIndex) => (
                        <div
                          key={stock}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-lg text-sm font-medium text-purple-200 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                          style={{
                            animationDelay: `${stockIndex * 50}ms`,
                          }}
                        >
                          <StockIcon />
                          {stock}
                        </div>
                      ))}
                      {item.stocks.length > 4 && (
                        <div className="flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-gray-300">
                          +{item.stocks.length - 4} more
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 ml-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-lg">
                      <TrendIcon />
                      <span className="text-sm font-medium text-emerald-300">Bullish</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Time and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <Star className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <TrendingUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            Load More Insights
          </Button>
        </div>
      </div>
    </div>
  )
}
