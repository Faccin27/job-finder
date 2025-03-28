"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Star, MapPin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  const [professionals, setProfessionals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch(`http://localhost:3535/users/by-job?job=${slug}`)
        if (!response.ok) throw new Error("Erro ao buscar profissionais")
        
        const data = await response.json()
        setProfessionals(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProfessionals()
  }, [slug])

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-yellow-500 transition-colors mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para categorias
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 capitalize">{slug.replace("-", " ")}</h1>
          <p className="text-gray-600">{professionals.length} profissionais disponíveis</p>
        </div>
      </div>

      {/* Lista de Profissionais */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Profissionais em {slug.replace("-", " ")}</h2>

        {loading && <p className="text-center text-gray-600">Carregando...</p>}
        {error && <p className="text-center text-red-600">Erro ao carregar os profissionais.</p>}

        {!loading && !error && professionals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <Image src={"/placeholder.svg"} alt={professional.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 mr-4 -mt-12 border-4 border-white rounded-full overflow-hidden">
                        <Image src={professional.picture || "/placeholder.svg"} alt={professional.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-900">{professional.name}</h3>
                        <p className="text-gray-500 text-sm">{professional.profession}</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-md">
                      <Star size={16} className="text-yellow-500 mr-1" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{professional.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-500 text-sm flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {professional.location}
                    </div>
                    <Link href={`/professional/${professional.id}`} className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                      Ver Perfil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-600 mb-4">Nenhum profissional encontrado nesta categoria.</p>
              <Link href="/" className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                Voltar para categorias
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  )
}