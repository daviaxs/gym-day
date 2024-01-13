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
  padding: 0.5rem 0.25rem;
  flex-direction: column;
  align-items: start;
  gap: 0.625rem;
  margin-bottom: 1rem;

  background-color: ${themeColors['blue-dark-400']};
  border-radius: ${themeSizes.sm}rem;
  position: relative;
`

export const Item = styled(DropdownMenu.Item)`
  background-color: ${themeColors['blue-dark-300']}30;
  border-radius: ${themeSizes.sm}rem;

  width: 100%;
  outline: none;
  padding: ${themeSizes.md}rem;
  cursor: pointer;

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
  z-index: -1;
`

export const Separator = styled(DropdownMenu.Separator)`
  background-color: rgba(138, 142, 161, 0.2);
  height: 2px;
  width: 100%;
  border-radius: 999px;
`
