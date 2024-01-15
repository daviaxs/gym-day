import { Light } from '@/shared/components/light/Light'
import { Container } from './InProgress.style'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'

export default function InProgress() {
  return (
    <Container>
      <GymDayLogoBLueLarge />
      <Light color="blue-500" $intensity="low" />
    </Container>
  )
}
