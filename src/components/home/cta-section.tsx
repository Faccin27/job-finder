import Link from "next/link"

export function CTASection() {
  return (
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
  )
}

