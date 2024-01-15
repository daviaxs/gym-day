import { ReactNode } from 'react'
import { IconProps } from './navButton/Icon'

interface NavLinksProps {
  to: string
  icon: IconProps
  children: ReactNode
}

export const NavLinks: NavLinksProps[] = [
  {
    to: '/app/inicio',
    icon: 'home',
    children: 'Inicio',
  },
  {
    to: '/em-andamento',
    icon: 'exercises',
    children: 'Exercícios',
  },
  {
    to: '/em-andamento',
    icon: 'food',
    children: 'Alimentação',
  },
  {
    to: '/em-andamento',
    icon: 'store',
    children: 'Roupas',
  },
]
