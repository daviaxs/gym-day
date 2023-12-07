import { roboto } from '@/shared/styles/theme/fonts'
import { ButtonStyle, ButtonStyleProps } from './Button.style'

type ButtonProps = ButtonStyleProps & {
  children: React.ReactNode
}

export function Button({ children, variant = 'solid', ...props }: ButtonProps) {
  return (
    <ButtonStyle {...props} variant={variant} className={`${roboto.className}`}>
      {children}
    </ButtonStyle>
  )
}
