"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BarChart3, Eye, EyeOff, Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      })
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      })
      return false
    }

    if (formData.password.length < 6) {
      toast({
        title: "Ошибка",
        description: "Пароль должен содержать минимум 6 символов",
        variant: "destructive",
      })
      return false
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями использования",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.1 // 90% success rate

      if (success) {
        login({
          id: "1",
          email: formData.email,
          name: formData.name,
          avatar: "/placeholder.svg?height=40&width=40",
        })
        toast({
          title: "Регистрация успешна!",
          description: "Добро пожаловать в Anvigo",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Ошибка регистрации",
          description: "Пользователь с таким email уже существует",
          variant: "destructive",
        })
      }
      setLoading(false)
    }, 2000)
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length === 0) return { strength: 0, text: "" }
    if (password.length < 6) return { strength: 1, text: "Слабый", color: "text-red-400" }
    if (password.length < 10) return { strength: 2, text: "Средний", color: "text-yellow-400" }
    return { strength: 3, text: "Сильный", color: "text-green-400" }
  }

  const passwordStrength = getPasswordStrength()

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
            <CardTitle className="text-2xl text-white">Создать аккаунт</CardTitle>
            <CardDescription className="text-white/60">
              Зарегистрируйтесь и получите 14 дней бесплатного доступа
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
                  type="text"
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
                <Label htmlFor="password" className="text-white">
                  Пароль
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Минимум 6 символов"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pr-10"
                    disabled={loading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-white/60 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.password && (
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          passwordStrength.strength === 1
                            ? "bg-red-400 w-1/3"
                            : passwordStrength.strength === 2
                              ? "bg-yellow-400 w-2/3"
                              : passwordStrength.strength === 3
                                ? "bg-green-400 w-full"
                                : "w-0"
                        }`}
                      />
                    </div>
                    <span className={`text-xs ${passwordStrength.color}`}>{passwordStrength.text}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">
                  Подтвердите пароль
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pr-10"
                    disabled={loading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-white/60 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="flex items-center space-x-1 text-green-400 text-xs">
                    <CheckCircle className="h-3 w-3" />
                    <span>Пароли совпадают</span>
                  </div>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                  disabled={loading}
                  className="mt-1"
                />
                <Label htmlFor="agreeToTerms" className="text-white/80 text-sm leading-relaxed">
                  Я согласен с{" "}
                  <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    условиями использования
                  </Link>{" "}
                  и{" "}
                  <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    политикой конфиденциальности
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Создание аккаунта...
                  </>
                ) : (
                  "Создать аккаунт"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Уже есть аккаунт?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Войти
                </Link>
              </p>
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
