import { GymDayLogoPurpleSmall } from '@/shared/assets/gym-day-logos/gym-day-logo-purple-small'
import {
  AuthenticationContainer,
  HeaderStyle,
  LinkButton,
} from './Header.style'
import { Button } from '@/shared/components/button/Button'
import Link from 'next/link'
import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/styles/theme/fonts'
import { UserCheck, UserPlus } from 'lucide-react'

export function Header() {
  return (
    <HeaderStyle>
      <GymDayLogoPurpleSmall />

      <AuthenticationContainer>
        <Link href="/">
          <LinkButton>
            <UserCheck size={20} className="icon" />
            <Text
              size="md"
              color="blue-50"
              $weight="800"
              className={`${roboto.className}`}
            >
              Entrar
            </Text>
          </LinkButton>
        </Link>

        <Link href="/">
          <Button
            size="normal"
            $variant="outline"
            color="purple"
            className="create-account-button"
          >
            <UserPlus size={20} className="icon" />
            Criar conta
          </Button>
        </Link>
      </AuthenticationContainer>
    </HeaderStyle>
  )
}
