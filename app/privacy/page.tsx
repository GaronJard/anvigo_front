"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Users, FileText, Mail, Calendar } from "lucide-react"
import SharedNavigation from "../components/shared-navigation"
import SharedFooter from "../components/shared-footer"

const sections = [
  {
    id: "collection",
    title: "Сбор информации",
    icon: Eye,
    content: [
      "Мы собираем информацию, которую вы предоставляете нам напрямую, например, при создании аккаунта, использовании наших сервисов или обращении в службу поддержки.",
      "Автоматически собираемая информация включает данные об использовании сервиса, IP-адреса, информацию о браузере и устройстве.",
      "Мы можем получать информацию о вас от третьих лиц, включая партнеров и поставщиков данных, в соответствии с их политиками конфиденциальности.",
    ],
  },
  {
    id: "usage",
    title: "Использование информации",
    icon: Users,
    content: [
      "Предоставление, поддержка и улучшение наших сервисов и функций.",
      "Обработка транзакций и отправка связанной информации, включая подтверждения и счета.",
      "Отправка технических уведомлений, обновлений, предупреждений безопасности и административных сообщений.",
      "Ответы на комментарии, вопросы и запросы, а также предоставление клиентской поддержки.",
      "Мониторинг и анализ тенденций, использования и активности в связи с нашими сервисами.",
    ],
  },
  {
    id: "sharing",
    title: "Передача информации",
    icon: Lock,
    content: [
      "Мы не продаем, не торгуем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, описанных в данной политике.",
      "Мы можем передавать информацию поставщикам услуг, которые помогают нам в предоставлении сервисов.",
      "Мы можем раскрывать информацию, если это требуется по закону или для защиты наших прав и безопасности пользователей.",
    ],
  },
  {
    id: "security",
    title: "Безопасность данных",
    icon: Shield,
    content: [
      "Мы используем административные, технические и физические меры безопасности для защиты вашей личной информации.",
      "Данные передаются с использованием шифрования SSL/TLS.",
      "Доступ к личной информации ограничен сотрудниками, которым эта информация необходима для выполнения их работы.",
      "Мы регулярно проводим аудит безопасности и обновляем наши системы защиты.",
    ],
  },
  {
    id: "rights",
    title: "Ваши права",
    icon: FileText,
    content: [
      "Право на доступ к вашим личным данным и получение копии обрабатываемых данных.",
      "Право на исправление неточных или неполных данных.",
      "Право на удаление ваших личных данных при определенных обстоятельствах.",
      "Право на ограничение обработки ваших данных.",
      "Право на портируемость данных - получение ваших данных в структурированном, машиночитаемом формате.",
      "Право на возражение против обработки ваших данных для целей прямого маркетинга.",
    ],
  },
  {
    id: "cookies",
    title: "Файлы cookie",
    icon: Eye,
    content: [
      "Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта использования сервиса.",
      "Файлы cookie помогают нам запоминать ваши предпочтения, анализировать трафик и персонализировать контент.",
      "Вы можете управлять настройками cookie в вашем браузере, но отключение некоторых cookie может повлиять на функциональность сервиса.",
    ],
  },
]

const contactInfo = {
  email: "privacy@anvigo.com",
  address: "Москва, Россия",
  phone: "+7 (495) 123-45-67",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-purple-400 mr-4" />
            <Badge className="bg-green-500/20 text-green-300">Обновлено 15 января 2024</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Политика
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              конфиденциальности
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных и прозрачности в вопросах их обработки
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Введение</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  Настоящая Политика конфиденциальности описывает, как компания Anvigo ("мы", "нас", "наш") собирает,
                  использует и защищает информацию, которую вы предоставляете при использовании нашей аналитической
                  платформы и связанных с ней сервисов.
                </p>
                <p>
                  Используя наши сервисы, вы соглашаетесь с условиями данной Политики конфиденциальности. Если вы не
                  согласны с какими-либо условиями, пожалуйста, не используйте наши сервисы.
                </p>
                <p>
                  Мы можем периодически обновлять данную политику. О существенных изменениях мы будем уведомлять вас по
                  электронной почте или через уведомления в сервисе.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Sections */}
        <section className="mb-16">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={section.id} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon className="h-6 w-6 mr-3 text-purple-400" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-white/80 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-purple-400" />
                Хранение данных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-white/80 space-y-4">
                <p>
                  Мы храним вашу личную информацию только до тех пор, пока это необходимо для достижения целей, для
                  которых она была собрана, или в соответствии с требованиями законодательства.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Данные аккаунта</h4>
                    <p className="text-white/70 text-sm">Хранятся до удаления аккаунта пользователем</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Аналитические данные</h4>
                    <p className="text-white/70 text-sm">Хранятся в течение 24 месяцев</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Логи системы</h4>
                    <p className="text-white/70 text-sm">Хранятся в течение 12 месяцев</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Данные поддержки</h4>
                    <p className="text-white/70 text-sm">Хранятся в течение 36 месяцев</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* International Transfers */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Международные передачи данных</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  Ваши данные могут обрабатываться в странах, отличных от вашей страны проживания. Мы обеспечиваем
                  адекватный уровень защиты данных при международных передачах.
                </p>
                <p>
                  При передаче данных в страны, не обеспечивающие адекватный уровень защиты данных, мы используем
                  стандартные договорные положения, одобренные регулирующими органами.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Children's Privacy */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Конфиденциальность детей</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  Наши сервисы не предназначены для лиц младше 18 лет. Мы сознательно не собираем личную информацию от
                  детей младше 18 лет.
                </p>
                <p>
                  Если нам станет известно, что мы собрали личную информацию от ребенка младше 18 лет без согласия
                  родителей, мы примем меры для удаления такой информации.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Связаться с нами</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Если у вас есть вопросы о данной Политике конфиденциальности или обработке ваших данных
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-white/70">{contactInfo.email}</p>
                </div>
                <div className="text-center">
                  <FileText className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Адрес</h3>
                  <p className="text-white/70">{contactInfo.address}</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Телефон</h3>
                  <p className="text-white/70">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Связаться с нами
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
