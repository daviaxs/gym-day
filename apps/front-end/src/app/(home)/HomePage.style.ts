'use client'

import { themeSizes } from '@/shared/styles/theme/sizes'
import styled from 'styled-components'

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;
  overflow: hidden;

  width: 100%;
  height: 950px;
`

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  gap: ${themeSizes['3xl']}rem;

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      line-height: 115%;
    }
  }

  .presentation2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${themeSizes['2xl']}rem;

    .createAccountButton,
    .handStrong {
      transition: all 0.25s ease-out;
    }

    .createAccountButton:hover {
      transform: scale(1.1);

      .handStrong {
        transform: scale(1.1);
        height: 48px;
      }
    }

    .knowMore {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: ${themeSizes.sm}rem;
    }
  }

  .gym-day-logo {
    transform: scale(1.8);
    margin-top: 2.5rem;
    margin-bottom: 2.8rem;
  }
`

export const IntroductionBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  display: flex;
  align-items: end;
  justify-content: center;

  .lines {
    width: 100%;
    height: 100%;
  }

  .light {
    position: absolute;
    width: 60%;
    height: 60%;
    bottom: -25rem;
  }
`
