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

  a{
    color: black;
    text-decoration: none;
  }
  p {
    color: #374151;
  }
  h1,h2,h3,h4,h5,h6 {
      color: #111827;
  }
`;
