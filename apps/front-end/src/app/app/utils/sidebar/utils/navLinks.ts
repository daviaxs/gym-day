import { ReactNode } from 'react'
import { IconProps } from './navButton/Icon'

interface NavLinksProps {
  to: string
  icon: IconProps
  children: ReactNode
}

export const NavLinks: NavLinksProps[] = [
  {
    to: '/inicio',
    icon: 'home',
    children: 'Inicio',
  },
  {
    to: '/exercicios',
    icon: 'exercises',
    children: 'Exercícios',
  },
  {
    to: '/alimentacao',
    icon: 'food',
    children: 'Alimentação',
  },
]
