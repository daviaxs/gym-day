'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import { themeSizes } from '@/shared/styles/theme/sizes'
import styled from 'styled-components'

export const FormContainerStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background-color: ${themeColors['grey-700']};

  padding: 3.75rem;
  gap: ${themeSizes['2xl']}rem;

  min-width: 50%;
  height: 100%;

  overflow-y: auto;
`

export const FormContentStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;

  .maxWidth {
    width: 100%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  position: relative;

  border-bottom: 2px solid ${themeColors['grey-400']};

  width: 100%;
  padding: 0.5rem 0.375rem;
  gap: 1rem;

  &:focus-within {
    border-bottom: 2px solid ${themeColors['blue-500']};
  }

  input {
    font-size: 1.5rem;
    font-weight: 500;

    color: ${themeColors['grey-100']};
    background-color: transparent;
    border: none;

    width: 80%;

    &:focus {
      outline: none;
    }
  }

  .passwordIcon {
    position: absolute;
    right: 0.8rem;
  }

  .showPassword {
    cursor: pointer;
  }
`

export const SubmitButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
`
export const SpanContainer = styled.span<{
  $align?: 'center' | 'start' | 'end'
}>`
  display: flex;
  align-items: ${({ $align }) => $align || 'start'};
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`
