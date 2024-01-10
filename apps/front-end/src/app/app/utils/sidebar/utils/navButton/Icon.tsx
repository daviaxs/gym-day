import { Apple, HandStrong2, Home, Shirt } from '@/shared/assets/icons'

export type IconProps = 'home' | 'exercises' | 'food' | 'store'

export function Icon({ name }: { name: IconProps }) {
  switch (name) {
    case 'home':
      return <Home />
    case 'exercises':
      return <HandStrong2 />
    case 'food':
      return <Apple />
    case 'store':
      return <Shirt />
    default:
      return null
  }
}
