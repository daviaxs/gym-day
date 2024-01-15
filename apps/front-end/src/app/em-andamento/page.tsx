import { Light } from '@/shared/components/light/Light'
import { Container } from './InProgress.style'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { Alert } from '@/shared/assets/svgs'
import { Text } from '@/shared/components/text/Text'

export default function InProgress() {
  return (
    <Container>
      <GymDayLogoBLueLarge />
      <Alert />

      <span style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
        <Text size="xl" $weight="800" $textalign="center" $lineheight="120%">
          Desculpe-nos! <br /> Esta página está em construção.
        </Text>

        <Text
          size="lgSm"
          $weight="500"
          $textalign="center"
          $lineheight="120%"
          color="blue-100"
        >
          Estamos trabalhando para trazer conteúdo incrível em breve. <br />
          Volte em breve para conferir!
        </Text>
      </span>

      <Light color="blue-500" $intensity="low" />
    </Container>
  )
}
