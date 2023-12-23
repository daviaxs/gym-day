import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { WelcomeContainerStyle } from './Welcome.style'
import Link from 'next/link'
import { Text } from '@/shared/components/text/Text'
import { ArrowLeft } from 'lucide-react'
import { themeColors } from '@/shared/styles/theme/palette'

interface WelcomeProps {
  children: React.ReactNode
  backLink?: boolean
}

export function WelcomeContainer({ children, backLink }: WelcomeProps) {
  return (
    <WelcomeContainerStyle>
      <GymDayLogoBLueLarge />

      <div>{children}</div>

      {backLink && (
        <Link href="/auth/entrar" className="backLink">
          <ArrowLeft color={themeColors['green-300']} />

          <Text size="lgSm" color="green-300">
            Ir para login
          </Text>
        </Link>
      )}
    </WelcomeContainerStyle>
  )
}
