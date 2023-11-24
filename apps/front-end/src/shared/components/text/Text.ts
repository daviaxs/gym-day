'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import { themeSizes } from '@/shared/styles/theme/sizes'
import styled from 'styled-components'

interface TextProps {
  as: keyof JSX.IntrinsicElements
  color: keyof typeof themeColors
  size: keyof typeof themeSizes
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) => themeColors[color]};
  font-size: ${({ size }) => themeSizes[size]}rem;
`
