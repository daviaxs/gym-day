import { GymDayLogoPurpleSmall } from '@/shared/assets/gym-day-logos/gym-day-logo-purple-small'
import { SidebarHeaderStyle } from './Sidebar.style'
import { ArrowLeft } from 'lucide-react'
import { themeColors } from '@/shared/styles/theme/palette'

export function SidebarHeader() {
  return (
    <SidebarHeaderStyle>
      <GymDayLogoPurpleSmall />
      <ArrowLeft size={30} color={themeColors['purple-50']} />
    </SidebarHeaderStyle>
  )
}
