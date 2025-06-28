"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, Bookmark, ArrowLeft, ArrowRight, ThumbsUp, MessageCircle, Eye } from "lucide-react"
import SharedNavigation from "../../components/shared-navigation"
import SharedFooter from "../../components/shared-footer"
import Link from "next/link"

// Mock data for the blog post
const blogPost = {
  id: 1,
  title: "Как увеличить продажи на WildBerries в 2024 году: полное руководство",
  content: `
    <p>В современном мире электронной коммерции успех на маркетплейсах требует глубокого понимания аналитики и постоянной оптимизации. В этой статье мы разберем ключевые стратегии, которые помогут вам значительно увеличить продажи на WildBerries в 2024 году.</p>

    <h2>1. Оптимизация карточки товара</h2>
    <p>Карточка товара — это ваша витрина на маркетплейсе. От того, насколько качественно она оформлена, зависит конверсия и позиции в поиске.</p>

    <h3>Ключевые элементы оптимизации:</h3>
    <ul>
      <li><strong>Заголовок:</strong> Должен содержать основные ключевые слова и четко описывать товар</li>
      <li><strong>Фотографии:</strong> Высокое качество, разные ракурсы, инфографика с характеристиками</li>
      <li><strong>Описание:</strong> Подробное, с использованием ключевых слов, но читабельное для покупателей</li>
      <li><strong>Характеристики:</strong> Полное заполнение всех доступных полей</li>
    </ul>

    <h2>2. Работа с ключевыми словами</h2>
    <p>Правильный подбор и использование ключевых слов — основа успешного SEO на маркетплейсах.</p>

    <h3>Стратегия подбора ключевых слов:</h3>
    <ol>
      <li>Анализ поисковых запросов в Anvigo</li>
      <li>Изучение конкурентов и их ключевых слов</li>
      <li>Использование длинных хвостов (long tail keywords)</li>
      <li>Регулярное обновление семантического ядра</li>
    </ol>

    <h2>3. Анализ конкурентов</h2>
    <p>Понимание стратегий конкурентов поможет вам найти слабые места и возможности для роста.</p>

    <p>С помощью инструментов аналитики Anvigo вы можете:</p>
    <ul>
      <li>Отслеживать позиции конкурентов</li>
      <li>Анализировать их ценовую политику</li>
      <li>Изучать их ассортимент и новинки</li>
      <li>Мониторить их рекламные кампании</li>
    </ul>

    <h2>4. Ценовая стратегия</h2>
    <p>Цена — один из ключевых факторов принятия решения о покупке. Важно найти баланс между прибыльностью и конкурентоспособностью.</p>

    <h3>Рекомендации по ценообразованию:</h3>
    <ul>
      <li>Регулярно мониторьте цены конкурентов</li>
      <li>Используйте динамическое ценообразование</li>
      <li>Учитывайте сезонность спроса</li>
      <li>Тестируйте разные ценовые стратегии</li>
    </ul>

    <h2>5. Работа с отзывами</h2>
    <p>Отзывы покупателей напрямую влияют на конверсию и ранжирование товаров в поиске.</p>

    <h3>Как работать с отзывами:</h3>
    <ol>
      <li>Активно просите покупателей оставлять отзывы</li>
      <li>Быстро отвечайте на негативные отзывы</li>
      <li>Используйте обратную связь для улучшения товара</li>
      <li>Мониторьте отзывы конкурентов</li>
    </ol>

    <h2>Заключение</h2>
    <p>Успех на WildBerries требует комплексного подхода и постоянной работы над оптимизацией. Используйте аналитические инструменты, следите за трендами и не бойтесь экспериментировать. Помните, что данные — ваш главный помощник в принятии решений.</p>

    <p>Платформа Anvigo предоставляет все необходимые инструменты для анализа и оптимизации вашего бизнеса на маркетплейсах. Начните использовать данные для роста уже сегодня!</p>
  `,
  author: "Алексей Иванов",
  authorRole: "CEO & Основатель Anvigo",
  authorAvatar: "/placeholder.svg?height=60&width=60",
  date: "2024-01-20",
  readTime: "12 мин",
  category: "Маркетинг",
  image: "/placeholder.svg?height=400&width=800",
  views: 2847,
  likes: 156,
  comments: 23,
  tags: ["WildBerries", "SEO", "Аналитика", "Продажи", "Маркетинг"],
}

const relatedPosts = [
  {
    id: 2,
    title: "10 ошибок в аналитике WildBerries, которые убивают прибыль",
    image: "/placeholder.svg?height=200&width=300",
    category: "Аналитика",
  },
  {
    id: 3,
    title: "API Anvigo: интеграция с вашей CRM за 30 минут",
    image: "/placeholder.svg?height=200&width=300",
    category: "API",
  },
  {
    id: 4,
    title: "Кейс: как магазин одежды увеличил продажи на 300%",
    image: "/placeholder.svg?height=200&width=300",
    category: "Кейсы",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к блогу
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">{blogPost.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{blogPost.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
                <div className="flex items-center">
                  <img
                    src={blogPost.authorAvatar || "/placeholder.svg"}
                    alt={blogPost.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-white font-medium">{blogPost.author}</div>
                    <div className="text-sm">{blogPost.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(blogPost.date).toLocaleDateString("ru-RU")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blogPost.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  {blogPost.views.toLocaleString()} просмотров
                </div>
              </div>

              {/* Featured Image */}
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />

              {/* Social Actions */}
              <div className="flex items-center justify-between border-y border-white/10 py-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {blogPost.likes}
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {blogPost.comments}
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardContent className="p-8">
                <div
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                />
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Теги:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/20 text-white/70 hover:bg-white/10 cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={blogPost.authorAvatar || "/placeholder.svg"}
                    alt={blogPost.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{blogPost.author}</h3>
                    <p className="text-purple-400 mb-2">{blogPost.authorRole}</p>
                    <p className="text-white/70">
                      Эксперт в области e-commerce аналитики с более чем 15-летним опытом. Помогает бизнесу расти с
                      помощью данных и современных технологий.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Предыдущая статья
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                Следующая статья
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Table of Contents */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Содержание</h3>
                <nav className="space-y-2">
                  <a href="#optimization" className="block text-white/70 hover:text-purple-400 transition-colors">
                    1. Оптимизация карточки товара
                  </a>
                  <a href="#keywords" className="block text-white/70 hover:text-purple-400 transition-colors">
                    2. Работа с ключевыми словами
                  </a>
                  <a href="#competitors" className="block text-white/70 hover:text-purple-400 transition-colors">
                    3. Анализ конкурентов
                  </a>
                  <a href="#pricing" className="block text-white/70 hover:text-purple-400 transition-colors">
                    4. Ценовая стратегия
                  </a>
                  <a href="#reviews" className="block text-white/70 hover:text-purple-400 transition-colors">
                    5. Работа с отзывами
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Похожие статьи</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <div className="group cursor-pointer">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-32 object-cover rounded mb-2 group-hover:opacity-80 transition-opacity"
                        />
                        <Badge className="mb-2 bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                          {post.category}
                        </Badge>
                        <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-semibold mb-2">Попробуйте Anvigo</h3>
                <p className="text-white/70 text-sm mb-4">Начните анализировать ваш бизнес уже сегодня</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
