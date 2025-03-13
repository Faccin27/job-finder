"use client"

import Image, { StaticImageData } from "next/image"
import type { ReactNode } from "react"

interface RegistrationColumnProps {
  type: "provider" | "client"
  isActive: boolean
  onClick: () => void
  title: string
  description: string
  buttonText: string
  imageSrc: StaticImageData
  children?: ReactNode
}

export default function RegistrationColumn({
  type,
  isActive,
  onClick,
  title,
  description,
  buttonText,
  imageSrc,
  children,
}: RegistrationColumnProps) {
  return (
    <div
      className={`relative flex-1 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out
        ${isActive ? "lg:flex-[3]" : "lg:flex-[1]"}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 z-0">
        <div className="absolute inset-0 w-full h-full opacity-30">
          {isActive ? null : (
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={type === "provider" ? "Prestador de serviço" : "Cliente"}
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        {isActive ? (
          children
        ) : (
          <div className="text-center text-gray-800 p-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-8">{description}</p>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-md cursor-pointer">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

