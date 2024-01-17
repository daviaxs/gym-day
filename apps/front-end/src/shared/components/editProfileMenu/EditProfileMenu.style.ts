'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { themeColors } from '@/shared/styles/theme/palette'
import { themeSizes } from '@/shared/styles/theme/sizes'

export const Item = styled(Dialog.DialogTrigger)`
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
