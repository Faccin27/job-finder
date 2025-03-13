"use client"

interface ClientFormProps {
  onBack: () => void
}

export default function ClientForm({ onBack }: ClientFormProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Cadastro de <span className="text-yellow-500">Cliente</span>
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name-client">
            Nome Completo
          </label>
          <input
            type="text"
            id="name-client"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email-client">
            E-mail
          </label>
          <input
            type="email"
            id="email-client"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Digite seu telefone"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="password-client">
            Senha
          </label>
          <input
            type="password"
            id="password-client"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Crie uma senha"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="confirm-password-client">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirm-password-client"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Confirme sua senha"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 cursor-pointer bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Cadastrar como Cliente
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            className="text-sm text-yellow-600 hover:text-yellow-800 cursor-pointer"
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

