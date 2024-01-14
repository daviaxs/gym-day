'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import { themeSizes } from '@/shared/styles/theme/sizes'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const Button = styled(DropdownMenu.Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${themeColors['blue-dark-400']};
  border-radius: ${themeSizes.sm}rem;
  padding: 0.5rem 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${themeColors['blue-dark-500']}50;
    transition: background-color 0.2s ease-in-out;
  }
`

export const Content = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;

  gap: 0.625rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0.25rem;

  background-color: ${themeColors['blue-dark-400']};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: ${themeSizes.sm}rem;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      top: 1rem;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &[data-state='open'] {
    animation: fadeIn 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: fadeOut 0.2s ease-in-out;
  }
`

export const Item = styled(DropdownMenu.Item)`
  display: flex;
  align-items: center;
  justify-content: start;

  background-color: ${themeColors['blue-dark-300']}30;
  border-radius: ${themeSizes.sm}rem;

  gap: 1rem;
  width: 100%;
  outline: none;
  padding: ${themeSizes.md}rem;

  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: ${themeColors['blue-dark-300']}70;
    transition: background-color 0.2s ease-in-out;
  }
`

export const Arrow = styled.div`
  margin-top: 1rem;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  transform: rotate(50deg);
  background-color: ${themeColors['blue-dark-400']};
  position: absolute;

  bottom: -0.2rem;
  left: 0.5rem;
`

export const Separator = styled(DropdownMenu.Separator)`
  background-color: rgba(138, 142, 161, 0.2);
  height: 2px;
  width: 100%;
  border-radius: 999px;
`
