'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import { themeSizes } from '@/shared/styles/theme/sizes'
import styled from 'styled-components'

interface TextProps {
  as: keyof JSX.IntrinsicElements
  color?: keyof typeof themeColors
  size: keyof typeof themeSizes
  $weight?: '400' | '500' | '700' | '800' | '900'
  $textalign?: 'center' | 'left' | 'right'
  $lineheight?: string
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) =>
    themeColors[color as keyof typeof themeColors] || themeColors['blue-50']};
  font-size: ${({ size }) => themeSizes[size]}rem;
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineheight }) => $lineheight || '90%'};
  text-align: ${({ $textalign }) => $textalign};
`
