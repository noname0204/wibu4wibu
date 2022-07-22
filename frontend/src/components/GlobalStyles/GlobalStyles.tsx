import { createGlobalStyle } from 'styled-components';
import '~/assets/normalize.css';

const styled = { createGlobalStyle };
const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  #app-root {
    width: 100vw;
    height: 100vh;
  }

  a {
    color: ${(p) => p.theme.color.blue[5]};
  }
`;

export default GlobalStyles;
