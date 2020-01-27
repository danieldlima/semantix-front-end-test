import styled from 'styled-components';

import { Colors, Transition } from '@/assets/styles/variables';
import { screenMin, screenMax, screenCustom } from '@/assets/styles/breakpoints';

export const Container = styled.div`
  position: relative;
  width: calc( (100% / 3) - 5rem );
  height: calc(10rem * 4);
  padding: 2rem 2rem 5rem;
  border-radius: 5px;
  border: 1px solid ${Colors.greyLightLevel1};
  background: rgba(255, 255, 255, 0.0001);
  box-shadow: 0px 7px 60px 
    rgba(90, 97, 105, 0.16), 0px 8px 8px 
    rgba(90, 97, 105, 0.06), 0px 3px 6px rgba(90, 97, 105, 0.12), 0px 1px 0px 
    rgba(90, 97, 105, 0.11);
  transition: ${Transition().default};
  
  ${screenMax.md`
    margin-bottom: 5rem;
    
    + div:nth-child(3) {
      margin-left: 0;
    }
  `}
  
  ${screenMax.sm`
    height: calc(10rem * 3);  
  `}
  
  ${screenCustom('max', 414).sm`
    height: calc(10rem * 2);
    padding: 0 0 5rem;
  `}
  
  ${screenMin.md`
    width: calc( (100% / 2) - 2rem );
    margin-bottom: 5rem;
    
    + div:nth-child(3) {
      margin-left: 0;
    }
  `}
  
  ${screenMax.lg`    
    width: 100%;
    
    + div:nth-child(2) {
      margin-left: 0;
    }
  `}
  
  ${screenMin.lg`
    margin-left: 5rem;
    + div:nth-child(3) {
      width: calc( 100% - 5rem );
    }
  `}
  
  ${screenMin.xl`
    width: calc( (100% / 3) - 4rem );
    margin-left: 3rem;
    
    + div:nth-child(3) {
      width: calc( (100% / 3) - 4rem );
      margin-left: 4rem;
    }
  `}
  
  + div:nth-child(3) {
    transition: ${Transition().default};
  }
    
  & + & {
    margin-left: 4rem;
    transition: ${Transition().default};
  }
`;

export const ContentBox = styled.div`
  position: relative;
  height: 100%;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 20px;
  text-transform: uppercase;  
  color: ${Colors.greenDarkLevel1};
  
  margin-bottom: 2rem;
  
  ${screenCustom('max', 414).sm`
    margin: 1rem 0 0 1rem;
  `}
  
  ${screenCustom('max', 320).sm`
    margin: 1rem 0 0 1rem;
  `}
`;
