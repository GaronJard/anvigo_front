"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Loader2, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Ошибка",
        description: "Введите email адрес",
        variant: "destructive",
      })
      return
    }

    if (!email.includes("@")) {
      toast({
        title: "Ошибка",
        description: "Введите корректный email адрес",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSent(true)
      toast({
        title: "Письмо отправлено",
        description: "Проверьте вашу почту для восстановления пароля",
      })
      setLoading(false)
    }, 2000)
  }

  const handleResend = () => {
    setLoading(true)
    setTimeout(() => {
      toast({
        title: "Письмо отправлено повторно",
        description: "Проверьте вашу почту",
      })
      setLoading(false)
    }, 1000)
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2">
              <BarChart3 className="h-10 w-10 text-purple-400" />
              <span className="text-2xl font-bold text-white">Anvigo</span>
            </Link>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-2xl text-white mb-2">Письмо отправлено</CardTitle>
              <CardDescription className="text-white/60 mb-6">
                Мы отправили инструкции по восстановлению пароля на адрес:
                <br />
                <span className="text-white font-medium">{email}</span>
              </CardDescription>

              <div className="space-y-4">
                <p className="text-white/80 text-sm">
                  Не получили письмо? Проверьте папку "Спам" или попробуйте еще раз.
                </p>

                <Button
                  onClick={handleResend}
                  disabled={loading}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    "Отправить повторно"
                  )}
                </Button>

                <Link href="/login">
                  <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Вернуться к входу
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <BarChart3 className="h-10 w-10 text-purple-400" />
            <span className="text-2xl font-bold text-white">Anvigo</span>
          </Link>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Восстановление пароля</CardTitle>
            <CardDescription className="text-white/60">
              Введите ваш email и мы отправим инструкции по восстановлению пароля
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  disabled={loading}
                />
              </div>

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
                  "Отправить инструкции"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Вернуться к входу
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  )
}
