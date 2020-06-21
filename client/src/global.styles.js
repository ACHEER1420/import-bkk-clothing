import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .App {
    & .app-wrapper {
      padding: 20px 40px;

      @media screen and (max-width: 800px) {
        padding: 10px;
      }
    }
  }

  a {
    text-decoration: none;
    color: gray;
    
    &:hover{
      color: black;
    }
  }

  .option {
    @extend a;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;
