'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export interface LightProps {
  $intensity?: 'high' | 'medium' | 'low'
  color: 'blue-500' | 'blue-300'
}

export const LightStyle = styled.span<LightProps>`
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  filter: blur(150px);
  z-index: -1;

  opacity: ${(props) =>
    props.$intensity === 'high'
      ? '100%'
      : props.$intensity === 'medium'
        ? '50%'
        : '30%'};

  background-color: ${(props) =>
    props.color === 'blue-500'
      ? themeColors['blue-500']
      : themeColors['blue-300']};
`
