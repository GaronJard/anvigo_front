"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Heart, Zap, Coffee, Gamepad2, Plane, GraduationCap } from "lucide-react"
import SharedNavigation from "../components/shared-navigation"

const openPositions = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Разработка",
    location: "Москва / Удаленно",
    type: "Полная занятость",
    experience: "3+ года",
    description: "Ищем опытного фронтенд-разработчика для работы над интерфейсами нашей аналитической платформы.",
    requirements: [
      "Опыт работы с React/Next.js от 3 лет",
      "Знание TypeScript",
      "Опыт работы с современными инструментами сборки",
      "Понимание принципов UX/UI",
    ],
    responsibilities: [
      "Разработка пользовательских интерфейсов",
      "Оптимизация производительности приложений",
      "Участие в code review",
      "Менторинг младших разработчиков",
    ],
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Аналитика",
    location: "Москва",
    type: "Полная занятость",
    experience: "2+ года",
    description: "Присоединяйтесь к команде аналитиков для создания ML-моделей и алгоритмов прогнозирования.",
    requirements: [
      "Опыт работы с Python/R",
      "Знание машинного обучения",
      "Опыт работы с большими данными",
      "Знание SQL",
    ],
    responsibilities: [
      "Разработка ML-моделей",
      "Анализ данных маркетплейсов",
      "Создание алгоритмов прогнозирования",
      "Подготовка аналитических отчетов",
    ],
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Продукт",
    location: "Москва / Удаленно",
    type: "Полная занятость",
    experience: "3+ года",
    description: "Ищем продакт-менеджера для развития нашей платформы и создания новых функций.",
    requirements: [
      "Опыт работы продакт-менеджером от 3 лет",
      "Понимание e-commerce и маркетплейсов",
      "Опыт работы с аналитикой и метриками",
      "Навыки работы с командами разработки",
    ],
    responsibilities: [
      "Планирование развития продукта",
      "Анализ пользовательских потребностей",
      "Координация работы команд",
      "Проведение исследований рынка",
    ],
  },
  {
    id: 4,
    title: "Backend Developer",
    department: "Разработка",
    location: "Москва / Удаленно",
    type: "Полная занятость",
    experience: "2+ года",
    description: "Разрабатываем высоконагруженные системы для обработки данных маркетплейсов.",
    requirements: [
      "Опыт работы с Node.js/Python",
      "Знание баз данных (PostgreSQL, MongoDB)",
      "Опыт работы с API",
      "Понимание микросервисной архитектуры",
    ],
    responsibilities: [
      "Разработка серверной логики",
      "Проектирование API",
      "Оптимизация производительности",
      "Интеграция с внешними сервисами",
    ],
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Дизайн",
    location: "Москва / Удаленно",
    type: "Полная занятость",
    experience: "2+ года",
    description: "Создаем интуитивные интерфейсы для сложных аналитических инструментов.",
    requirements: [
      "Портфолио с проектами веб-интерфейсов",
      "Опыт работы с Figma/Sketch",
      "Понимание принципов UX",
      "Опыт проведения пользовательских исследований",
    ],
    responsibilities: [
      "Проектирование пользовательских интерфейсов",
      "Создание прототипов",
      "Проведение UX-исследований",
      "Работа с дизайн-системой",
    ],
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Медицинская страховка",
    description: "Полная медицинская страховка для вас и вашей семьи",
  },
  {
    icon: Zap,
    title: "Гибкий график",
    description: "Работайте в удобное время и из любого места",
  },
  {
    icon: Coffee,
    title: "Офис в центре",
    description: "Современный офис в центре Москвы с кофе и снеками",
  },
  {
    icon: GraduationCap,
    title: "Обучение и развитие",
    description: "Бюджет на конференции, курсы и сертификации",
  },
  {
    icon: Gamepad2,
    title: "Отдых и развлечения",
    description: "Корпоративные мероприятия и тимбилдинги",
  },
  {
    icon: Plane,
    title: "Отпуск",
    description: "28 дней оплачиваемого отпуска + дополнительные дни",
  },
]

const values = [
  {
    title: "Инновации",
    description: "Мы постоянно ищем новые способы решения задач и не боимся экспериментировать",
  },
  {
    title: "Команда",
    description: "Мы верим в силу команды и поддерживаем друг друга в достижении общих целей",
  },
  {
    title: "Качество",
    description: "Мы стремимся к высокому качеству во всем, что делаем",
  },
  {
    title: "Развитие",
    description: "Мы инвестируем в развитие каждого сотрудника и поощряем обучение",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      {/* Navigation */}
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">Присоединяйтесь к команде</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Карьера в
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Anvigo
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Станьте частью команды, которая создает будущее e-commerce аналитики. Мы ищем талантливых людей, готовых
            изменить индустрию маркетплейсов.
          </p>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши ценности</h2>
            <p className="text-xl text-white/80">Принципы, которые объединяют нашу команду</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                <CardHeader>
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-white/80">Забота о команде — наш приоритет</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-purple-400 mb-4" />
                    <CardTitle className="text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Открытые вакансии</h2>
            <p className="text-xl text-white/80">Найдите позицию, которая подходит именно вам</p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600 text-white">{position.department}</Badge>
                        <div className="flex items-center text-white/60 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-white/60 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-white/60 text-sm">
                          <Users className="h-4 w-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 w-fit">
                      Откликнуться
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-6">{position.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="text-white/80 text-sm flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Обязанности:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="text-white/80 text-sm flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section className="mb-20">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наша культура</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  В Anvigo мы создаем среду, где каждый может расти профессионально и реализовывать свой потенциал
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">Сотрудников</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">4.8</div>
                  <div className="text-white/80">Рейтинг на Glassdoor</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/80">Удовлетворенность работой</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Процесс отбора</h2>
            <p className="text-xl text-white/80">Простой и прозрачный процесс найма</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Отклик</h3>
                <p className="text-white/80 text-sm">Отправьте резюме и сопроводительное письмо</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Скрининг</h3>
                <p className="text-white/80 text-sm">Телефонное интервью с HR-специалистом</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Техническое интервью</h3>
                <p className="text-white/80 text-sm">Собеседование с командой и тестовое задание</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Оффер</h3>
                <p className="text-white/80 text-sm">Обсуждение условий и добро пожаловать в команду!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Не нашли подходящую вакансию?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Мы всегда открыты для талантливых людей. Отправьте нам свое резюме, и мы свяжемся с вами, когда появится
                подходящая позиция.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Отправить резюме
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white/60">
            <p>&copy; 2024 Anvigo. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
