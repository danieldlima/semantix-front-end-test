import styled from 'styled-components';
// import { screenMin } from '@/assets/styles/breakpoints'; 

export const Main = styled.main`
  width: 100%;
  padding: 7rem 7rem 0 17rem;
`;

export const ChartsContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  > div {
    width: calc( (100% / 3) );  
    padding: 2rem;
    border-radius: 5px;
    border: 1px solid #D8DDE6;
    background: rgba(255, 255, 255, 0.0001);
    box-shadow: 0px 7px 60px 
      rgba(90, 97, 105, 0.16), 0px 8px 8px 
      rgba(90, 97, 105, 0.06), 0px 3px 6px rgba(90, 97, 105, 0.12), 0px 1px 0px 
      rgba(90, 97, 105, 0.11);
  }
  
  > div + div {
    margin-left: 5rem;
  }  
`;
