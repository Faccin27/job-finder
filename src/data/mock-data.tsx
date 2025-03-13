import { Briefcase } from "lucide-react"
import type { CategoryType, ProfessionalType, StepType } from "@/types"

export const categories: CategoryType[] = [
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

export const professionals: ProfessionalType[] = [
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

export const steps: StepType[] = [
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

