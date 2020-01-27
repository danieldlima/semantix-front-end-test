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

export const ChartsContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  
  div:nth-child(1),
  div:nth-child(4),
  div:nth-child(7),
  div:nth-child(10),
  div:nth-child(13) {
    margin-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  line-height: 65px;
  color: #001B36;
  margin-bottom: 5rem;
`;
