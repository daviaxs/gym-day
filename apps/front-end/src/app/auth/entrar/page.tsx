import { Light } from '@/shared/components/light/Light'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { Form } from '../utils/form/Form'
import { AuthContainer } from '../AuthPage.style'

export default function SignIn() {
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
          Faça login na plataforma
        </Text>
      </div>

      <Form title="Entrar" />

      <Light color="grey-500" />
    </AuthContainer>
  )
}
