'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export interface ButtonStyleProps {
  $variant?: 'outline' | 'solid'
  color?: 'purple' | 'blue' | 'green' | 'red'
  size: 'normal' | 'large' | 'full'
  border?: boolean
}

const getButtonColor = (color: ButtonStyleProps['color']) => {
  switch (color) {
    case 'purple':
      return themeColors['purple-500']
    case 'green':
      return themeColors['green-700']
    case 'red':
      return themeColors['red-500']
    default:
      return themeColors['blue-500']
  }
}

const getButtonHoverColor = (color: ButtonStyleProps['color']) => {
  switch (color) {
    case 'purple':
      return themeColors['purple-700']
    case 'green':
      return themeColors['green-800']
    case 'red':
      return themeColors['red-700']
    default:
      return themeColors['blue-700']
  }
}

const getButtonBorderColor = (color: ButtonStyleProps['color']) => {
  switch (color) {
    case 'purple':
      return themeColors['purple-200']
    case 'green':
      return themeColors['green-300']
    case 'red':
      return themeColors['red-300']
    default:
      return themeColors['blue-300']
  }
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: ${({ size }) => (size === 'normal' ? '1rem' : '1.5rem')};
  letter-spacing: 0.7px;

  color: ${themeColors['blue-50']};
  background-color: ${({ color, $variant: variant }) =>
    variant === 'solid' ? getButtonColor(color) : 'transparent'};

  border: ${({ $variant: variant, color, border }) => {
    if (variant === 'outline' || border) {
      if (variant === 'outline') {
        return `2px solid ${getButtonColor(color)}`
      } else if (border) {
        return `1px solid ${getButtonBorderColor(color)}`
      }
    } else {
      return 'none'
    }
  }};

  width: ${({ size }) => (size === 'full' ? '100%' : 'auto')};
  padding: ${({ size }) =>
    size === 'large' || size === 'full' ? '1rem 3rem' : '0.625rem'};

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ color, $variant: variant }) =>
      variant === 'solid'
        ? getButtonHoverColor(color)
        : `${getButtonHoverColor(color)}20`};
  }
`
