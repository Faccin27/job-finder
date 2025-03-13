import type { ReactNode } from "react"

export interface CategoryType {
  name: string
  count: number
  slug: string
  icon: ReactNode
}

export interface ProfessionalType {
  id: number
  name: string
  profession: string
  rating: number
  description: string
  location: string
  avatar: string
  coverImage: string
}

export interface StepType {
  title: string
  description: string
}

