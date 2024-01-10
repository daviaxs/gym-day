export type IconProps = 'home' | 'exercises' | 'food' | 'store'

export function Icon({ name }: { name: IconProps }) {
  switch (name) {
    case 'home':
      return <></>
    case 'exercises':
      return <></>
    case 'food':
      return <></>
    case 'store':
      return <></>
    default:
      return null
  }
}
