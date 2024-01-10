import Link from 'next/link'
import { NavButtonStyle } from './NavButton.style'
import { ReactNode } from 'react'
import { Icon, IconProps } from './Icon'

interface NavButtonProps {
  to: string
  children: ReactNode
  iconName: IconProps
}

export function NavButton({ to, children, iconName }: NavButtonProps) {
  return (
    <Link href={to}>
      <NavButtonStyle>
        <Icon name={iconName} />
        {children}
      </NavButtonStyle>
    </Link>
  )
}
