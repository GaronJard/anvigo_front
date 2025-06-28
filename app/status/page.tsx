"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe, Zap } from "lucide-react"
import SharedNavigation from "../components/shared-navigation"
import SharedFooter from "../components/shared-footer"

const systemStatus = {
  overall: "operational", // operational, degraded, outage
  lastUpdated: "2024-01-20T15:30:00Z",
}

const services = [
  {
    name: "API сервис",
    description: "Основной API для получения данных",
    status: "operational",
    uptime: "99.98%",
    responseTime: "145ms",
    icon: Server,
  },
  {
    name: "Веб-платформа",
    description: "Пользовательский интерфейс",
    status: "operational",
    uptime: "99.95%",
    responseTime: "320ms",
    icon: Globe,
  },
  {
    name: "База данных",
    description: "Хранилище данных WildBerries",
    status: "operational",
    uptime: "99.99%",
    responseTime: "12ms",
    icon: Database,
  },
  {
    name: "Система аутентификации",
    description: "Авторизация и управление пользователями",
    status: "operational",
    uptime: "99.97%",
    responseTime: "89ms",
    icon: Zap,
  },
  {
    name: "Система уведомлений",
    description: "Email и push уведомления",
    status: "maintenance",
    uptime: "99.92%",
    responseTime: "250ms",
    icon: Activity,
  },
  {
    name: "Файловое хранилище",
    description: "Загрузка и хранение файлов",
    status: "operational",
    uptime: "99.94%",
    responseTime: "180ms",
    icon: Server,
  },
]

const incidents = [
  {
    id: 1,
    title: "Плановое обслуживание системы уведомлений",
    description: "Обновление серверов системы уведомлений для улучшения производительности",
    status: "in-progress",
    severity: "maintenance",
    startTime: "2024-01-20T14:00:00Z",
    estimatedEnd: "2024-01-20T16:00:00Z",
    updates: [
      {
        time: "2024-01-20T15:30:00Z",
        message: "Обслуживание продолжается согласно плану. Ожидаемое завершение в 16:00 МСК.",
      },
      {
        time: "2024-01-20T14:00:00Z",
        message: "Начато плановое обслуживание системы уведомлений.",
      },
    ],
  },
  {
    id: 2,
    title: "Кратковременное замедление API",
    description: "Увеличенное время ответа API из-за высокой нагрузки",
    status: "resolved",
    severity: "minor",
    startTime: "2024-01-19T10:15:00Z",
    endTime: "2024-01-19T10:45:00Z",
    updates: [
      {
        time: "2024-01-19T10:45:00Z",
        message: "Проблема решена. Время ответа API вернулось к нормальным значениям.",
      },
      {
        time: "2024-01-19T10:20:00Z",
        message: "Команда работает над решением проблемы с производительностью API.",
      },
      {
        time: "2024-01-19T10:15:00Z",
        message: "Обнаружено увеличение времени ответа API. Расследуем причины.",
      },
    ],
  },
]

const metrics = [
  {
    name: "Общее время работы",
    value: "99.96%",
    period: "За последние 30 дней",
    trend: "up",
  },
  {
    name: "Среднее время ответа",
    value: "165ms",
    period: "За последние 24 часа",
    trend: "stable",
  },
  {
    name: "Успешных запросов",
    value: "99.98%",
    period: "За последние 7 дней",
    trend: "up",
  },
  {
    name: "Активных пользователей",
    value: "10,247",
    period: "Сейчас онлайн",
    trend: "up",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="h-5 w-5 text-green-400" />
    case "maintenance":
      return <AlertCircle className="h-5 w-5 text-yellow-400" />
    case "degraded":
      return <AlertCircle className="h-5 w-5 text-orange-400" />
    case "outage":
      return <XCircle className="h-5 w-5 text-red-400" />
    default:
      return <CheckCircle className="h-5 w-5 text-green-400" />
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "operational":
      return "Работает"
    case "maintenance":
      return "Обслуживание"
    case "degraded":
      return "Снижена производительность"
    case "outage":
      return "Недоступен"
    default:
      return "Неизвестно"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "bg-green-500/20 text-green-300"
    case "maintenance":
      return "bg-yellow-500/20 text-yellow-300"
    case "degraded":
      return "bg-orange-500/20 text-orange-300"
    case "outage":
      return "bg-red-500/20 text-red-300"
    default:
      return "bg-gray-500/20 text-gray-300"
  }
}

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            {getStatusIcon(systemStatus.overall)}
            <Badge className={`ml-3 ${getStatusColor(systemStatus.overall)}`}>
              {systemStatus.overall === "operational" ? "Все системы работают" : "Проблемы с системой"}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Статус
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              системы
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Мониторинг работоспособности всех сервисов платформы Anvigo в режиме реального времени
          </p>
          <p className="text-white/60">Последнее обновление: {formatTime(systemStatus.lastUpdated)}</p>
        </section>

        {/* Overall Metrics */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-white font-medium mb-1">{metric.name}</div>
                  <div className="text-white/60 text-sm">{metric.period}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Status */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Статус сервисов</h2>
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Icon className="h-8 w-8 text-purple-400" />
                        <div>
                          <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                          <p className="text-white/60">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-white/60 text-sm">Время работы</div>
                          <div className="text-white font-medium">{service.uptime}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white/60 text-sm">Отклик</div>
                          <div className="text-white font-medium">{service.responseTime}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(service.status)}
                          <Badge className={getStatusColor(service.status)}>{getStatusText(service.status)}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Incidents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Инциденты и обслуживание</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <Card key={incident.id} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white flex items-center">
                        {incident.severity === "maintenance" && <Clock className="h-5 w-5 mr-2 text-yellow-400" />}
                        {incident.severity === "minor" && <AlertCircle className="h-5 w-5 mr-2 text-orange-400" />}
                        {incident.severity === "major" && <XCircle className="h-5 w-5 mr-2 text-red-400" />}
                        {incident.title}
                      </CardTitle>
                      <CardDescription className="text-white/60 mt-2">{incident.description}</CardDescription>
                    </div>
                    <Badge
                      className={
                        incident.status === "resolved"
                          ? "bg-green-500/20 text-green-300"
                          : incident.status === "in-progress"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-red-500/20 text-red-300"
                      }
                    >
                      {incident.status === "resolved"
                        ? "Решено"
                        : incident.status === "in-progress"
                          ? "В процессе"
                          : "Расследуется"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span>Начало: {formatTime(incident.startTime)}</span>
                      {incident.endTime && <span>Окончание: {formatTime(incident.endTime)}</span>}
                      {incident.estimatedEnd && !incident.endTime && (
                        <span>Ожидаемое окончание: {formatTime(incident.estimatedEnd)}</span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-white font-medium">Обновления:</h4>
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex space-x-3 p-3 bg-white/5 rounded-lg">
                          <div className="text-white/60 text-sm whitespace-nowrap">{formatTime(update.time)}</div>
                          <div className="text-white/80 text-sm">{update.message}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Подписка на обновления</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Получайте уведомления о статусе системы и плановых работах
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Подписаться на email
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  RSS лента
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Webhook
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
