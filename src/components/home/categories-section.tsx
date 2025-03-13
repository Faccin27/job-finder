import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { CategoryType } from "@/types"

interface CategoriesSectionProps {
  categories: CategoryType[]
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorias Populares</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navegue pelas categorias de serviços mais procuradas e encontre o profissional certo para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                {category.icon}
              </div>
              <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{category.count} profissionais</p>
              <Link
                href={`/category/${category.slug}`}
                className="text-yellow-500 font-medium text-sm hover:text-yellow-600 transition-colors flex items-center"
              >
                Ver Todos <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

