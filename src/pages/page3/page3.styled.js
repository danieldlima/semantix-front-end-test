import styled from 'styled-components';

import { screenMax } from '@/assets/styles/breakpoints';
import { Transition } from '@/assets/styles/variables';

export const ChartsContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 48px;
  line-height: 65px;
  color: #001B36;
  margin-bottom: 5rem;
  transition: ${Transition().default};
  
  ${screenMax.md`
    margin-bottom: 2rem;
  `}
`;
