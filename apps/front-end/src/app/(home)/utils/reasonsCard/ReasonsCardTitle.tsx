import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'

export function ReasonsCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="h6"
      color="grey-50"
      size="lg"
      $weight="700"
      className={inter.className}
    >
      {children}
    </Text>
  )
}
