"use client"

import { useState, useEffect } from "react"
import { Search, Bell, TrendingUp, Clock, ChevronRight, Star, MoreHorizontal } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Tesla, Alphabet, and Amazon in the Spotlight: Surging Developments Hint at Soaring Stock Prices!",
    stocks: ["TSLA", "GOOGL", "AMZN", "NVDA"],
    time: "Today, 4:39 PM",
    featured: true,
    category: "Tech Giants",
  },
  {
    id: 2,
    title: "Surging Defense Needs Could Skyrocket These Three Stocks — Is Your Portfolio Ready?",
    stocks: ["BAESY", "LMT", "RTX", "NOC"],
    time: "Today, 12:52 PM",
    featured: false,
    category: "Defense",
  },
  {
    id: 3,
    title: "Is Your Portfolio Ready? Amazon, Apple, and Alphabet Set for Unprecedented Growth!",
    stocks: ["AMZN", "AAPL", "GOOGL"],
    time: "Today, 9:05 AM",
    featured: true,
    category: "Growth Stocks",
  },
  {
    id: 4,
    title: "Surging Vaccine Demand Amid New Health Guidelines: Are These 3 Stocks Set for a Massive Uptick?",
    stocks: ["NVAX", "PFE", "MRNA", "JNJ"],
    time: "Today, 5:18 AM",
    featured: false,
    category: "Healthcare",
  },
  {
    id: 5,
    title: "Cyberattacks Surge: Is This the Breakout Moment for These Tech Stocks?",
    stocks: ["CRWD", "ZS", "OKTA"],
    time: "Yesterday, 11:45 PM",
    featured: false,
    category: "Cybersecurity",
  },
]

export default function FinancialNewsApp() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredNews = newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stocks.some((stock) => stock.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="px-5 pt-14 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Market Pulse</h1>
            <p className="text-gray-400 text-base font-medium">Real-time financial insights</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-11 h-11 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
              <Bell className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
            </button>
            <button className="w-11 h-11 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="What's your big investment idea?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-5 bg-gray-900 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-200 shadow-lg font-medium"
          />
        </div>
      </div>

      {/* News Cards */}
      <div className="px-5 space-y-5 pb-10">
        {filteredNews.map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-3xl p-6 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-95 ${
              item.featured
                ? "bg-gradient-to-br from-purple-600 to-purple-700 shadow-purple-500/25"
                : "bg-gray-900 shadow-black/50"
            } ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            {/* Category Badge */}
            <div className="flex items-center justify-between mb-4">
              <div
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide ${
                  item.featured
                    ? "bg-white/20 text-white"
                    : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                }`}
              >
                {item.category}
              </div>
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  item.featured ? "bg-white/20 hover:bg-white/30" : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <Star className={`w-4 h-4 ${item.featured ? "text-white" : "text-gray-400"}`} />
              </button>
            </div>

            {/* Title */}
            <h3 className={`font-bold text-lg leading-tight mb-5 ${item.featured ? "text-white" : "text-white"}`}>
              {item.title}
            </h3>

            {/* Stock Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.stocks.slice(0, 4).map((stock) => (
                <div
                  key={stock}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    item.featured
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30"
                  }`}
                >
                  {stock}
                </div>
              ))}
              {item.stocks.length > 4 && (
                <div
                  className={`px-4 py-2 rounded-xl text-sm font-medium ${
                    item.featured ? "bg-white/15 text-white/80" : "bg-gray-800 text-gray-400"
                  }`}
                >
                  +{item.stocks.length - 4} more
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${item.featured ? "text-white/70" : "text-gray-500"}`} />
                <span className={`text-sm font-medium ${item.featured ? "text-white/70" : "text-gray-500"}`}>
                  {item.time}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    item.featured ? "bg-white/20 hover:bg-white/30" : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <TrendingUp className={`w-4 h-4 ${item.featured ? "text-white" : "text-gray-400"}`} />
                </button>
                <ChevronRight
                  className={`w-5 h-5 transition-transform hover:translate-x-1 ${
                    item.featured ? "text-white/70" : "text-gray-500"
                  }`}
                />
              </div>
            </div>

            {/* Subtle glow effect for featured cards */}
            {item.featured && (
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/10 to-purple-600/10 pointer-events-none" />
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="px-5 pb-10">
        <button className="w-full h-14 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-2xl text-white font-bold text-base transition-all duration-200 shadow-lg shadow-purple-500/25 active:scale-95">
          Load More Insights
        </button>
      </div>

      {/* Bottom Safe Area */}
      <div className="h-8" />
    </div>
  )
}
