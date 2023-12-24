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

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${themeColors['grey-100']};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px transparent;
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
