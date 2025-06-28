"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      })
      return
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Ошибка",
        description: "Введите корректный email",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setError(false)

    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.1 // 90% success rate

      if (success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        toast({
          title: "Сообщение отправлено",
          description: "Спасибо за обратную связь! Мы свяжемся с вами в ближайшее время.",
        })
      } else {
        setError(true)
        toast({
          title: "Ошибка отправки",
          description: "Не удалось отправить сообщение. Попробуйте позже.",
          variant: "destructive",
        })
      }

      setLoading(false)
    }, 2000)
  }

  const resetForm = () => {
    setSubmitted(false)
    setError(false)
    setFormData({ name: "", email: "", message: "" })
  }

  if (submitted) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Обратная связь</h1>
          <p className="text-white/60">Мы ценим ваше мнение и предложения</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 border-green-500/50 bg-green-500/10">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-400 mb-2">Сообщение отправлено!</h2>
            <p className="text-white/80 mb-6">
              Спасибо за обратную связь! Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
            </p>
            <Button
              onClick={resetForm}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
            >
              Отправить еще одно сообщение
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Обратная связь</h1>
        <p className="text-white/60">Мы ценим ваше мнение и предложения</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Отправить сообщение</CardTitle>
            <CardDescription className="text-white/60">
              Расскажите нам о ваших предложениях или сообщите о проблемах
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Имя
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Опишите ваше предложение или проблему..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-400 text-sm">
                  <XCircle className="h-4 w-4" />
                  <span>Не удалось отправить сообщение. Попробуйте позже.</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Контактная информация</CardTitle>
            <CardDescription className="text-white/60">Другие способы связи с нами</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Email поддержки</h3>
              <p className="text-white/80">support@anvigo.ru</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Время работы</h3>
              <p className="text-white/80">Пн-Пт: 9:00 - 18:00 (МСК)</p>
              <p className="text-white/80">Сб-Вс: 10:00 - 16:00 (МСК)</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Среднее время ответа</h3>
              <p className="text-white/80">В течение 24 часов</p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-white font-semibold mb-3">Часто задаваемые вопросы</h3>
              <div className="space-y-2 text-sm">
                <p className="text-white/80">• Как начать работу с платформой?</p>
                <p className="text-white/80">• Как интерпретировать данные аналитики?</p>
                <p className="text-white/80">• Проблемы с генерацией ключевых слов</p>
                <p className="text-white/80">• Вопросы по проверке позиций</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
