'use client'

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
