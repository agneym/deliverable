import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fontFamily.sans.join(",")};
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.gray[800]};
    background-color: ${props => props.theme.colors.white};
    min-height: 100vh;
    position: relative;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
