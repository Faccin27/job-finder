"use client"

import { useState } from "react"
import ProfessionInput from "./profession-input"

interface ProviderFormProps {
  onBack: () => void
  professions: string[]
}

export default function ProviderForm({ onBack, professions }: ProviderFormProps) {
  const [profession, setProfession] = useState<string>("")

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Cadastro de <span className="text-yellow-500">Profissional</span>
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone-provider">
            Telefone
          </label>
          <input
            type="tel"
            id="phone-provider"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu telefone"
          />
        </div>

        <ProfessionInput professions={professions} value={profession} onChange={setProfession} />

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Crie uma senha"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Confirme sua senha"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Cadastrar como Profissional
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            className="text-sm text-yellow-600 hover:text-yellow-800"
            onClick={(e) => {
              e.stopPropagation()
              onBack()
            }}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  )
}

