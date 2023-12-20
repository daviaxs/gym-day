'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const TheTriadCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  gap: 0.6rem;

  .arrow {
    position: absolute;
  }
`

export const TheTriadCardStyle = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${themeColors['blue-dark-400']};
  background: rgba(51, 59, 92, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 18rem;
  height: 18rem;
`
