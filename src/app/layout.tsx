import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Job Finder',
  description: 'Conectando talentos e oportunidades'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
