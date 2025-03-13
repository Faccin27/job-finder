export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} JobFinder. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

