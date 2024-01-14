import { SidebarFooterStyle } from './Sidebar.style'
import { UserAvatar } from './utils/userAvatar/UserAvatar'
import { useGetUserValues } from '@/shared/hooks/useGetUserValues'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import { SettingsMenu } from '@/shared/components/settingsMenu/SettingsMenu'

export function SidebarFooter() {
  const { userValues } = useGetUserValues()

  return (
    <SidebarFooterStyle>
      <div className="userValues">
        <UserAvatar />

        <div className="userName">
          <Text
            className={inter.className}
            size="md"
            $weight="700"
            $whiteSpace="nowrap"
          >
            {userValues.name}
          </Text>

          <span className="shadow" />
        </div>
      </div>

      <SettingsMenu />
    </SidebarFooterStyle>
  )
}
