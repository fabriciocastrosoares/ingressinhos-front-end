import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100%;
  }

  body {
    width: 100%;
    min-height: 100vh;

    font-family: Arial, Helvetica, sans-serif;

    background-color: #f5f7fb;
    color: #222;

    overflow-x: hidden;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
  }
`;

export default ResetStyle;
