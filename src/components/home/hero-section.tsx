"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { professions } from "@/data/jobs"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredServices, setFilteredServices] = useState<string[]>([])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.trim()) {
      const filtered = professions.filter((service) => service.toLowerCase().includes(value.toLowerCase()))
      setFilteredServices(filtered)
      setShowDropdown(filtered.length > 0)
    } else {
      setShowDropdown(false)
    }
  }

  const handleSelectService = (service: string) => {
    setSearchQuery(service)
    setShowDropdown(false)
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encontre o Profissional Perfeito para Suas Necessidades
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Conecte-se com prestadores de serviços qualificados em sua região e tenha seus projetos realizados
            corretamente.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Qual serviço você precisa?"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />

                {showDropdown && (
                  <ul className="absolute w-full mt-1 border border-gray-200 rounded-lg shadow-lg bg-white max-h-60 overflow-y-auto z-50">
                    {filteredServices.map((service) => (
                      <li
                        key={service}
                        onClick={() => handleSelectService(service)}
                        className="px-4 py-2 cursor-pointer hover:bg-yellow-100 text-left"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

