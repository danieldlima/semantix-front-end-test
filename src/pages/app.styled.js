import styled from 'styled-components';

import { screenMax } from '@/assets/styles/breakpoints';
import { Transition } from '@/assets/styles/variables';

export const Main = styled.main`
  width: 100%;
  padding: 7rem 7rem 0 17rem;
  transition: ${Transition().default};
  
  @media only screen and (min-width: 1280px) and (max-width: 1600px)  {
    padding: 7rem 2rem 0 12rem;
  }
  
  ${screenMax.xl`
    padding: 7rem 7rem 0;
  `};
  
  ${screenMax.lg`
    padding: 5.5rem 5.5rem 0;
  `};
`;
