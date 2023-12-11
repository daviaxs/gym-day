'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  transition: transform 0.5s ease-in-out;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${themeColors['blue-dark-800']};
  border-bottom: 1px solid rgba(51, 59, 92, 0.2);

  padding: 0 1.375rem;
  width: 100%;
  height: 4.5rem;

  &.hideHeader {
    transform: translateY(-100%);
  }

  .gym-day-logo {
    min-width: 120px;
    max-width: 120px;
  }
`

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;

  .icon {
    transition: color 0.1s ease-in-out;
    color: ${themeColors['purple-500']};
  }

  .create-account-button:hover > .icon {
    color: ${themeColors['blue-50']};
  }
`
export const LinkButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  letter-spacing: 0.7px;
  color: ${themeColors['grey-50']};
  background-color: transparent;

  &:hover {
    text-decoration: underline;

    .icon {
      color: ${themeColors['blue-50']};
    }
  }
`
