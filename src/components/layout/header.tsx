"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import LoginModal from "../register/login-modal"

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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Verificando login do usuário...");

        const response = await fetch("http://localhost:3535/users/me", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

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

          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
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

            {isDropdownOpen && (
              <div className="absolute -right-5 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link href="/profile" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Perfil</Link>
                <button className="w-full text-left block px-4 py-2 text-gray-900 hover:bg-gray-100">Sair</button>
              </div>
            )}
          </div>
        </div>
      </header>
    )
  }

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
            onClick={() => setIsLoginOpen(true)}
          >
            Entrar
          </button>
        </div>
      </div>

      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </nav>
  )
}
