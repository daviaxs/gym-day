import { themeColors } from '@/shared/styles/theme/palette'
import { Eye, EyeOff } from 'lucide-react'

export const ShowPasswordIcons = {
  eyeOff: (
    // eslint-disable-next-line prettier/prettier
    <EyeOff size={30} color={themeColors['grey-500']} className="passwordIcon" />
  ),
  eye: (
    <Eye size={30} color={themeColors['blue-400']} className="passwordIcon" />
  ),
}
