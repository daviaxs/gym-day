'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const WelcomeContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  max-width: 600px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .backLink {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    &:hover {
      cursor: pointer;
      color: ${themeColors['green-200']};
      text-decoration: underline;
    }
  }
`
