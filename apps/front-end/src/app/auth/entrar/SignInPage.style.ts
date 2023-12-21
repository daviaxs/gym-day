'use client'

import styled from 'styled-components'

export const SignInContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 3.6rem;

  div {
    z-index: 1;
  }

  .welcomeContainer {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }

  .light {
    position: absolute;
    z-index: 0;
    top: -20rem;
    left: -20rem;
  }
`
