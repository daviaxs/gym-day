'use client'

import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  gap: 2rem;

  .gym-day-logo {
    height: 3.8rem;
  }

  .alertIcon {
    height: 15rem;
  }

  .light {
    position: absolute;
    top: -25rem;
  }
`
