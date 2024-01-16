import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
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
  position: relative;

  width: 100vw;
  height: 100vh;
  background-color: ${themeColors['grey-900']};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .gym-day-logo {
    position: absolute;
    top: 3rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    max-width: 720px;
  }

  .contentTexts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem;
  }
`
export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
`
