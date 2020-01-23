import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { Colors } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    margin: 0;
    overflow-x: hidden;
    color: ${Colors.primary};
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;
