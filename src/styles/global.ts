import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: monospace, sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    line-height: 22px;
    font-size: 1.4rem;
    max-width: 900px;
    margin: 0 auto;
    color: white; 
    -webkit-font-smoothing: antialiased !important;
    background-color: #2D2D2D;
  }
`

export default GlobalStyle
