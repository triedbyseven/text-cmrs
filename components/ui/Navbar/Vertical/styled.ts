import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  position: relative;  
`;

interface MenuItemStyledProps {
  selectedItemIndex: number;
  menuItemIndex: number;
};

const MenuItem = styled.div<MenuItemStyledProps>`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: 'Inter-Medium';
  color: ${props => props.selectedItemIndex === props.menuItemIndex ? '#0072F5' : '#565554'};
  padding: 16px 24px 16px 28px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const MenuMaker = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 48px;
  background-color: #0072F5;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  box-shadow: 0 12px 24px rgba(0, 114, 245, 0.5), 0 12px 24px rgba(0, 114, 245, 1);
`;

Styled.Container = Container;
Styled.MenuItem = MenuItem;
Styled.IconContainer = IconContainer;
Styled.MenuMaker = MenuMaker;

export default Styled;
