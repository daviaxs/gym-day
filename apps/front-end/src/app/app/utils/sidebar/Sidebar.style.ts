'use client'

import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  gap: 2rem;

  height: 100vh;
  width: 15rem;

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

export const SidebarContentStyle = styled.nav``

export const SidebarFooterStyle = styled.div``
