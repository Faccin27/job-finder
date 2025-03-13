import Link from "next/link"

export function Header() {
  return (
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
  )
}

