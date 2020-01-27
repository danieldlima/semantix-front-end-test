import styled from 'styled-components';

import { Colors, Padding, Transition } from '@/assets/styles/variables';
import { screenMax, screenMin } from "@/assets/styles/breakpoints";

export const Container = styled.div`
  padding: ${(props) => props.padding};
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
          display: block;      }
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
      
      ${screenMin.xl`
        @media (hover: hover) {      
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
      `};
      
    }
`;

export const CloseButtonBox = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  cursor: pointer;
  overflow: hidden;
`;

export const CloseButton = styled.span`
  position: absolute;
  width: 4rem;
  height: .3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.white};
  
  :before {
    position: absolute;
    content: '';
    top: -1rem;
    width: 100%;
    height: 100%;
    background-color: ${Colors.white};
  }
  
  :after {
    position: absolute;
    content: '';
    top: 1rem;
    width: 100%;
    height: 100%;
    background-color: ${Colors.white};
  }
`;

export const HeaderMobile = styled.header`  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #000000 0%, #242424 100%);
  padding: 0 2rem;
  transition: ${Transition().default};
  z-index: 1; 
  
  ${screenMin.xl`
    display: none
  `};

  & ${CloseButtonBox} {
    width: 3rem;
  }
  
  & ${Container} {
    position: relative;
    display: flex;
    width: calc(100% - 4rem);
    margin-left: 1rem;
  }
  
  & ${Container} ${Container} {
    position: relative;
    width: 15rem;
    
    + div {
      width: 32rem;
      position: fixed;
      top: 0;
      bottom: 0;
      left: -32rem;
      background: ${Colors.black};
      transition: ${Transition().default};
      
      &.navigation--open {
        left: 0;
      }
      
      & ${CloseButtonBox} {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 5rem;
      }
      
      & ${CloseButtonBox} ${CloseButton} {
        right: 0;
        left: initial;
        background-color: transparent;
        
        :before {
          position: absolute;
          content: '';
          top: 0;
          transform: rotate(-45deg);
          width: 100%;
          height: 100%;
          background-color: ${Colors.white};
        }
        
        :after {
          position: absolute;
          content: '';
          top: 0;
          transform: rotate(45deg);
          width: 100%;
          height: 100%;
          background-color: ${Colors.white};
        }
      }
    }
    
    > a {
      position: relative;
      width: 100%;
      
      > svg {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  
  & nav {
    overflow-y: auto;
  
    @media (max-height: 24rem) {
      max-height: 24rem;
      ::-webkit-scrollbar {
          display: none;
      }
    }
    
    > a {
      flex-direction: row;
      margin-bottom: 0;
      justify-content: center;
      
      > div:first-child {
        margin: 0;
      }
      
      > div:last-child {
        margin-left: 1.5rem;
      }
    }
  }
`;

export const Header = styled.header`  
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 12rem;
  height: 100%;
  background: linear-gradient(180deg, #000000 0%, #B5B5B5 100%);
  padding: ${Padding.default + 0.5}rem 0;
  transition: ${Transition().default};
  z-index: 1; 
  
  ${screenMax.xl`
    display: none
  `};

  & ${CloseButtonBox} {
    display: none;
  }
  
  & ${Container} {    
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    height: 100%;
  }
  
  & ${Container} ${Container} {
    margin-top: 2rem;
  }
`;
