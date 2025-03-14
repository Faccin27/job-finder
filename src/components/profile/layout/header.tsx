import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import Willian from '@/assets/willian.png'

type HeaderProps = {
  user: {
    name: string
    avatar: StaticImageData
  }
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Job<span className="text-yellow-500">Finder</span>
          </Link>
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
          <div className="relative">
            <Image
              src={Willian}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full border-2 border-yellow-500"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

