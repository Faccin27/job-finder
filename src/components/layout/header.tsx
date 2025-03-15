"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Define user type based on API response
type User = {
  id: number
  name: string
  email: string
  role: string
  picture: string | null
  job: string | null
  createdAt: string
}

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("entrou no fetch")

        const response = await fetch("http://localhost:3535/users/me", {
          credentials: "include", // Permite que cookies sejam enviados automaticamente
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
        }
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-gray-800">
              <span className="text-yellow-500">Job</span>Finder
            </span>
          </div>
          <div className="animate-pulse h-8 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      </nav>
    )
  }

  // Render authenticated navbar
  if (user) {
    return (
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Job<span className="text-yellow-500">Finder</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium text-gray-900 hover:text-yellow-500 transition-colors">
              Início
            </Link>
            <Link href="/" className="font-medium text-gray-900 hover:text-yellow-500 transition-colors">
              Categorias
            </Link>
            <Link href="/" className="font-medium text-gray-900 hover:text-yellow-500 transition-colors">
              Explorar
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                {user.picture ? (
                  <Image
                    src={user.picture || "/placeholder.svg"}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-yellow-500"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                  </div>
                )}
                <span className="font-medium hidden md:block">{user.name}</span>
              </div>

              {/* You can add a dropdown menu here if needed */}
            </div>
          </div>
        </div>
      </header>
    )
  }

  // Render non-authenticated navbar
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl text-gray-800">
            <span className="text-yellow-500">Job</span>Finder
          </span>
        </div>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer"
            onClick={() => window.open("/")}
          >
            Entrar
          </button>
        </div>
      </div>

    </nav>
  )
}

