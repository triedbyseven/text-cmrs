import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  overflow: visible;
  max-width: 400px;  
  width: 100%;
  background-color: #FFF;
  border-radius: 14px;
  filter: drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1));
  padding: 12px;
`;

Styled.Container = Container;

export default Styled;
