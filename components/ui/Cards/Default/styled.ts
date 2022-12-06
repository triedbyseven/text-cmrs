import styled from 'styled-components';

const Styled = () => {};

interface ContainerStyledProps {
  fluid?: boolean;
}

const Container = styled.div<ContainerStyledProps>`
  overflow: visible;
  max-width: ${props => props.fluid ? '100%' : '400px'};  
  width: 100%;
  background-color: #FFF;
  border-radius: 14px;
  filter: drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1));
  padding: 12px;
`;

Styled.Container = Container;

export default Styled;
