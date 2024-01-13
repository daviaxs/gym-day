import { themeColors } from '@/shared/styles/theme/palette'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreHorizontal, Unplug, UserCog } from 'lucide-react'
import { Separator, Content, Item, Arrow, Button } from './SettingsMenu.style'
import { Text } from '../text/Text'
import { inter } from '@/shared/styles/theme/fonts'

export function SettingsMenu() {
  return (
    <DropdownMenu.Root>
      <Button asChild>
        <span>
          <MoreHorizontal color={themeColors['blue-100']} />
        </span>
      </Button>

      <DropdownMenu.Portal>
        <Content align="start">
          <DropdownMenu.Label>
            <Text
              className={inter.className}
              size="md"
              $weight="700"
              color="blue-dark-200"
            >
              Opções
            </Text>
          </DropdownMenu.Label>

          <Separator />

          <Item>
            <UserCog color={themeColors['blue-dark-100']} size={25} />
            <Text className={inter.className} size="md" $weight="800">
              Editar perfil
            </Text>
          </Item>
          <Item>
            <Unplug color={themeColors['blue-dark-100']} size={25} />
            <Text className={inter.className} size="md" $weight="800">
              Sair
            </Text>
          </Item>

          <Arrow />
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
