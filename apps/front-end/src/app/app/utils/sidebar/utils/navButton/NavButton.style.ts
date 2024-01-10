'use client'

import styled from 'styled-components'

interface NavButtonProps {
  $isActive: boolean
}

export const NavButtonStyle = styled.button<NavButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  gap: 1rem;

  border-radius: 0.375rem;
  border: 1px solid rgba(138, 142, 161, 0.2);
  background-color: ${({ $isActive }) =>
    $isActive ? 'rgba(176, 179, 192, 0.2)' : 'transparent'};

  transition: all 0.2s ease-in-out;

  .icon {
    transition: all 0.2s ease-in-out;
    ${({ $isActive }) => !$isActive && 'opacity: 0.5;'}
  }

  &:hover {
    background: rgba(176, 179, 192, 0.2);

    .icon {
      transform: scale(1.2);
    }
  }
`
