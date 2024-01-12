'use client'

import { themeColors } from '@/shared/styles/theme/palette'
import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  gap: 2rem;
  padding-bottom: 1.5rem;

  height: 100vh;
  width: 18rem;

  border-right: 1px solid #333b5c70;
  background: linear-gradient(220deg, #353a69 -9.86%, #03000c 90.92%);
`
export const SidebarHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: fit-content;
  padding: 0.8rem 0.5rem;

  border-bottom: 2px solid rgba(84, 91, 118, 0.2);

  .gym-day-logo {
    width: 120px;
  }
`

export const SidebarContentStyle = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  width: 100%;
  padding: 0 1rem;
  gap: 0.5rem;
`

export const SidebarFooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${themeColors['blue-dark-400']};
  border-radius: 0.375rem;

  width: 80%;
  height: 3.125rem;
  padding: 0.6rem 0.3rem;

  .userValues {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.6rem;
  }
`
