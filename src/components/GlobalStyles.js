import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --header-width: min(459px, 100%);
  }

  html{
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  *,
  *::before,
  *::after{
    box-sizing: inherit;
  }

  button{
    border: none;
    cursor: pointer;
  }

  a,
  button,
  input{
    &:focus,
    &:focus-visible{
       outline: 3px dashed ${({ theme }) => theme.textColor};
       outline-offset: 5px;
    }

    &:focus:not(:focus-visible){
      outline: none;
    }
  }

  .app{
    display: grid;

    @media screen and (min-width: 768px){
      grid-template-columns: var(--header-width) 1fr;
      grid-template-rows: 1fr 100px;
    }
  }
`;

export default GlobalStyles;
