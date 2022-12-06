import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 124px;
`;

const InnerContainer = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  max-width: 1400px;
  width: 100%;
`;

const Navbar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  height: 76px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0,0,0,0.15);
  margin: 12px 24px;
  padding: 0px 24px;
  border-radius: 14px;
  box-shadow: 0 12px 20px 6px rgb(104 112 118 / 0.08);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  backdrop-filter: saturate(180%) blur(10px);
`;

const ImageContainer = styled.span``;

const MenuContainer = styled.ul`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
  color: #000;

  @media(max-width: 734px) {
    display: none;
  }
`;

const MenuAuthContainer = styled.ul`
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
Styled.InnerContainer = InnerContainer;
Styled.NavBar = Navbar;
Styled.ImageContainer = ImageContainer;
Styled.MenuContainer = MenuContainer;
Styled.MenuAuthContainer = MenuAuthContainer;
Styled.MenuItem = MenuItem;
Styled.MenuItemAhref = MenuItemAhref;

export default Styled;