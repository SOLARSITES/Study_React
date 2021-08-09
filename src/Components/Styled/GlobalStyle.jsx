import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    color: black;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;    
    margin: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
  }
  
  button,
  input {
    font: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }

  button:active,
  button:hover,
  button:focus,
  input:active,
  input:hover,
  input:focus,
  textarea:active,
  textarea:hover,
  textarea:focus {
    outline: 0;
    outline-offset: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;    
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;    
  }
  
  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
`;
