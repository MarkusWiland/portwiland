import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    background-color: #fcfcfc;
    font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  }
`;
