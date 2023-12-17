import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import React from 'react'

export function ReasonsCardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Text
      color="blue-dark-200"
      size="lg"
      $weight="400"
      $lineheight="120%"
      className={inter.className}
    >
      {children}
    </Text>
  )
}
