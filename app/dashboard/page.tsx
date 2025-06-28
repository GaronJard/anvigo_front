"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/auth-context"
import DashboardContent from "../components/dashboard-content"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

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

  return <DashboardContent />
}
