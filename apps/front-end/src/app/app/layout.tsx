'use client'

import StyledComponentsRegistry from '@/app/lib/registry'
import { useVerifyToken } from '@/shared/hooks/useVerifyToken'
import { GlobalStyle } from '@/shared/styles/global'
import { roboto } from '@/shared/styles/theme/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { success } = useVerifyToken()

  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <title>GymDay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {success ? children : <p>Verificando usuário</p>}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
