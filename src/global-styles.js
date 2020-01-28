import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    /* since nav is fixed with height of 70px */
    margin: 70px 0 0 0 ; 
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }
`;
