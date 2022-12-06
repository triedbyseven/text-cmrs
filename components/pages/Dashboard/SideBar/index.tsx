import React, { useState } from 'react';
import Navbar from '../../../ui/Navbar';
import menuItems from '../../../../data/menuItems';
import { SideBarProps, SideBarState } from './interfaces';
import Styled from './styled';

const SideBar: React.FC<SideBarProps> = (): React.ReactElement => {
  const [state, setState] = useState<SideBarState>({
    menuItems: menuItems,
    selectedItem: 0
  }); 

  const selectItemHandler = (index: number): void => {
    setState(prevState => ({ ...prevState, selectedItem: index }));
  };

  return(
    <Styled.Container>
      <Navbar.Vertical 
        menuItems={state.menuItems} 
        selectedItem={state.selectedItem} 
        selectItem={selectItemHandler}
    />
    </Styled.Container>
  );
};

export default SideBar;