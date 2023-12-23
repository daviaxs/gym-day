import { Text } from '@/shared/components/text/Text'

export function WelcomeDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Text color="grey-100" size="lgSm" $weight="500" $lineheight="110%">
      {children}
    </Text>
  )
}
