import { Light } from '@/shared/components/light/Light'
import { SignInContainer } from './SignInPage.style'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
export default function SignIn() {
  return (
    <SignInContainer>
      <div className="welcomeContainer">
        <GymDayLogoBLueLarge />

        <Text
          size="2xl"
          className={inter.className}
          $weight="800"
          $lineheight="110%"
        >
          Faça login na <br /> plataforma
        </Text>
      </div>

      <div></div>

      <Light color="grey-500" />
    </SignInContainer>
  )
}
