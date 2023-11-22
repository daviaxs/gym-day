'use client'

import { createGlobalStyle } from "styled-components";
import { themeColors } from "./theme/palette";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${themeColors["blue-dark-900"]};
    color: ${themeColors['grey-50']};
  }
`