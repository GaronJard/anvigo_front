"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Mail, Phone, Clock, HelpCircle, Search, Book, Video, FileText, Loader2 } from "lucide-react"
import SharedNavigation from "../components/shared-navigation"
import SharedFooter from "../components/shared-footer"
import { useToast } from "@/hooks/use-toast"

const faqItems = [
  {
    question: "Как начать работу с платформой?",
    answer:
      "После регистрации вы получите доступ к дашборду. Начните с добавления ваших товаров для отслеживания позиций и анализа конкурентов.",
    category: "Начало работы",
  },
  {
    question: "Сколько запросов к API я могу делать?",
    answer:
      "Лимиты зависят от вашего тарифного плана. Базовый план включает 1000 запросов в день, профессиональный - 10000 запросов.",
    category: "API",
  },
  {
    question: "Как часто обновляются данные о позициях?",
    answer:
      "Данные о позициях товаров обновляются каждые 6 часов. Для премиум-аккаунтов доступно обновление каждые 2 часа.",
    category: "Данные",
  },
  {
    question: "Можно ли экспортировать данные?",
    answer:
      "Да, вы можете экспортировать все данные в форматах CSV, Excel и JSON. Функция доступна в разделе 'Экспорт данных'.",
    category: "Экспорт",
  },
  {
    question: "Как настроить уведомления?",
    answer: "Перейдите в настройки аккаунта и выберите типы уведомлений, которые хотите получать: email, push или SMS.",
    category: "Настройки",
  },
]

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Онлайн чат",
    description: "Быстрая помощь в режиме реального времени",
    availability: "Пн-Пт 9:00-18:00 МСК",
    responseTime: "< 5 минут",
    action: "Начать чат",
  },
  {
    icon: Mail,
    title: "Email поддержка",
    description: "Подробные ответы на сложные вопросы",
    availability: "24/7",
    responseTime: "< 4 часа",
    action: "Написать письмо",
  },
  {
    icon: Phone,
    title: "Телефон",
    description: "Персональная консультация по телефону",
    availability: "Пн-Пт 10:00-17:00 МСК",
    responseTime: "Немедленно",
    action: "Заказать звонок",
  },
]

const resources = [
  {
    icon: Book,
    title: "База знаний",
    description: "Подробные руководства и инструкции",
    link: "/knowledge-base",
  },
  {
    icon: Video,
    title: "Видео уроки",
    description: "Обучающие видео по работе с платформой",
    link: "/tutorials",
  },
  {
    icon: FileText,
    title: "API документация",
    description: "Техническая документация для разработчиков",
    link: "/api-docs",
  },
]

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("contact")
  const [searchQuery, setSearchQuery] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const filteredFAQ = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Обращение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      })
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        priority: "medium",
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Центр
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              поддержки
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Мы готовы помочь вам решить любые вопросы и получить максимум от платформы Anvigo
          </p>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all"
                >
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                    <p className="text-white/70 mb-4">{channel.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-white/60 text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {channel.availability}
                      </div>
                      <div className="text-white/60 text-sm">Время ответа: {channel.responseTime}</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Main Content */}
        <section>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-md border-white/20">
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                Обратиться в поддержку
              </TabsTrigger>
              <TabsTrigger
                value="faq"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                Часто задаваемые вопросы
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                Ресурсы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="mt-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Форма обращения</CardTitle>
                  <CardDescription className="text-white/60">
                    Опишите вашу проблему или вопрос, и мы поможем вам решить его
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Имя
                        </Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Тема обращения
                      </Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Кратко опишите суть вопроса"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priority" className="text-white">
                        Приоритет
                      </Label>
                      <select
                        id="priority"
                        value={contactForm.priority}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, priority: e.target.value }))}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white"
                      >
                        <option value="low" className="bg-gray-800">
                          Низкий
                        </option>
                        <option value="medium" className="bg-gray-800">
                          Средний
                        </option>
                        <option value="high" className="bg-gray-800">
                          Высокий
                        </option>
                        <option value="urgent" className="bg-gray-800">
                          Критический
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Сообщение
                      </Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                        placeholder="Подробно опишите вашу проблему или вопрос..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        "Отправить обращение"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                  <Input
                    placeholder="Поиск по вопросам..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-4">
                  {filteredFAQ.map((item, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-white font-semibold text-lg pr-4">{item.question}</h3>
                          <Badge className="bg-purple-500/20 text-purple-300 shrink-0">{item.category}</Badge>
                        </div>
                        <p className="text-white/70 leading-relaxed">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredFAQ.length === 0 && (
                  <Card className="bg-white/10 backdrop-blur-md border-white/20">
                    <CardContent className="p-12 text-center">
                      <HelpCircle className="h-12 w-12 text-white/40 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">Ничего не найдено</h3>
                      <p className="text-white/60">Попробуйте изменить поисковый запрос или обратитесь в поддержку</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource, index) => {
                  const Icon = resource.icon
                  return (
                    <Card
                      key={index}
                      className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all"
                    >
                      <CardContent className="p-8 text-center">
                        <Icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                        <p className="text-white/70 mb-6">{resource.description}</p>
                        <Button
                          variant="outline"
                          className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                          onClick={() => (window.location.href = resource.link)}
                        >
                          Перейти
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
