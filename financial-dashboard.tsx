"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Bell,
  Clock,
  ChevronRight,
  Star,
  MoreHorizontal,
  Filter,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Calendar,
  Settings,
  Bookmark,
  TrendingUp,
} from "lucide-react"

const statsData = [
  { label: "Portfolio", value: "$127,439", change: "+2.4%", trend: "up" },
  { label: "Today P&L", value: "+$1,247", change: "+0.98%", trend: "up" },
  { label: "Positions", value: "23", change: "+3", trend: "up" },
  { label: "Watchlist", value: "47", change: "-2", trend: "down" },
  { label: "Market Cap", value: "$2.4T", change: "+1.2%", trend: "up" },
  { label: "Volume", value: "847M", change: "+5.8%", trend: "up" },
]

const newsItems = [
  {
    id: 1,
    category: "Market Movers",
    title: "Tesla, Alphabet, and Amazon in the Spotlight",
    subtitle: "Surging Developments Hint at Soaring Stock Prices",
    stocks: ["TSLA", "GOOGL", "AMZN", "NVDA"],
    time: "4:39 PM",
    views: "2.1k",
    featured: true,
  },
  {
    id: 2,
    category: "Defense",
    title: "Defense Needs Could Skyrocket These Stocks",
    subtitle: "Is Your Portfolio Ready for Defense Boom?",
    stocks: ["BAESY", "LMT", "RTX"],
    time: "12:52 PM",
    views: "1.8k",
    featured: false,
  },
  {
    id: 3,
    category: "Growth",
    title: "Amazon, Apple Set for Growth",
    subtitle: "Market Conditions Signal Major Opportunities",
    stocks: ["AMZN", "AAPL", "GOOGL"],
    time: "9:05 AM",
    views: "3.2k",
    featured: true,
  },
  {
    id: 4,
    category: "Healthcare",
    title: "Vaccine Demand Creates Opportunities",
    subtitle: "Health Guidelines Drive Pharma Interest",
    stocks: ["NVAX", "PFE", "MRNA"],
    time: "5:18 AM",
    views: "1.4k",
    featured: false,
  },
  {
    id: 5,
    category: "Crypto",
    title: "Bitcoin Surge Impacts Tech Stocks",
    subtitle: "Crypto Rally Creates Ripple Effects",
    stocks: ["COIN", "MSTR", "RIOT"],
    time: "3:22 AM",
    views: "892",
    featured: false,
  },
  {
    id: 6,
    category: "Energy",
    title: "Oil Prices Drive Energy Rally",
    subtitle: "Geopolitical Tensions Boost Investments",
    stocks: ["XOM", "CVX", "COP"],
    time: "1:15 AM",
    views: "1.2k",
    featured: false,
  },
]

export default function FinancialDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stocks.some((stock) => stock.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">UI/UX Market Dashboard</h1>
            <p className="text-gray-400 text-sm">subheading here</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full" />
            </button>
            <button className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search markets, stocks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-10 pr-4 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
          />
        </div>
      </div>

      {/* Stats - COMPACT HORIZONTAL GRID */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {statsData.slice(0, 6).map((stat, index) => (
            <div key={stat.label} className="bg-gray-900 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-400 text-xs font-medium">{stat.label}</p>
                {stat.trend === "up" ? (
                  <ArrowUp className="w-3 h-3 text-green-500" />
                ) : (
                  <ArrowDown className="w-3 h-3 text-red-500" />
                )}
              </div>
              <p className="text-white text-sm font-bold mb-1">{stat.value}</p>
              <p className={`text-xs font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions - HORIZONTAL SCROLL */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-white">Quick Actions</h2>
          <button className="text-purple-400 text-sm">View All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { icon: BarChart3, label: "Analytics" },
            { icon: Calendar, label: "Events" },
            { icon: Bookmark, label: "Saved" },
            { icon: Settings, label: "Settings" },
            { icon: TrendingUp, label: "Trends" },
            { icon: Filter, label: "Filters" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex-shrink-0 bg-gray-900 rounded-xl p-3 flex flex-col items-center gap-1 min-w-[70px]"
            >
              <action.icon className="w-5 h-5 text-purple-400" />
              <span className="text-white text-xs font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* NEWS CARDS - ACTUAL MULTI-COLUMN LAYOUT */}
      <div className="px-4 pb-8">
        {/* MOBILE: 1 Column */}
        <div className="block sm:hidden space-y-4">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* TABLET: 2 Columns */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* DESKTOP: 3 Columns */}
        <div className="hidden lg:block xl:hidden">
          <div className="grid grid-cols-3 gap-4">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* LARGE DESKTOP: 4 Columns */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-4 gap-4">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Compact NewsCard Component
function NewsCard({ item }: { item: any }) {
  return (
    <div
      className={`rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
        item.featured ? "bg-gradient-to-br from-purple-600 to-purple-700" : "bg-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div
          className={`px-2 py-1 rounded-lg text-xs font-semibold ${
            item.featured ? "bg-white/20 text-white" : "bg-purple-500/20 text-purple-300"
          }`}
        >
          {item.category}
        </div>
        <button
          className={`w-7 h-7 rounded-full flex items-center justify-center ${
            item.featured ? "bg-white/20" : "bg-gray-800"
          }`}
        >
          <Star className={`w-4 h-4 ${item.featured ? "text-white" : "text-gray-400"}`} />
        </button>
      </div>

      {/* Title */}
      <h3 className={`font-bold text-base leading-tight mb-2 ${item.featured ? "text-white" : "text-white"}`}>
        {item.title}
      </h3>
      <p className={`text-sm leading-relaxed mb-3 ${item.featured ? "text-white/80" : "text-gray-400"}`}>
        {item.subtitle}
      </p>

      {/* Stock Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {item.stocks.slice(0, 3).map((stock: string) => (
          <div
            key={stock}
            className={`px-2 py-1 rounded-lg font-bold text-xs ${
              item.featured ? "bg-white/20 text-white" : "bg-purple-500/20 text-purple-300"
            }`}
          >
            {stock}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className={`w-4 h-4 ${item.featured ? "text-white/70" : "text-gray-500"}`} />
          <span className={`text-xs font-medium ${item.featured ? "text-white/70" : "text-gray-500"}`}>
            {item.time}
          </span>
        </div>
        <ChevronRight className={`w-4 h-4 ${item.featured ? "text-white/70" : "text-gray-500"}`} />
      </div>
    </div>
  )
}
