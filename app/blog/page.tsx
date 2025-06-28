"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"
import SharedNavigation from "../components/shared-navigation"
import SharedFooter from "../components/shared-footer"
import Link from "next/link"

const categories = [
  { name: "Все статьи", count: 24, active: true },
  { name: "Аналитика", count: 8, active: false },
  { name: "Маркетинг", count: 6, active: false },
  { name: "Продажи", count: 5, active: false },
  { name: "API", count: 3, active: false },
  { name: "Кейсы", count: 2, active: false },
]

const featuredPost = {
  id: 1,
  title: "Как увеличить продажи на WildBerries в 2024 году: полное руководство",
  excerpt:
    "Подробный гайд по оптимизации карточек товаров, работе с ключевыми словами и анализу конкурентов для максимизации продаж на маркетплейсе.",
  author: "Алексей Иванов",
  date: "2024-01-20",
  readTime: "12 мин",
  category: "Маркетинг",
  image: "/placeholder.svg?height=400&width=800",
  featured: true,
}

const posts = [
  {
    id: 2,
    title: "10 ошибок в аналитике WildBerries, которые убивают прибыль",
    excerpt: "Разбираем самые частые ошибки селлеров при анализе данных и показываем, как их избежать.",
    author: "Мария Петрова",
    date: "2024-01-18",
    readTime: "8 мин",
    category: "Аналитика",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "API Anvigo: интеграция с вашей CRM за 30 минут",
    excerpt: "Пошаговое руководство по подключению API Anvigo к популярным CRM-системам.",
    author: "Дмитрий Сидоров",
    date: "2024-01-15",
    readTime: "15 мин",
    category: "API",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Кейс: как магазин одежды увеличил продажи на 300%",
    excerpt: "Реальная история успеха клиента, который за 6 месяцев кратно увеличил оборот.",
    author: "Анна Козлова",
    date: "2024-01-12",
    readTime: "10 мин",
    category: "Кейсы",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Сезонность продаж: как подготовиться к пикам спроса",
    excerpt: "Анализируем сезонные тренды и даем рекомендации по подготовке к высокому спросу.",
    author: "Елена Волкова",
    date: "2024-01-10",
    readTime: "7 мин",
    category: "Аналитика",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Автоматизация отчетности: экономим время на рутине",
    excerpt: "Как настроить автоматические отчеты и освободить время для стратегических задач.",
    author: "Игорь Смирнов",
    date: "2024-01-08",
    readTime: "6 мин",
    category: "Продажи",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    title: "Конкурентный анализ: находим слабые места соперников",
    excerpt: "Методы анализа конкурентов и поиска возможностей для обхода в поисковой выдаче.",
    author: "Ольга Новикова",
    date: "2024-01-05",
    readTime: "9 мин",
    category: "Маркетинг",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const popularTags = [
  "WildBerries",
  "Аналитика",
  "SEO",
  "Конверсия",
  "API",
  "Автоматизация",
  "Ключевые слова",
  "Конкуренты",
  "Отчеты",
  "Продажи",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все статьи")

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Все статьи" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Блог
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Anvigo
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Экспертные статьи, кейсы и руководства по аналитике e-commerce и развитию бизнеса на маркетплейсах
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
            <Input
              placeholder="Поиск статей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className={`${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
                <Badge className="ml-2 bg-white/20 text-white">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {!searchQuery && selectedCategory === "Все статьи" && (
          <section className="mb-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:bg-white/15 transition-all group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                    Рекомендуем
                  </Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString("ru-RU")}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 w-fit">
                      Читать статью
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Posts Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all group cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-white/60 text-sm">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString("ru-RU")}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 text-white/40 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Статьи не найдены</h3>
                <p className="text-white/60">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Newsletter */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20 mb-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Подпишитесь на рассылку</h3>
                <p className="text-white/80 mb-6">Получайте новые статьи и эксклюзивные материалы первыми</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 whitespace-nowrap">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Popular Tags */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-white/20 text-white/70 hover:bg-white/10 cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Недавние статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <div className="group cursor-pointer">
                        <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-white/60 text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString("ru-RU")}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
