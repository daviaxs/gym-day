import { Header } from './utils/header/Header'
import {
  HomePageContainer,
  IntroductionBG,
  IntroductionContainer,
  IntroductionContent,
} from './HomePage.style'
import { Light } from '@/shared/components/light/Light'
import Image from 'next/image'
import homePageLine from '@/shared/assets/imgs/home-page-line.png'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'

export default function Home() {
  return (
    <HomePageContainer>
      <Header />
      <IntroductionContainer>
        <IntroductionContent>
          <div className="presentation">
            <Text
              color="grey-50"
              size="2xl"
              $weight="700"
              className={inter.className}
            >
              Bem vindo(a) a
            </Text>

            <GymDayLogoBLueLarge />

            <Text color="grey-50" size="md" $weight="500" $textalign="center">
              Seja você um iniciante ou um entusiasta fitness, o GymDay é o seu
              parceiro <br /> virtual para explorar um mundo de saúde,
              vitalidade e evolução constante.
            </Text>
          </div>

          <div></div>
        </IntroductionContent>

        <IntroductionBG>
          <Image src={homePageLine} className="lines" alt="" priority />
          <Light color="blue-300" $intensity="medium" />
        </IntroductionBG>
      </IntroductionContainer>
    </HomePageContainer>
  )
}
