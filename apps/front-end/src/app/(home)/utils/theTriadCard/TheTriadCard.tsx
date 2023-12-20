import { TheTriadCardContainer, TheTriadCardStyle } from './TheTriadCard.style'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'

interface TheTriadCardProps {
  title: string
  children: React.ReactNode
  arrow?: boolean
}

export function TheTriadCard({ children, title, arrow }: TheTriadCardProps) {
  return (
    <TheTriadCardContainer>
      <Text size="lg" className={inter.className} $weight="700">
        {title}
      </Text>

      <TheTriadCardStyle>{children}</TheTriadCardStyle>

      {arrow && <div className="arrow"></div>}
    </TheTriadCardContainer>
  )
}
