'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

interface TextProps {
  as: keyof JSX.IntrinsicElements
  color: keyof typeof themeColors
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) => themeColors[color]};
`
