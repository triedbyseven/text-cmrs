import styled from 'styled-components';

const Styled = () => {};

const Container = styled.ul`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
  color: #000;
`;

const MenuItem = styled.li`
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
Styled.MenuItem = MenuItem;
Styled.MenuItemAhref = MenuItemAhref;

export default Styled;
