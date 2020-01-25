import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { Colors } from './variables';
// import { screenMin } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: 62.5%;
    
    
  }
  
  body {
    margin: 0;
    overflow-x: hidden;
    color: ${Colors.primary};
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }
  
  a {
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;
