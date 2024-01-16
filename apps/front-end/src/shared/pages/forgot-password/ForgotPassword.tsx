import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, Trigger } from './ForgotPassword.style'
import { Text } from '@/shared/components/text/Text'

export function ForgotPassword() {
  return (
    <Dialog.Root>
      <Trigger>
        <Text size="lgSm" $weight="500" color="blue-400">
          Esqueci minha senha
        </Text>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content></Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
