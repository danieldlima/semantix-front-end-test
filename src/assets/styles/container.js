import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
  size: props.size || '35',
}))`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default Container;
