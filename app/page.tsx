"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BarChart3, TrendingUp, Users, Zap, CheckCircle, Star, ArrowRight, Play, Shield, Target } from "lucide-react"
import Link from "next/link"
import SharedNavigation from "./components/shared-navigation"
import SharedFooter from "./components/shared-footer"

const features = [
  {
    icon: TrendingUp,
    title: "Анализ позиций",
    description: "Отслеживайте позиции ваших товаров в поиске WildBerries в режиме реального времени",
  },
  {
    icon: Users,
    title: "Анализ конкурентов",
    description: "Изучайте стратегии конкурентов и находите возможности для роста",
  },
  {
    icon: Target,
    title: "Подбор ключевых слов",
    description: "Находите высокочастотные запросы с низкой конкуренцией",
  },
  {
    icon: BarChart3,
    title: "Детальная аналитика",
    description: "Получайте подробные отчеты о продажах, трафике и конверсии",
  },
  {
    icon: Zap,
    title: "API интеграция",
    description: "Интегрируйте данные в ваши системы через мощный REST API",
  },
  {
    icon: Shield,
    title: "Безопасность данных",
    description: "Ваши данные защищены современными методами шифрования",
  },
]

const stats = [
  { number: "10,000+", label: "Активных пользователей" },
  { number: "50M+", label: "Товаров в базе" },
  { number: "99.9%", label: "Время работы" },
  { number: "24/7", label: "Поддержка" },
]

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Владелец магазина одежды",
    content: "Anvigo помог увеличить продажи на 40% за первые 3 месяца. Теперь я точно знаю, какие товары продвигать.",
    rating: 5,
  },
  {
    name: "Михаил Сидоров",
    role: "Селлер электроники",
    content: "Отличная платформа для анализа конкурентов. API работает стабильно, данные всегда актуальные.",
    rating: 5,
  },
  {
    name: "Елена Козлова",
    role: "Маркетолог",
    content: "Использую для клиентов агентства. Отчеты помогают принимать обоснованные решения по продвижению.",
    rating: 5,
  },
]

const pricingPlans = [
  {
    name: "Стартер",
    price: "1,990",
    period: "месяц",
    description: "Для начинающих селлеров",
    features: ["До 50 товаров для отслеживания", "Базовая аналитика", "Email поддержка", "Экспорт в CSV"],
    popular: false,
  },
  {
    name: "Профессионал",
    price: "4,990",
    period: "месяц",
    description: "Для растущего бизнеса",
    features: [
      "До 500 товаров для отслеживания",
      "Расширенная аналитика",
      "API доступ",
      "Приоритетная поддержка",
      "Автоматические отчеты",
    ],
    popular: true,
  },
  {
    name: "Энтерпрайз",
    price: "Индивидуально",
    period: "",
    description: "Для крупного бизнеса",
    features: [
      "Неограниченное количество товаров",
      "Персональный менеджер",
      "Кастомная интеграция",
      "SLA 99.9%",
      "Обучение команды",
    ],
    popular: false,
  },
]

export default function HomePage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🚀 Новая версия API v2.0 уже доступна
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Аналитика для
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                WildBerries
              </span>
              <br />
              нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Увеличивайте продажи с помощью данных. Отслеживайте позиции, анализируйте конкурентов и находите новые
              возможности для роста вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8 py-4"
                >
                  Начать бесплатно
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Смотреть демо
              </Button>
            </div>
            <p className="text-white/60">14 дней бесплатно • Без привязки карты • Отмена в любое время</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Все инструменты в
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                одном месте
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Комплексная платформа для анализа и оптимизации вашего бизнеса на WildBerries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all group"
                >
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Что говорят наши
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                клиенты
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Более 10,000 селлеров уже используют Anvigo для роста своего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Выберите свой
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                тариф
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Гибкие тарифные планы для бизнеса любого размера</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white/10 backdrop-blur-md border-white/20 relative ${plan.popular ? "ring-2 ring-purple-500" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600">
                    Популярный
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">₽{plan.price}</span>
                    {plan.period && <span className="text-white/60">/{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    }`}
                  >
                    {plan.name === "Энтерпрайз" ? "Связаться с нами" : "Выбрать план"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы увеличить продажи?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам успешных селлеров, которые уже используют Anvigo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 whitespace-nowrap">
                  Начать бесплатно
                </Button>
              </div>
              <p className="text-white/60 text-sm">
                Начните с бесплатного 14-дневного периода. Кредитная карта не требуется.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
