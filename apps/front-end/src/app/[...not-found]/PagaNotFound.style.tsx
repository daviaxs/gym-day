'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  gap: 5rem;

  .robot-page-not-found {
    min-height: calc(557.63px - 100px);
    max-height: calc(557.63px - 100px);

    min-width: calc(596.64px - 100px);
    max-width: calc(596.64px - 100px);

    object-fit: contain;
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  align-items: start;
  justify-content: center;

  .text-alert {
    color: ${themeColors['blue-100']};
    font-weight: 800;
    font-size: 4rem;
    line-height: 90%;
  }
`

export const BackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .text-warning {
    color: ${themeColors['blue-50']};
    letter-spacing: 1px;
  }

  .text-green-400 {
    font-weight: 800;
    font-size: 1.5rem;
    color: ${themeColors['green-400']};
  }
`
