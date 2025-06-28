"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Book,
  PlayCircle,
  FileText,
  Code,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ChevronRight,
  Clock,
  Eye,
} from "lucide-react"
import SharedNavigation from "../components/shared-navigation"
import SharedFooter from "../components/shared-footer"
import Link from "next/link"

const categories = [
  {
    id: "getting-started",
    name: "Начало работы",
    description: "Первые шаги с платформой",
    icon: Book,
    color: "bg-green-500/20 text-green-300",
    articles: 12,
  },
  {
    id: "analytics",
    name: "Аналитика",
    description: "Работа с данными и отчетами",
    icon: TrendingUp,
    color: "bg-blue-500/20 text-blue-300",
    articles: 18,
  },
  {
    id: "api",
    name: "API",
    description: "Интеграция и разработка",
    icon: Code,
    color: "bg-purple-500/20 text-purple-300",
    articles: 24,
  },
  {
    id: "account",
    name: "Управление аккаунтом",
    description: "Настройки и безопасность",
    icon: Users,
    color: "bg-orange-500/20 text-orange-300",
    articles: 8,
  },
  {
    id: "billing",
    name: "Биллинг",
    description: "Тарифы и платежи",
    icon: Shield,
    color: "bg-red-500/20 text-red-300",
    articles: 6,
  },
  {
    id: "advanced",
    name: "Продвинутые функции",
    description: "Экспертные возможности",
    icon: Zap,
    color: "bg-yellow-500/20 text-yellow-300",
    articles: 15,
  },
]

const popularArticles = [
  {
    id: 1,
    title: "Как начать работу с Anvigo: пошаговое руководство",
    description: "Полное руководство по настройке аккаунта и первым шагам в платформе",
    category: "Начало работы",
    readTime: "5 мин",
    views: 2847,
    type: "article",
  },
  {
    id: 2,
    title: "Настройка отслеживания позиций товаров",
    description: "Как добавить товары для мониторинга и настроить уведомления",
    category: "Аналитика",
    readTime: "8 мин",
    views: 1923,
    type: "article",
  },
  {
    id: 3,
    title: "Работа с API: получение данных о конкурентах",
    description: "Примеры запросов и интеграции API для анализа конкурентов",
    category: "API",
    readTime: "12 мин",
    views: 1456,
    type: "code",
  },
  {
    id: 4,
    title: "Видео: Обзор дашборда и основных функций",
    description: "Подробный видеообзор интерфейса и возможностей платформы",
    category: "Начало работы",
    readTime: "15 мин",
    views: 3241,
    type: "video",
  },
  {
    id: 5,
    title: "Экспорт данных и создание отчетов",
    description: "Как выгружать данные в различных форматах и создавать отчеты",
    category: "Аналитика",
    readTime: "6 мин",
    views: 987,
    type: "article",
  },
  {
    id: 6,
    title: "Настройка уведомлений и алертов",
    description: "Как настроить автоматические уведомления о важных изменениях",
    category: "Управление аккаунтом",
    readTime: "4 мин",
    views: 1234,
    type: "article",
  },
]

const recentArticles = [
  {
    id: 7,
    title: "Новые возможности API v2.0",
    description: "Обзор новых эндпоинтов и улучшений в последней версии API",
    category: "API",
    readTime: "10 мин",
    publishedAt: "2024-01-18",
    type: "article",
  },
  {
    id: 8,
    title: "Интеграция с внешними системами аналитики",
    description: "Как подключить Google Analytics, Яндекс.Метрику и другие сервисы",
    category: "Продвинутые функции",
    readTime: "15 мин",
    publishedAt: "2024-01-15",
    type: "article",
  },
  {
    id: 9,
    title: "Оптимизация производительности запросов",
    description: "Советы по ускорению работы с большими объемами данных",
    category: "API",
    readTime: "8 мин",
    publishedAt: "2024-01-12",
    type: "code",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return <PlayCircle className="h-4 w-4" />
    case "code":
      return <Code className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-red-500/20 text-red-300"
    case "code":
      return "bg-green-500/20 text-green-300"
    default:
      return "bg-blue-500/20 text-blue-300"
  }
}

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = popularArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            База
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              знаний
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Найдите ответы на ваши вопросы, изучите руководства и освойте все возможности платформы Anvigo
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
            <Input
              placeholder="Поиск по базе знаний..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.id}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-8 w-8 text-purple-400" />
                      <Badge className={category.color}>{category.articles} статей</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/70 mb-4">{category.description}</p>
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm">Перейти к статьям</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Популярные статьи</h2>
          <div className="space-y-4">
            {(searchQuery ? filteredArticles : popularArticles).map((article) => (
              <Card
                key={article.id}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getTypeColor(article.type)}>
                          {getTypeIcon(article.type)}
                          <span className="ml-1 capitalize">
                            {article.type === "video" ? "Видео" : article.type === "code" ? "Код" : "Статья"}
                          </span>
                        </Badge>
                        <Badge variant="outline" className="border-white/20 text-white/70">
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-white/70 mb-4">{article.description}</p>
                      <div className="flex items-center space-x-4 text-white/60 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {article.views.toLocaleString()} просмотров
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchQuery && filteredArticles.length === 0 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 text-white/40 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-white/60">Попробуйте изменить поисковый запрос или просмотрите популярные статьи</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Recent Articles */}
        {!searchQuery && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Недавние обновления</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <Card
                  key={article.id}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={getTypeColor(article.type)}>
                        {getTypeIcon(article.type)}
                        <span className="ml-1 capitalize">
                          {article.type === "video" ? "Видео" : article.type === "code" ? "Код" : "Статья"}
                        </span>
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{article.description}</p>
                    <div className="flex items-center justify-between text-white/60 text-sm">
                      <span>{article.category}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="text-white/50 text-xs mt-2">
                      {new Date(article.publishedAt).toLocaleDateString("ru-RU")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Help Section */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Не нашли ответ?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Наша команда поддержки готова помочь вам с любыми вопросами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support">
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Связаться с поддержкой
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Предложить статью
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
