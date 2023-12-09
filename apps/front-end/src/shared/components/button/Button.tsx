import { roboto } from '@/shared/styles/theme/fonts'
import { ButtonStyle, ButtonStyleProps } from './Button.style'

type ButtonProps = ButtonStyleProps & {
  children: React.ReactNode
  className?: string
}

export function Button({
  children,
  $variant = 'solid',
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle
      {...props}
      $variant={$variant}
      className={`${roboto.className} ${className}`}
    >
      {children}
    </ButtonStyle>
  )
}
