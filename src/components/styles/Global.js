import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    list-style: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.15em;
    min-width: 600px;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
