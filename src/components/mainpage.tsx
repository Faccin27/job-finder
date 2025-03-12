import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Briefcase, Star, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              Job<span className="text-yellow-500">Finder</span>
            </span>
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
            <Link href="/register" className="font-medium text-gray-900 hover:text-yellow-500 transition-colors">
              Entrar
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </header>

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
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div className="relative flex-grow md:flex-grow-0">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Localização"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como o JobFinder Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontrar o profissional certo para o seu projeto é fácil com nosso processo simples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white rounded-full mx-auto mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para Começar?</h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Junte-se a milhares de clientes satisfeitos que encontraram o profissional perfeito para seus projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-6 py-3 bg-white text-yellow-500 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cadastre-se Agora
              </Link>
              <Link
                href="/browse"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Explorar Profissionais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Job<span className="text-yellow-500">Finder</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Conectando clientes a profissionais qualificados para todas as suas necessidades de serviços.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Para Clientes</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Perguntas Frequentes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Para Profissionais</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cadastre-se como Profissional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Histórias de Sucesso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Recursos para Profissionais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Comunidade
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Termos de Serviço
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} JobFinder. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const categories = [
  {
    name: "Limpeza Doméstica",
    count: 245,
    slug: "limpeza-domestica",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Eletricista",
    count: 186,
    slug: "eletricista",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Encanador",
    count: 152,
    slug: "encanador",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Jardinagem",
    count: 134,
    slug: "jardinagem",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Pintura",
    count: 127,
    slug: "pintura",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Marcenaria",
    count: 118,
    slug: "marcenaria",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Mudança",
    count: 105,
    slug: "mudanca",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
  {
    name: "Aulas Particulares",
    count: 98,
    slug: "aulas-particulares",
    icon: <Briefcase size={24} className="text-yellow-500" />,
  },
]

const professionals = [
  {
    id: 1,
    name: "Carlos Silva",
    profession: "Eletricista",
    rating: 4.9,
    description:
      "Eletricista certificado com mais de 10 anos de experiência em instalações e reparos elétricos residenciais e comerciais.",
    location: "São Paulo, SP",
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    profession: "Diarista",
    rating: 4.8,
    description:
      "Profissional de limpeza especializada em faxina completa, organização e manutenção de casas impecáveis.",
    location: "Rio de Janeiro, RJ",
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    name: "Pedro Santos",
    profession: "Encanador",
    rating: 4.7,
    description:
      "Encanador experiente oferecendo soluções rápidas e confiáveis para todas as suas necessidades hidráulicas, de reparos a instalações.",
    location: "Belo Horizonte, MG",
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=300&width=500",
  },
]

const steps = [
  {
    title: "Busque um Serviço",
    description: "Navegue por nossas categorias ou use a barra de pesquisa para encontrar o serviço que você precisa.",
  },
  {
    title: "Compare Profissionais",
    description: "Analise perfis, avaliações e portfólios para encontrar o profissional ideal para o seu projeto.",
  },
  {
    title: "Contrate e Resolva",
    description: "Entre em contato com o profissional, discuta detalhes e tenha seu projeto concluído com confiança.",
  },
]

