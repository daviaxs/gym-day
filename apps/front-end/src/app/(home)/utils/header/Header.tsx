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

export function Header() {
  return (
    <HeaderStyle>
      <GymDayLogoPurpleSmall />

      <AuthenticationContainer>
        <div>
          {/* <Icon /> */}
          <Link href="/">
            <LinkButton>
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
        </div>

        <Link href="/">
          <Button size="normal" variant="outline" color="purple">
            Criar conta
          </Button>
        </Link>
      </AuthenticationContainer>
    </HeaderStyle>
  )
}
