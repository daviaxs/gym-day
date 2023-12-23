import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'

export function WelcomeTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="h1"
      size="xl"
      className={inter.className}
      $weight="800"
      $lineheight="110%"
    >
      {children}
    </Text>
  )
}
