import { inter } from '@/shared/styles/theme/fonts'
import { themeColors } from '@/shared/styles/theme/palette'
import * as Dialog from '@radix-ui/react-dialog'
import { Text } from '../text/Text'
import { UserCog } from 'lucide-react'
import { Item } from './EditProfileMenu.style'

export function EditProfileMenu() {
  return (
    <Dialog.Root>
      <Item asChild>
        <span>
          <UserCog color={themeColors['blue-dark-100']} size={25} />
          <Text className={inter.className} size="md" $weight="800">
            Editar perfil
          </Text>
        </span>
      </Item>

      <Dialog.Portal>
        <Dialog.Content></Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
