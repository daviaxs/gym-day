'use client'

import styled from 'styled-components'

export const DashboardStyle = styled.main`
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 3.75rem;

  .UserName {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1rem;
  }

  .light {
    position: absolute;
    top: -25rem;
    width: 80%;
  }
`
