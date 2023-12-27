import { roboto } from '@/shared/styles/theme/fonts'
import { ButtonStyle, ButtonStyleProps } from './Button.style'

type ButtonProps = ButtonStyleProps & {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  $variant = 'solid',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle
      {...props}
      $variant={$variant}
      className={`${roboto.className} ${className}`}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  )
}
