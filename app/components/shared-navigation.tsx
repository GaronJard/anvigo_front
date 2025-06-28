"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function SharedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Anvigo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              О нас
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
              Блог
            </Link>
            <Link href="/api-docs" className="text-white/80 hover:text-white transition-colors">
              API
            </Link>
            <Link href="/careers" className="text-white/80 hover:text-white transition-colors">
              Вакансии
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Войти
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Начать бесплатно
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 border-white/10"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/about" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  О нас
                </Link>
                <Link href="/blog" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Блог
                </Link>
                <Link href="/api-docs" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  API
                </Link>
                <Link href="/careers" className="text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Вакансии
                </Link>
                <div className="pt-4 border-t border-white/10">
                  <Link href="/login">
                    <Button variant="ghost" className="w-full text-white hover:bg-white/10 mb-2">
                      Войти
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600">Начать бесплатно</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
