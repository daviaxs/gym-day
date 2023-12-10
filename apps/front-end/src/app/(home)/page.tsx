import { Header } from './utils/header/Header'
import {
  HomePageContainer,
  IntroductionBG,
  IntroductionContainer,
} from './HomePage.style'
import { Light } from '@/shared/components/light/Light'
import Image from 'next/image'
import homePageLine from '@/shared/assets/imgs/home-page-line.png'
import { Text } from '@/shared/components/text/Text'

export default function Home() {
  return (
    <HomePageContainer>
      <Header />
      <IntroductionContainer>
        <Text color="grey-50" size="2xl">
          Gym Day
        </Text>

        <IntroductionBG>
          <Image src={homePageLine} className="lines" alt="" priority />
          <Light color="blue-300" $intensity="medium" />
        </IntroductionBG>
      </IntroductionContainer>
    </HomePageContainer>
  )
}
