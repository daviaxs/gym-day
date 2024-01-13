import { Text } from '@/shared/components/text/Text'
import { UserFisrtName } from './utils/UserFirstName'
import { inter } from '@/shared/styles/theme/fonts'
import { DashboardStyle } from './Dashboard.style'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { FirstInterationMessage } from './utils/FirstInteractionMessage'
import { HappyFace } from '@/shared/assets/svgs'
import { Light } from '@/shared/components/light/Light'

export default function DashboardPage() {
  return (
    <DashboardStyle>
      <SpanContainer $align="center" $gap={1}>
        <span className="UserName">
          <Text className={`${inter.className}`} size="3xl" $weight="800">
            Olá, <UserFisrtName />
          </Text>

          <HappyFace />
        </span>

        <FirstInterationMessage />
      </SpanContainer>

      <Light color="blue-500" $intensity="low" />
    </DashboardStyle>
  )
}
