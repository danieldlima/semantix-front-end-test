import styled from 'styled-components';

import { screenMax } from '@/assets/styles/breakpoints';
import { Transition } from '@/assets/styles/variables';


export const Main = styled.main`
  width: 100%;
  padding: 7rem 7rem 0 17rem;
  transition: ${Transition().default};
  
  ${screenMax.xl`
    padding: 7rem 7rem 0;
  `}
  
  ${screenMax.lg`
    padding: 5.5rem 5.5rem 0;
  `}
`;

export const ChartsContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  > div + div {
      //margin-left: 5rem;
  }  
`;
