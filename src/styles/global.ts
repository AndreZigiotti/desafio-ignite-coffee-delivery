import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.contexts.light[100]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', monospace, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  .App {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`