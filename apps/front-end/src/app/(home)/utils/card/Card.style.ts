'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const CardStyle = styled.div`
  position: absolute;
  left: 50%;
  top: 41rem;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  width: 80%;
  height: 28.25rem;
  padding: 2.5rem 3.5rem;

  border-radius: 0.75rem;
  border: 2px solid rgba(51, 59, 92, 0.25);

  background: linear-gradient(0deg, #000724 -35.13%, #1c2859 160.62%);
  box-shadow: 0px 0px 200px 0px rgba(0, 0, 0, 0.7);
`

export const CardItems = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image {
    width: 175px;
    height: 175px;
  }
`

export const Separator = styled.span`
  background-color: ${themeColors['blue-dark-400']};
  height: 100%;
  width: 5px;
  border-radius: 99px;
`
