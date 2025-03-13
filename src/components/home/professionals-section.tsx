import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, ArrowRight } from "lucide-react"
import type { ProfessionalType } from "@/types"

interface ProfessionalsSectionProps {
  professionals: ProfessionalType[]
}

export function ProfessionalsSection({ professionals }: ProfessionalsSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Profissionais Mais Bem Avaliados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossos prestadores de serviços com as melhores avaliações e histórico comprovado de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={professional.coverImage || "/placeholder.svg"}
                  alt={professional.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 mr-4 -mt-12 border-4 border-white rounded-full overflow-hidden">
                      <Image
                        src={professional.avatar || "/placeholder.svg"}
                        alt={professional.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-gray-900">{professional.name}</h3>
                      <p className="text-gray-500 text-sm">{professional.profession}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-md">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{professional.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{professional.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-gray-500 text-sm flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {professional.location}
                  </div>
                  <Link
                    href={`/professional/${professional.id}`}
                    className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors text-sm"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/browse"
            className="inline-flex items-center px-6 py-3 bg-white border border-yellow-500 text-yellow-500 font-medium rounded-lg hover:bg-yellow-50 transition-colors"
          >
            Ver Todos os Profissionais <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

