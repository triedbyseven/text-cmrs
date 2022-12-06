import React from 'react';
import Animations from '../../../animations';
import Layout from '../../Layout';
import { MenuItem, VerticalProps } from './interfaces';
import Styled from './styled';


const Vertical: React.FC<VerticalProps> = (props): React.ReactElement => {
  const onClickHandler = (index: number) => {
    return (): void => {
      props.selectItem(index);
    };
  };

  const renderMenu = (): React.ReactElement[] => {
    const menuItems = props.menuItems.map((menuItem: MenuItem, index: number) => (
      <Layout.Column key={index} padding='0px'>
        <Styled.MenuItem onClick={onClickHandler(index)} selectedItemIndex={props.selectedItem} menuItemIndex={index}>
          <Styled.IconContainer>
            {menuItem.icon({})}
          </Styled.IconContainer>
          {menuItem.name}
        </Styled.MenuItem>
      </Layout.Column>
    ));

    return menuItems;
  };

  return(
    <Styled.Container>
      <Animations.SlideX index={props.selectedItem}>
        <Styled.MenuMaker />
      </Animations.SlideX>
      <Layout.Row flexDirection='column'>
        {renderMenu()}
      </Layout.Row>
    </Styled.Container>
  );
};

export default Vertical;
