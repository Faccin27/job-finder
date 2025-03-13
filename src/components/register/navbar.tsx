"use client"

import { useState } from "react"
import LoginModal from "./login-modal"

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)

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

