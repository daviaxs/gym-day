'use client'

import { themeSizes } from '@/shared/styles/theme/sizes'
import styled from 'styled-components'

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
`

//* Introduction */

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;
  overflow: hidden;

  width: 100%;
  height: 800px;
`

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: ${themeSizes.lg}rem;
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
    width: 70rem;
    height: 50rem;
    bottom: -35rem;
  }
`

//* Reasons to use GymDay */

export const ReasonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: start;

  margin-top: 20rem;
  padding: ${themeSizes['3xl']}rem 5.25rem;
  height: fit-content;
  width: 100%;
  gap: 5.3rem;

  border-bottom: 2px solid rgba(51, 59, 92, 0.2);
  background: linear-gradient(233deg, #40446a -65.82%, #000415 104.21%);
`
export const ReasonsCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${themeSizes['3xl']}rem;
`
