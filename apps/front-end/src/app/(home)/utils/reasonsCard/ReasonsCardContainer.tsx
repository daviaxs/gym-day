import { Card } from './ReasonsCard.style'

export function ReasonsCardContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <Card>{children}</Card>
}
