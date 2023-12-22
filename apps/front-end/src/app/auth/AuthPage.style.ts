'use client'

import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 0 0 0 3.6rem;
  gap: 130px;

  .welcomeContainer {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;

    max-width: 600px;
  }

  .light {
    position: absolute;
    top: -20rem;
    left: -20rem;
  }
`
