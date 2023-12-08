'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${themeColors['blue-dark-800']};
  border-bottom: 1px solid rgba(51, 59, 92, 0.2);

  padding: 0 1.375rem;
  width: 100%;
  height: 4rem;

  .gym-day-logo {
    width: 120px;
  }
`
export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;
`
export const LinkButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  letter-spacing: 0.7px;
  color: ${themeColors['grey-50']};
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`
