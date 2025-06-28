"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, TrendingUp, Globe, Heart, Lightbulb, Shield, Zap, Clock } from "lucide-react"
import SharedNavigation from "../components/shared-navigation"
import SharedFooter from "../components/shared-footer"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Фокус на результат",
    description: "Мы создаем инструменты, которые реально помогают увеличивать продажи и прибыль наших клиентов",
  },
  {
    icon: Shield,
    title: "Надежность",
    description: "Стабильная работа сервиса 24/7 и безопасность ваших данных - наши главные приоритеты",
  },
  {
    icon: Lightbulb,
    title: "Инновации",
    description: "Мы постоянно развиваем платформу, внедряя новые технологии и возможности",
  },
  {
    icon: Heart,
    title: "Забота о клиентах",
    description: "Каждый клиент важен для нас. Мы всегда готовы помочь и поддержать",
  },
]

const team = [
  {
    name: "Алексей Иванов",
    role: "CEO & Основатель",
    description: "15 лет опыта в e-commerce и аналитике. Ранее работал в Яндексе и Ozon.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Мария Петрова",
    role: "CTO",
    description: "Эксперт по машинному обучению и big data. PhD в области компьютерных наук.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Дмитрий Сидоров",
    role: "Head of Product",
    description: "Специалист по UX/UI и продуктовой аналитике. 10 лет в продуктовых командах.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Анна Козлова",
    role: "Head of Sales",
    description: "Эксперт по развитию бизнеса и работе с клиентами. MBA от INSEAD.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Основание компании",
    description: "Запуск первой версии платформы для анализа WildBerries",
  },
  {
    year: "2021",
    title: "1,000 пользователей",
    description: "Достигли первой тысячи активных пользователей",
  },
  {
    year: "2022",
    title: "Запуск API",
    description: "Выпустили публичное API для интеграции с внешними системами",
  },
  {
    year: "2023",
    title: "10,000 пользователей",
    description: "Преодолели отметку в 10,000 активных пользователей",
  },
  {
    year: "2024",
    title: "Новые возможности",
    description: "Запуск AI-powered аналитики и расширенных инструментов",
  },
]

const stats = [
  { number: "10,000+", label: "Активных пользователей", icon: Users },
  { number: "50M+", label: "Товаров в базе", icon: Globe },
  { number: "99.9%", label: "Время работы", icon: Clock },
  { number: "4.9/5", label: "Рейтинг клиентов", icon: Award },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">О компании</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Мы помогаем бизнесу
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> расти</span>
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Anvigo — это команда экспертов в области e-commerce аналитики, которая создает инструменты для успешного
            развития бизнеса на маркетплейсах.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/60">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Наша
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  миссия
                </span>
              </h2>
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  Мы верим, что каждый предприниматель заслуживает доступа к качественной аналитике для принятия
                  обоснованных бизнес-решений.
                </p>
                <p>
                  Наша цель — демократизировать доступ к данным и инструментам анализа, которые раньше были доступны
                  только крупным компаниям.
                </p>
                <p>
                  Мы создаем технологии, которые помогают малому и среднему бизнесу конкурировать на равных с крупными
                  игроками рынка.
                </p>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <TrendingUp className="h-16 w-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Наше видение</h3>
                <p className="text-white/80">
                  Стать ведущей платформой для аналитики e-commerce в России и СНГ, помогая миллионам предпринимателей
                  достигать успеха в цифровой экономике.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Наши
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              ценности
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-purple-400 mb-6" />
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            История
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              развития
            </span>
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1 bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Наша
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              команда
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12 text-center">
              <Zap className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Присоединяйтесь к нам</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Станьте частью сообщества успешных предпринимателей, которые используют данные для роста бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Начать бесплатно
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    Вакансии
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
