'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

interface TextSpanProps {
  color?: keyof typeof themeColors
  $hoverUnderline?: boolean
}

export const TextSpan = styled.span<TextSpanProps>`
  color: ${({ color }) =>
    themeColors[color as keyof typeof themeColors] || themeColors['blue-400']};

  &:hover {
    ${({ $hoverUnderline }) =>
      $hoverUnderline && `text-decoration: underline; cursor: pointer;`}
  }
`
