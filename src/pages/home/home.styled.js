import styled from 'styled-components';

import { screenCustom } from "@/assets/styles/breakpoints";

export const Title = styled.div`
  font-size: 48px;
  line-height: 65px;
  color: #001B36;
  margin-bottom: 5rem;
  
  ${screenCustom('max', 414).sm`
    margin: 1rem 0 0 1rem !important;
  `};
      
  ${screenCustom('max', 320).sm`
    margin: 1rem 0 0 1rem !important;
  `};
`;

export const ChartsContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
