import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    --color-green: #54ba61;
    --color-red: #933d3d;
    --color-darkgray: #373737;
    --color-lightgray: #868686;

    --color-green-hover: #63cf71;
    --color-red-hover: #ad5c5c;
    --color-darkgray-hover: #545353;
    --color-lightgray-hover: #9c9a9a;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;

  }

 

`;
