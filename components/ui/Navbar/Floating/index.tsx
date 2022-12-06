import Image from 'next/image';
import React from 'react';
import Buttons from '../../Buttons';
import AuthNavigation from './AuthNavigation';
import { FloatingProps } from './interfaces';
import Styled from './styled';

const Floating: React.FC<FloatingProps> = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.NavBar>
          <Styled.ImageContainer>
            <a href='#'>
              <Image src='/logo-nav.png' width={50} height={23} />
            </a>
          </Styled.ImageContainer>
          <Styled.MenuContainer>
            {/* <Styled.MenuItem>
              <Styled.MenuItemAhref isActive={false}>
                Features
              </Styled.MenuItemAhref>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Styled.MenuItemAhref isActive={true}>
                Customers
              </Styled.MenuItemAhref>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Styled.MenuItemAhref isActive={false}>
                Pricing
              </Styled.MenuItemAhref>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Styled.MenuItemAhref isActive={false}>
                Company
              </Styled.MenuItemAhref>
            </Styled.MenuItem> */}
          </Styled.MenuContainer>

          <AuthNavigation />
        </Styled.NavBar> 
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Floating;