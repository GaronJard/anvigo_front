"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { User, Shield, CreditCard, Bell, Loader2, Camera, LogOut, Trash2, Settings, Download, Eye } from "lucide-react"
import { useAuth } from "../contexts/auth-context"
import { useToast } from "@/hooks/use-toast"
import Navigation from "../components/navigation"

export default function AccountPage() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [notifications, setNotifications] = useState({
    email: true,
    positions: true,
    reports: false,
    marketing: false,
  })
  const [loading, setLoading] = useState(false)
  const [activeSection, setActiveSection] = useState("account")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    } else if (user) {
      setProfileData({
        name: user.name,
        email: user.email,
        phone: "",
        company: "",
      })
    }
  }, [user, isLoading, router])

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Профиль обновлен",
        description: "Ваши данные успешно сохранены",
      })
      setLoading(false)
    }, 1000)
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Новые пароли не совпадают",
        variant: "destructive",
      })
      return
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        title: "Ошибка",
        description: "Пароль должен содержать минимум 6 символов",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Пароль изменен",
        description: "Ваш пароль успешно обновлен",
      })
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      setLoading(false)
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы",
    })
  }

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
    toast({
      title: "Настройки сохранены",
      description: "Настройки уведомлений обновлены",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center">
        <div className="text-white">Загрузка...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Личный кабинет</h1>
            <p className="text-white/60">Управляйте вашим профилем и настройками аккаунта</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-purple-600 text-white text-xl">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0 bg-purple-600 hover:bg-purple-700"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{user.name}</h3>
                  <p className="text-white/60 mb-4">{user.email}</p>
                  <Badge className="bg-green-500/20 text-green-300 mb-6">Активный аккаунт</Badge>

                  {/* Quick Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60">Запросов сегодня</span>
                      <span className="text-white font-medium">47/1000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60">Позиций отслеживается</span>
                      <span className="text-white font-medium">23/100</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60">Дней до продления</span>
                      <span className="text-white font-medium">22</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Выйти
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Usage Statistics */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 mt-6">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Статистика использования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">API запросы</span>
                      <span className="text-white">47%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "47%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Позиции</span>
                      <span className="text-white">23%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Profile Information */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Личная информация
                  </CardTitle>
                  <CardDescription className="text-white/60">Обновите ваши личные данные</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Имя
                        </Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
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
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Телефон
                        </Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          placeholder="+7 (999) 123-45-67"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Компания
                        </Label>
                        <Input
                          id="company"
                          value={profileData.company}
                          onChange={(e) => setProfileData((prev) => ({ ...prev, company: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          placeholder="Название компании"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Сохранение...
                        </>
                      ) : (
                        "Сохранить изменения"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Password Change */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Изменить пароль
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Обновите ваш пароль для безопасности аккаунта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword" className="text-white">
                        Текущий пароль
                      </Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        disabled={loading}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-white">
                          Новый пароль
                        </Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          placeholder="Минимум 6 символов"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-white">
                          Подтвердите пароль
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          placeholder="Повторите новый пароль"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Изменение...
                        </>
                      ) : (
                        "Изменить пароль"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Subscription */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Подписка и биллинг
                  </CardTitle>
                  <CardDescription className="text-white/60">Управляйте вашей подпиской и платежами</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">План "Профессионал"</h4>
                        <p className="text-white/60 text-sm">Активна до 15 февраля 2024</p>
                        <p className="text-white/60 text-sm">4,990 ₽/месяц</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-300">Активна</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-white">1,000</div>
                        <div className="text-white/60 text-sm">API запросов/день</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-white">100</div>
                        <div className="text-white/60 text-sm">Позиций для отслеживания</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-white">∞</div>
                        <div className="text-white/60 text-sm">Экспорт данных</div>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white">Автопродление</span>
                        <p className="text-white/60 text-sm">Автоматическое продление подписки</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        <Settings className="mr-2 h-4 w-4" />
                        Изменить план
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        <Eye className="mr-2 h-4 w-4" />
                        История платежей
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        <Download className="mr-2 h-4 w-4" />
                        Скачать счет
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Уведомления
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Настройте, какие уведомления вы хотите получать
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Email уведомления</h4>
                        <p className="text-white/60 text-sm">Получать уведомления на email</p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => handleNotificationChange("email", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Изменения позиций</h4>
                        <p className="text-white/60 text-sm">Уведомления об изменении позиций товаров</p>
                      </div>
                      <Switch
                        checked={notifications.positions}
                        onCheckedChange={(checked) => handleNotificationChange("positions", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Еженедельные отчеты</h4>
                        <p className="text-white/60 text-sm">Получать еженедельную сводку по продажам</p>
                      </div>
                      <Switch
                        checked={notifications.reports}
                        onCheckedChange={(checked) => handleNotificationChange("reports", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Маркетинговые уведомления</h4>
                        <p className="text-white/60 text-sm">Новости продукта и специальные предложения</p>
                      </div>
                      <Switch
                        checked={notifications.marketing}
                        onCheckedChange={(checked) => handleNotificationChange("marketing", checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* API Access */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    API доступ
                  </CardTitle>
                  <CardDescription className="text-white/60">Управляйте API ключами и интеграциями</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">Основной API ключ</h4>
                        <Badge className="bg-green-500/20 text-green-300">Активен</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <code className="bg-black/30 text-white/80 px-3 py-1 rounded text-sm font-mono">
                          ak_live_••••••••••••••••••••••••••••••••
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          Показать
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          Копировать
                        </Button>
                      </div>
                      <p className="text-white/60 text-sm mt-2">Создан 15 января 2024</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        Создать новый ключ
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        Документация API
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="bg-red-500/10 backdrop-blur-md border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center">
                    <Trash2 className="mr-2 h-5 w-5" />
                    Опасная зона
                  </CardTitle>
                  <CardDescription className="text-red-300/60">Необратимые действия с вашим аккаунтом</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                      <h4 className="text-red-400 font-medium mb-2">Удалить аккаунт</h4>
                      <p className="text-red-300/80 text-sm mb-4">
                        Это действие нельзя отменить. Все ваши данные, включая историю запросов, настройки и подписку
                        будут удалены навсегда.
                      </p>
                      <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                        Удалить аккаунт
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
