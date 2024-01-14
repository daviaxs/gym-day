'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${themeColors['blue-dark-500']};

  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;

  .avatarImage {
    border-radius: 50%;
  }
`
