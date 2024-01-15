import Link from 'next/link'
import { NavButtonStyle } from './NavButton.style'
import { ReactNode } from 'react'
import { Icon, IconProps } from './Icon'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import { usePathname } from 'next/navigation'

interface NavButtonProps {
  to: string
  children: ReactNode
  iconName: IconProps
}

export function NavButton({ to, children, iconName }: NavButtonProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(to)

  return (
    <Link href={to} style={{ width: '100%' }}>
      <NavButtonStyle $isActive={isActive}>
        <Icon name={iconName} />

        <Text
          className={inter.className}
          size="lgSm"
          color="grey-50"
          $weight="700"
        >
          {children}
        </Text>
      </NavButtonStyle>
    </Link>
  )
}
