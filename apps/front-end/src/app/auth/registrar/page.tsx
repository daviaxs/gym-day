import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { AuthContainer } from '../AuthPage.style'
import { Text } from '@/shared/components/text/Text'
import { Form } from '../utils/form/Form'
import { Light } from '@/shared/components/light/Light'
import { inter } from '@/shared/styles/theme/fonts'

export default function SignUp() {
  return (
    <AuthContainer>
      <div className="welcomeContainer">
        <GymDayLogoBLueLarge />

        <Text
          as="h1"
          size="xl"
          className={inter.className}
          $weight="800"
          $lineheight="110%"
        >
          Seu progresso começa com um simples clique!
        </Text>
      </div>

      <Form title="Criar conta" />

      <Light color="grey-500" />
    </AuthContainer>
  )
}
