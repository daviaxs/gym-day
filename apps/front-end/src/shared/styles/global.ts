'use client'

import { createGlobalStyle } from 'styled-components'
import { themeColors } from './theme/palette'

interface GlobalStyleProps {
  backgroundColor?: keyof typeof themeColors
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: ${(props) =>
      themeColors[props.backgroundColor ?? 'blue-dark-900']};
    color: ${themeColors['grey-50']};
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8a8ea1 #151928;
  }

  ::-webkit-scrollbar-corner {
    background-color: #151928;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: #151928;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8a8ea1;
    border-radius: 10px;
  }
`
