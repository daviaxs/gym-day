import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './Global.css'

export const inter = Inter({ 
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  preload: true,
})

export const roboto = Roboto({ 
  weight: ['500', '700', '900'],
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Gym Day',
  description: 'Gym Day - Seu guia para iniciar na musculação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
