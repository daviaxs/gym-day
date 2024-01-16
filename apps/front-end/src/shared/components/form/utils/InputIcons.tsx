import { themeColors } from '@/shared/styles/theme/palette'
import { KeyRound, Mail, UserRound } from 'lucide-react'

export type InputType = 'text' | 'email' | 'password'

export const InputIcons = {
  text: <UserRound size={30} color={themeColors['grey-500']} />,
  email: <Mail size={30} color={themeColors['grey-500']} />,
  password: <KeyRound size={30} color={themeColors['grey-500']} />,
  button: null,
}

export const getIcon = (type: InputType) => InputIcons[type]
