"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Code, Key, Book, ExternalLink, Copy } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import SharedNavigation from "../components/shared-navigation"

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/products",
    description: "Получить список товаров",
    parameters: [
      { name: "page", type: "integer", required: false, description: "Номер страницы (по умолчанию: 1)" },
      {
        name: "limit",
        type: "integer",
        required: false,
        description: "Количество товаров на странице (по умолчанию: 20)",
      },
      { name: "category", type: "string", required: false, description: "Фильтр по категории" },
    ],
    response: `{
  "data": [
    {
      "id": "12345",
      "name": "Мужская рубашка классическая",
      "price": 2890,
      "category": "Одежда",
      "rating": 4.5,
      "reviews_count": 127,
      "position": 12,
      "sales_count": 45
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}`,
  },
  {
    method: "GET",
    endpoint: "/api/v1/products/{id}",
    description: "Получить информацию о конкретном товаре",
    parameters: [{ name: "id", type: "string", required: true, description: "Уникальный идентификатор товара" }],
    response: `{
  "data": {
    "id": "12345",
    "name": "Мужская рубашка классическая",
    "description": "Классическая мужская рубашка из хлопка",
    "price": 2890,
    "category": "Одежда",
    "brand": "Fashion Brand",
    "rating": 4.5,
    "reviews_count": 127,
    "position": 12,
    "sales_count": 45,
    "images": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ],
    "keywords": ["рубашка", "мужская", "классическая", "хлопок"],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-20T14:45:00Z"
  }
}`,
  },
  {
    method: "GET",
    endpoint: "/api/v1/keywords",
    description: "Получить ключевые слова для товара",
    parameters: [
      { name: "query", type: "string", required: true, description: "Базовое ключевое слово" },
      { name: "depth", type: "integer", required: false, description: "Глубина поиска (1-5, по умолчанию: 3)" },
      { name: "limit", type: "integer", required: false, description: "Максимальное количество результатов" },
    ],
    response: `{
  "data": [
    {
      "keyword": "мужская рубашка белая",
      "frequency": 12500,
      "competition": "high",
      "demand": 85,
      "relevance": 95
    },
    {
      "keyword": "рубашка классическая",
      "frequency": 8900,
      "competition": "medium",
      "demand": 78,
      "relevance": 88
    }
  ],
  "meta": {
    "base_query": "мужская рубашка",
    "total_found": 25,
    "depth": 3
  }
}`,
  },
  {
    method: "POST",
    endpoint: "/api/v1/position-check",
    description: "Проверить позицию товара в поиске",
    parameters: [
      { name: "product_url", type: "string", required: true, description: "URL товара на WildBerries" },
      { name: "query", type: "string", required: true, description: "Поисковый запрос" },
      { name: "city", type: "string", required: false, description: "Город для проверки" },
    ],
    response: `{
  "data": {
    "found": true,
    "position": 15,
    "page": 2,
    "query": "мужская рубашка белая",
    "city": "Москва",
    "checked_at": "2024-01-20T15:30:00Z"
  }
}`,
  },
  {
    method: "GET",
    endpoint: "/api/v1/analytics/sales",
    description: "Получить аналитику продаж",
    parameters: [
      {
        name: "product_id",
        type: "string",
        required: false,
        description: "ID товара (если не указан, возвращает общую статистику)",
      },
      { name: "period", type: "string", required: false, description: "Период: day, week, month (по умолчанию: week)" },
      { name: "start_date", type: "string", required: false, description: "Начальная дата в формате YYYY-MM-DD" },
      { name: "end_date", type: "string", required: false, description: "Конечная дата в формате YYYY-MM-DD" },
    ],
    response: `{
  "data": {
    "revenue": {
      "value": 125430,
      "change": 12.5,
      "trend": "up"
    },
    "sales": {
      "value": 1247,
      "change": -3.2,
      "trend": "down"
    },
    "avg_check": {
      "value": 2340,
      "change": 8.7,
      "trend": "up"
    },
    "chart_data": [
      {
        "date": "2024-01-15",
        "revenue": 15430,
        "sales": 147
      }
    ]
  }
}`,
  },
]

const codeExamples = {
  javascript: `// Получение списка товаров
const response = await fetch('https://api.anvigo.ru/v1/products', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,
  python: `import requests

# Получение списка товаров
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.anvigo.ru/v1/products', headers=headers)
data = response.json()
print(data)`,
  curl: `# Получение списка товаров
curl -X GET "https://api.anvigo.ru/v1/products" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
}

export default function ApiDocsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEndpoint, setSelectedEndpoint] = useState(apiEndpoints[0])
  const { toast } = useToast()

  const filteredEndpoints = apiEndpoints.filter(
    (endpoint) =>
      endpoint.endpoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Скопировано",
      description: "Код скопирован в буфер обмена",
    })
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-500/20 text-green-300"
      case "POST":
        return "bg-blue-500/20 text-blue-300"
      case "PUT":
        return "bg-yellow-500/20 text-yellow-300"
      case "DELETE":
        return "bg-red-500/20 text-red-300"
      default:
        return "bg-gray-500/20 text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <SharedNavigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            <Code className="mr-2 h-4 w-4" />
            API Documentation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Документация
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Интегрируйте аналитику WildBerries в ваши приложения с помощью нашего RESTful API
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 sticky top-4">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Навигация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                    <Input
                      placeholder="Поиск endpoints..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-1">
                    {filteredEndpoints.map((endpoint, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedEndpoint(endpoint)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedEndpoint.endpoint === endpoint.endpoint
                            ? "bg-purple-600/30 text-white"
                            : "text-white/80 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className={`text-xs ${getMethodColor(endpoint.method)}`}>{endpoint.method}</Badge>
                        </div>
                        <div className="text-sm font-mono">{endpoint.endpoint}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Getting Started */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Key className="mr-2 h-5 w-5" />
                  Быстрый старт
                </CardTitle>
                <CardDescription className="text-white/60">
                  Начните работу с API Anvigo за несколько минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">1. Получите API ключ</h4>
                    <p className="text-white/80 text-sm mb-3">
                      Зарегистрируйтесь в личном кабинете и получите ваш уникальный API ключ в разделе "Настройки API".
                    </p>
                    <Link href="/register">
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                        Получить API ключ
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">2. Базовый URL</h4>
                    <div className="bg-black/30 p-3 rounded-lg font-mono text-white text-sm">
                      https://api.anvigo.ru/v1
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">3. Аутентификация</h4>
                    <p className="text-white/80 text-sm mb-2">Используйте Bearer токен в заголовке Authorization:</p>
                    <div className="bg-black/30 p-3 rounded-lg font-mono text-white text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Endpoint Details */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Badge className={getMethodColor(selectedEndpoint.method)}>{selectedEndpoint.method}</Badge>
                  <CardTitle className="text-white font-mono">{selectedEndpoint.endpoint}</CardTitle>
                </div>
                <CardDescription className="text-white/60">{selectedEndpoint.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="parameters" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-white/10">
                    <TabsTrigger value="parameters" className="text-white data-[state=active]:bg-purple-600">
                      Параметры
                    </TabsTrigger>
                    <TabsTrigger value="response" className="text-white data-[state=active]:bg-purple-600">
                      Ответ
                    </TabsTrigger>
                    <TabsTrigger value="examples" className="text-white data-[state=active]:bg-purple-600">
                      Примеры
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="parameters" className="mt-6">
                    <div className="space-y-4">
                      {selectedEndpoint.parameters.map((param, index) => (
                        <div key={index} className="border border-white/20 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-white font-mono">{param.name}</span>
                            <Badge variant="outline" className="border-white/20 text-white">
                              {param.type}
                            </Badge>
                            {param.required && <Badge className="bg-red-500/20 text-red-300">обязательный</Badge>}
                          </div>
                          <p className="text-white/80 text-sm">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="response" className="mt-6">
                    <div className="relative">
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 border-white/20 text-white hover:bg-white/10 bg-transparent z-10"
                        onClick={() => copyToClipboard(selectedEndpoint.response)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto text-white text-sm">
                        <code>{selectedEndpoint.response}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples" className="mt-6">
                    <Tabs defaultValue="javascript" className="w-full">
                      <TabsList className="bg-white/10">
                        <TabsTrigger value="javascript" className="text-white data-[state=active]:bg-purple-600">
                          JavaScript
                        </TabsTrigger>
                        <TabsTrigger value="python" className="text-white data-[state=active]:bg-purple-600">
                          Python
                        </TabsTrigger>
                        <TabsTrigger value="curl" className="text-white data-[state=active]:bg-purple-600">
                          cURL
                        </TabsTrigger>
                      </TabsList>

                      {Object.entries(codeExamples).map(([lang, code]) => (
                        <TabsContent key={lang} value={lang} className="mt-4">
                          <div className="relative">
                            <Button
                              size="sm"
                              variant="outline"
                              className="absolute top-2 right-2 border-white/20 text-white hover:bg-white/10 bg-transparent z-10"
                              onClick={() => copyToClipboard(code)}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto text-white text-sm">
                              <code>{code}</code>
                            </pre>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Rate Limits */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Ограничения API</CardTitle>
                <CardDescription className="text-white/60">Информация о лимитах запросов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">1,000</div>
                    <div className="text-white/60 text-sm">запросов в час</div>
                    <div className="text-white/60 text-xs mt-1">Базовый план</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">10,000</div>
                    <div className="text-white/60 text-sm">запросов в час</div>
                    <div className="text-white/60 text-xs mt-1">Профессионал</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">∞</div>
                    <div className="text-white/60 text-sm">без ограничений</div>
                    <div className="text-white/60 text-xs mt-1">Энтерпрайз</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Error Codes */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Коды ошибок</CardTitle>
                <CardDescription className="text-white/60">Стандартные HTTP коды ответов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-green-400 font-mono">200</span>
                      <span className="text-white ml-3">OK</span>
                    </div>
                    <span className="text-white/60 text-sm">Успешный запрос</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-yellow-400 font-mono">400</span>
                      <span className="text-white ml-3">Bad Request</span>
                    </div>
                    <span className="text-white/60 text-sm">Неверные параметры запроса</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-red-400 font-mono">401</span>
                      <span className="text-white ml-3">Unauthorized</span>
                    </div>
                    <span className="text-white/60 text-sm">Неверный API ключ</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-red-400 font-mono">429</span>
                      <span className="text-white ml-3">Too Many Requests</span>
                    </div>
                    <span className="text-white/60 text-sm">Превышен лимит запросов</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-red-400 font-mono">500</span>
                      <span className="text-white ml-3">Internal Server Error</span>
                    </div>
                    <span className="text-white/60 text-sm">Внутренняя ошибка сервера</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Нужна помощь с интеграцией?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Наша команда разработчиков готова помочь вам с интеграцией API и ответить на любые вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Связаться с поддержкой
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Примеры на GitHub
                </Button>
              </div>
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
