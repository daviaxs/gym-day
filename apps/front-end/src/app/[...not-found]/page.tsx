import { GymDayLogo } from '@/shared/assets/gym-day-logo'
import RobotPageNotFound from '@/shared/assets/imgs/robot-page-not-found.png'
import { inter } from '@/shared/styles/theme/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { BackWrapper, Container, InfoWrapper } from './PagaNotFound.style'

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

        <div className={`${inter.className} text-alert`}>
          <p>404</p>
          <p>ERROR!</p>
        </div>

        <BackWrapper>
          <div className="text-warning">
            <h4 className="text-green-400">AVISO:</h4>
            <p>A página não foi encontrada.</p>
          </div>

          <Link href="/">
            <button>voltar</button>
          </Link>
        </BackWrapper>
      </InfoWrapper>
    </Container>
  )
}
