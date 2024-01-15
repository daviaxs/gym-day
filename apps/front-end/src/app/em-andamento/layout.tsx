import StyledComponentsRegistry from '@/app/lib/registry'
import { GlobalStyle } from '@/shared/styles/global'
import { roboto } from '@/shared/styles/theme/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gym Day - Página em desenvolvimento',
  description: 'Gym Day - Página em desenvolvimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
