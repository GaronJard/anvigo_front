import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "./contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anvigo - WildBerries Analytics Platform",
  description:
    "Specialized analytics platform for WildBerries sellers and marketers. Analyze product positioning, optimize search strategies, and monitor performance metrics.",
  keywords: "WildBerries, analytics, marketplace, SEO, keywords, position tracking",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
