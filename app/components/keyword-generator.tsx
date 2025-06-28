"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Download, Search, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Keyword {
  id: number
  keyword: string
  frequency: number
  competition: "low" | "medium" | "high"
  demand: number
  relevance: number
}

export default function KeywordGenerator() {
  const [baseKeyword, setBaseKeyword] = useState("")
  const [depth, setDepth] = useState([3])
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const [loading, setLoading] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [currentPage, setCurrentPage] = useState(1)
  const { toast } = useToast()

  const itemsPerPage = 15

  const generateKeywords = async () => {
    if (!baseKeyword.trim()) {
      toast({
        title: "Ошибка",
        description: "Введите базовое ключевое слово",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      const mockKeywords: Keyword[] = [
        { id: 1, keyword: `${baseKeyword} купить`, frequency: 12500, competition: "high", demand: 85, relevance: 95 },
        { id: 2, keyword: `${baseKeyword} цена`, frequency: 8900, competition: "medium", demand: 78, relevance: 88 },
        { id: 3, keyword: `${baseKeyword} отзывы`, frequency: 6700, competition: "low", demand: 65, relevance: 82 },
        {
          id: 4,
          keyword: `${baseKeyword} интернет магазин`,
          frequency: 15200,
          competition: "high",
          demand: 92,
          relevance: 90,
        },
        { id: 5, keyword: `${baseKeyword} дешево`, frequency: 4300, competition: "medium", demand: 58, relevance: 75 },
        {
          id: 6,
          keyword: `${baseKeyword} качественный`,
          frequency: 3800,
          competition: "low",
          demand: 72,
          relevance: 85,
        },
        {
          id: 7,
          keyword: `${baseKeyword} доставка`,
          frequency: 7200,
          competition: "medium",
          demand: 68,
          relevance: 78,
        },
        { id: 8, keyword: `${baseKeyword} скидка`, frequency: 5600, competition: "high", demand: 88, relevance: 80 },
        { id: 9, keyword: `${baseKeyword} новый`, frequency: 9100, competition: "medium", demand: 75, relevance: 83 },
        { id: 10, keyword: `${baseKeyword} лучший`, frequency: 11200, competition: "high", demand: 90, relevance: 87 },
        { id: 11, keyword: `${baseKeyword} размер`, frequency: 6800, competition: "low", demand: 62, relevance: 79 },
        { id: 12, keyword: `${baseKeyword} цвет`, frequency: 5400, competition: "low", demand: 58, relevance: 76 },
        { id: 13, keyword: `${baseKeyword} бренд`, frequency: 8700, competition: "medium", demand: 82, relevance: 84 },
        { id: 14, keyword: `${baseKeyword} модель`, frequency: 7900, competition: "medium", demand: 71, relevance: 81 },
        {
          id: 15,
          keyword: `${baseKeyword} характеристики`,
          frequency: 4100,
          competition: "low",
          demand: 55,
          relevance: 73,
        },
        { id: 16, keyword: `${baseKeyword} сравнение`, frequency: 3200, competition: "low", demand: 48, relevance: 70 },
        {
          id: 17,
          keyword: `${baseKeyword} рейтинг`,
          frequency: 6300,
          competition: "medium",
          demand: 77,
          relevance: 82,
        },
        { id: 18, keyword: `${baseKeyword} топ`, frequency: 8500, competition: "high", demand: 85, relevance: 86 },
      ]

      setKeywords(mockKeywords)
      setLoading(false)
      setCurrentPage(1)
    }, 2000)
  }

  const sortedKeywords = [...keywords].sort((a, b) => {
    switch (sortBy) {
      case "frequency":
        return b.frequency - a.frequency
      case "competition":
        const competitionOrder = { low: 1, medium: 2, high: 3 }
        return competitionOrder[a.competition] - competitionOrder[b.competition]
      case "relevance":
      default:
        return b.relevance - a.relevance
    }
  })

  const paginatedKeywords = sortedKeywords.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const totalPages = Math.ceil(sortedKeywords.length / itemsPerPage)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Скопировано",
      description: "Ключевое слово скопировано в буфер обмена",
    })
  }

  const exportKeywords = () => {
    const text = sortedKeywords.map((k) => k.keyword).join("\n")
    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `keywords-${baseKeyword}.txt`
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "Экспорт завершен",
      description: "Ключевые слова экспортированы в файл",
    })
  }

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case "high":
        return "bg-red-500/20 text-red-300"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300"
      case "low":
        return "bg-green-500/20 text-green-300"
      default:
        return "bg-gray-500/20 text-gray-300"
    }
  }

  const getCompetitionText = (competition: string) => {
    switch (competition) {
      case "high":
        return "Высокая"
      case "medium":
        return "Средняя"
      case "low":
        return "Низкая"
      default:
        return "Неизвестно"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Генератор ключевых слов</h1>
        <p className="text-white/60">Найдите релевантные ключевые слова для ваших товаров на WildBerries</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Настройки генерации</CardTitle>
          <CardDescription className="text-white/60">
            Введите базовое ключевое слово и настройте параметры поиска
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="keyword" className="text-white">
              Базовое ключевое слово
            </Label>
            <Input
              id="keyword"
              placeholder="Например: мужская рубашка"
              value={baseKeyword}
              onChange={(e) => setBaseKeyword(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-white">Глубина поиска: {depth[0]}</Label>
            <Slider value={depth} onValueChange={setDepth} max={5} min={1} step={1} className="w-full" />
            <div className="flex justify-between text-sm text-white/60">
              <span>Базовый</span>
              <span>Расширенный</span>
            </div>
          </div>

          <Button
            onClick={generateKeywords}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Генерация...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Генерировать ключевые слова
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {keywords.length > 0 && (
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <CardTitle className="text-white">Результаты ({keywords.length})</CardTitle>
                <CardDescription className="text-white/60">Найденные ключевые слова с метриками</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[180px] bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">По релевантности</SelectItem>
                    <SelectItem value="frequency">По частоте</SelectItem>
                    <SelectItem value="competition">По конкуренции</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  onClick={exportKeywords}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Экспорт
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {paginatedKeywords.map((keyword) => (
                <div
                  key={keyword.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="flex-1 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium">{keyword.keyword}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(keyword.keyword)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-white/60 hover:text-white p-1 h-auto"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="text-white/60">Частота: {keyword.frequency.toLocaleString()}</span>
                      <Badge className={getCompetitionColor(keyword.competition)}>
                        {getCompetitionText(keyword.competition)}
                      </Badge>
                      <span className="text-white/60">Спрос: {keyword.demand}%</span>
                      <span className="text-white/60">Релевантность: {keyword.relevance}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Назад
                </Button>
                <span className="text-white/60 text-sm">
                  Страница {currentPage} из {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Далее
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
