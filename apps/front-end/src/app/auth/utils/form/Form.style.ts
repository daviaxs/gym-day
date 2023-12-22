'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import { themeSizes } from '@/shared/styles/theme/sizes'
import styled from 'styled-components'

export const FormContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background-color: ${themeColors['grey-700']};

  padding: 3.75rem;
  gap: ${themeSizes['2xl']}rem;

  min-width: 50%;
  height: 100%;
`

export const FormContent = styled.form``
