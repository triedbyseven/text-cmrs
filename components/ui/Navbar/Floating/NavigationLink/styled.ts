import styled from 'styled-components';

const Styled = () => {};

const Container = styled.li`
  list-style-type: none;
`;

interface StyledIsActiveProps {
  isActive: boolean;
};

const MenuItemAhref = styled.a<StyledIsActiveProps>`
  color: ${props => props.isActive ? '#0072f5' : '#000'};
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    opacity: 0.80;
  }
`;

Styled.Container = Container;
Styled.MenuItemAhref = MenuItemAhref;

export default Styled;
