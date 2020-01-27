import styled from 'styled-components';

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
