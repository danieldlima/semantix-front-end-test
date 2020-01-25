import styled from 'styled-components';

import {Colors, Padding, Transition} from '../../assets/styles/variables';

// import { screenMin } from '@/assets/styles/breakpoints';

export const Header = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 10rem;
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  padding: ${Padding.default + 0.5}rem 0;
  background: linear-gradient(180deg, #000000 0%, #B5B5B5 100%);
  
`;

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;  
  display: flex;
  flex-direction: column;
    
    @media (max-height: 24rem) {
      max-height: 24rem;
      ::-webkit-scrollbar {
          display: none;
      }
    }
    
    > a {
      width: 100%;
      height: 8rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${Colors.white};
      padding: ${Padding.default}rem;
      margin-bottom: ${Padding.default}rem;
    
      > div:first-child {
        position: relative;
        top: 0;        
        margin-bottom: .5rem;
        transition: ${Transition().default};
      }
      
      > div:last-child {      
        opacity: 1;
        transition: ${Transition('all', '.3s').default};
      }
      
      :hover {
        background: rgba(255, 255, 255, 0.2);
        transition: ${Transition().default};
      
        > div:first-child {
          top: 50%;
          transform: translateY(-50%);
        }
        > div:last-child {      
          opacity: 0;
        }
      }
    }
`;

export const Container = styled.div`
  padding: ${(props) => props.padding};
`;
