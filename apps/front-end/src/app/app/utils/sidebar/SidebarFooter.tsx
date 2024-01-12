import { MoreHorizontal } from 'lucide-react'
import { SidebarFooterStyle } from './Sidebar.style'
import { UserAvatar } from './utils/userAvatar/UserAvatar'
import { useGetUserValues } from '@/shared/hooks/useGetUserValues'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import { themeColors } from '@/shared/styles/theme/palette'

export function SidebarFooter() {
  const { userValues } = useGetUserValues()

  return (
    <SidebarFooterStyle>
      <div className="userValues">
        <UserAvatar />

        <Text className={inter.className} size="md" $weight="700">
          {userValues.name.length > 10
            ? `${userValues.name.substring(0, 10)}...`
            : userValues.name}
        </Text>
      </div>

      <MoreHorizontal color={themeColors['blue-100']} />
    </SidebarFooterStyle>
  )
}
