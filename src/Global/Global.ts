import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  h1,
  h3 {
  margin-bottom: 20px;
}

`