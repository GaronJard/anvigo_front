"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BarChart3, Search, Target, MessageSquare, Home, User, LogOut } from "lucide-react"
import { useAuth } from "../contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const menuItems = [
    { id: "dashboard", label: "Дашборд", icon: Home },
    { id: "keyword-generator", label: "Генератор ключевых слов", icon: Search },
    { id: "position-checker", label: "Проверка позиций", icon: Target },
    { id: "feedback", label: "Обратная связь", icon: MessageSquare },
  ]

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`${mobile ? "flex flex-col space-y-2" : "hidden md:flex md:space-x-4"}`}>
      {menuItems.map((item) => {
        const Icon = item.icon
        return (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "secondary" : "ghost"}
            className={`${
              activeSection === item.id ? "bg-white/20 text-white" : "text-white/80 hover:text-white hover:bg-white/10"
            } ${mobile ? "justify-start" : ""}`}
            onClick={() => {
              setActiveSection(item.id)
              if (mobile) setIsOpen(false)
            }}
          >
            <Icon className="h-4 w-4 mr-2" />
            {item.label}
          </Button>
        )
      })}
    </div>
  )

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Anvigo</span>
            </Link>
            <NavItems />
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/account">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <User className="h-4 w-4 mr-2" />
                Аккаунт
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                    <AvatarFallback className="bg-purple-600 text-white">
                      {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/80 backdrop-blur-md border-white/20" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-white">{user?.name}</p>
                    <p className="w-[200px] truncate text-sm text-white/60">{user?.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem asChild className="text-white hover:bg-white/10">
                  <Link href="/account">
                    <User className="mr-2 h-4 w-4" />
                    <span>Личный кабинет</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem onClick={handleLogout} className="text-white hover:bg-white/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Выйти</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 border-white/10"
            >
              <div className="flex items-center space-x-2 mb-8">
                <BarChart3 className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold text-white">Anvigo</span>
              </div>

              {/* User info in mobile */}
              <div className="flex items-center space-x-3 mb-6 p-3 bg-white/10 rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">{user?.name}</p>
                  <p className="text-sm text-white/60">{user?.email}</p>
                </div>
              </div>

              <NavItems mobile />

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                <Link href="/account">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Личный кабинет
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/10"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Выйти
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
