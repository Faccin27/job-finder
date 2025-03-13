"use client"

import Navbar from "./navbar"
import Footer from "./footer"
import RegistrationSection from "./registration-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Conectando <span className="text-yellow-500">talentos</span> e{" "}
            <span className="text-yellow-500">oportunidades</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha como deseja se cadastrar na plataforma e comece a usar o Job Finder hoje mesmo
          </p>
        </div>

        <RegistrationSection />
      </main>

      <Footer />
    </div>
  )
}

