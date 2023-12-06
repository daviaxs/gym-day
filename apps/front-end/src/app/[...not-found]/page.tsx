import { GymDayLogo } from '@/shared/assets/gym-day-logo'
import RobotPageNotFound from '@/shared/assets/imgs/robot-page-not-found.png'
import { Light } from '@/shared/components/light/Light'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { BackWrapper, Container, InfoWrapper } from './PageNotFound.style'

export default function PageNotFound() {
  return (
    <Container>
      <Image
        src={RobotPageNotFound}
        alt=""
        priority
        className="robot-page-not-found"
      />

      <InfoWrapper>
        <GymDayLogo />

        <div className={`${inter.className} text-error`}>
          <Text size="4xl" color="blue-100" weight="800">
            404
          </Text>
          <Text size="2xl" color="blue-100" weight="800">
            ERROR!
          </Text>
        </div>

        <BackWrapper>
          <div className="text-warning">
            <Text
              as="h4"
              size="xxl"
              color="green-400"
              weight="800"
              className={`${inter.className}`}
            >
              AVISO:
            </Text>
            <Text size="lg" color="blue-50">
              A página não foi encontrada.
            </Text>
          </div>

          <Link href="/">
            <button>voltar</button>
          </Link>
        </BackWrapper>
      </InfoWrapper>

      <Light color="blue-500" intensity="medium" />
    </Container>
  )
}
