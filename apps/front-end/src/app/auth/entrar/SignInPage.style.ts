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

  .welcomeContainer {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }

  .light {
    position: absolute;
    top: -20rem;
    left: -20rem;
  }
`
