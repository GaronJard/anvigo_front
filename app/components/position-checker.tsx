"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SearchResult {
  found: boolean
  query?: string
  city?: string
  position?: number
  page?: number
  error?: string
}

interface GeoLocation {
  id: number
  name: string
  latitude: string
  longitude: string
  destination: string
  date_update: string
}

export default function PositionChecker() {
  const [productUrl, setProductUrl] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [cities, setCities] = useState<GeoLocation[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingCities, setLoadingCities] = useState(true)
  const [result, setResult] = useState<SearchResult | null>(null)
  const { toast } = useToast()

  // Load cities from API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://anvigo.ru/api/geo/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setCities(data)
        console.log("Cities loaded successfully:", data.length)
      } catch (error) {
        console.error("Failed to fetch cities from API:", error)
        toast({
          title: "Ошибка",
          description: "Не удалось загрузить список городов",
          variant: "destructive",
        })
      } finally {
        setLoadingCities(false)
      }
    }

    fetchCities()
  }, [toast])

  const checkPosition = async () => {
    if (!productUrl.trim() || !searchQuery.trim() || !selectedCity) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("https://anvigo.ru/api/get_pos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: productUrl.trim(),
          keywords: searchQuery.trim(),
          geo: Number.parseInt(selectedCity),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const selectedCityData = cities.find((city) => city.id === Number.parseInt(selectedCity))

      if (data.found || data.position) {
        setResult({
          found: true,
          query: searchQuery,
          city: selectedCityData?.name,
          position: data.position,
          page: Math.ceil(data.position / 10),
        })
        toast({
          title: "Товар найден!",
          description: `Позиция: ${data.position}`,
        })
      } else {
        setResult({
          found: false,
          query: searchQuery,
          city: selectedCityData?.name,
        })
        toast({
          title: "Товар не найден",
          description: "Товар не найден в результатах поиска",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error checking position:", error)
      setResult({
        found: false,
        error: "Ошибка при проверке позиции",
      })
      toast({
        title: "Ошибка",
        description: "Не удалось проверить позицию товара",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const getResultIcon = () => {
    if (!result) return null

    if (result.error) {
      return <AlertCircle className="h-8 w-8 text-yellow-400" />
    } else if (result.found) {
      return <CheckCircle className="h-8 w-8 text-green-400" />
    } else {
      return <XCircle className="h-8 w-8 text-red-400" />
    }
  }

  const getResultColor = () => {
    if (!result) return ""

    if (result.error) {
      return "border-yellow-500/50 bg-yellow-500/10"
    } else if (result.found) {
      return "border-green-500/50 bg-green-500/10"
    } else {
      return "border-red-500/50 bg-red-500/10"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Проверка позиций</h1>
        <p className="text-white/60">Узнайте, на какой позиции находится ваш товар в поиске WildBerries</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Параметры поиска</CardTitle>
          <CardDescription className="text-white/60">Введите данные для проверки позиции товара</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="product-url" className="text-white">
              URL товара
            </Label>
            <Input
              id="product-url"
              placeholder="https://www.wildberries.ru/catalog/..."
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="search-query" className="text-white">
              Поисковый запрос
            </Label>
            <Input
              id="search-query"
              placeholder="Например: мужская рубашка белая"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white">Город</Label>
            <Select value={selectedCity} onValueChange={setSelectedCity} disabled={loadingCities}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder={loadingCities ? "Загрузка городов..." : "Выберите город"} />
              </SelectTrigger>
              <SelectContent className="bg-black/90 backdrop-blur-xl border-white/20">
                {cities.map((city) => (
                  <SelectItem
                    key={city.id}
                    value={city.id.toString()}
                    className="text-white hover:bg-white/10 focus:bg-white/10"
                  >
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={checkPosition}
            disabled={loading || loadingCities || cities.length === 0}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Проверка позиции...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Проверить позицию
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className={`bg-white/10 backdrop-blur-md border-white/20 ${getResultColor()}`}>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              {getResultIcon()}
              <div className="flex-1">
                {result.error ? (
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Ошибка</h3>
                    <p className="text-white/80">{result.error}</p>
                  </div>
                ) : result.found ? (
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-4">Товар найден!</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <p className="text-white/60 text-sm">Поисковый запрос</p>
                          <p className="text-white font-medium">{result.query}</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Город</p>
                          <p className="text-white font-medium">{result.city}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-white/60 text-sm">Позиция</p>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-500/20 text-green-300 text-lg px-3 py-1">
                              #{result.position}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Страница</p>
                          <p className="text-white font-medium">{result.page}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-4">Товар не найден</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-white/60 text-sm">Поисковый запрос</p>
                        <p className="text-white font-medium">{result.query}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Город</p>
                        <p className="text-white font-medium">{result.city}</p>
                      </div>
                      <p className="text-white/80 mt-4">
                        Товар не найден в результатах поиска. Попробуйте изменить поисковый запрос или проверьте URL
                        товара.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
