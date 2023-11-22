import StyledComponentsRegistry from '@/lib/registry'
import { roboto } from '@/shared/theme/fonts'
import type { Metadata } from 'next'
import './Global.css'

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
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
