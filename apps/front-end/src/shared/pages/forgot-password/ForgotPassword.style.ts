import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import {
  AnimationFadeInOpacity,
  AnimationFadeInOpacityWithTop,
  AnimationFadeOutOpacity,
} from '@/shared/styles/animations'

export const Overlay = styled(Dialog.Overlay)`
  background: ${themeColors['grey-900']};
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  &[data-state='open'] {
    animation: ${AnimationFadeInOpacity} 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${AnimationFadeOutOpacity} 0.4s ease-in-out;
  }
`

export const Trigger = styled(Dialog.Trigger)`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${themeColors['blue-400']};

  &:hover {
    text-decoration: underline;
  }
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 100vh;

  .gym-day-logo {
    position: absolute;
    top: 3rem;
  }

  .contentTexts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem;
  }

  &[data-state='open'] {
    .contentContainer {
      animation: ${AnimationFadeInOpacityWithTop} 0.4s ease-in-out;
    }

    .gym-day-logo {
      animation: ${AnimationFadeInOpacity} 0.4s ease-in-out;
    }
  }

  &[data-state='closed'] {
    animation: ${AnimationFadeOutOpacity} 0.4s ease-in-out;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  max-width: 720px;
  position: relative;
`

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
`
