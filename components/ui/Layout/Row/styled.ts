import styled from 'styled-components';

const Styled = () => {};

interface StyledContainerProps extends React.CSSProperties {
};

const Container = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

Styled.Container = Container;

export default Styled;
