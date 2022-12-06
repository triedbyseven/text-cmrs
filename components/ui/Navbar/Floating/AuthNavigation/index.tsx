import React from 'react';
import Buttons from '../../../Buttons';
import NavigationLink from '../NavigationLink';
import useAuthNavigation, { useAuthNavigationReturn } from './hook';
import { AuthNavigationProps } from './interfaces';
import Styled from './styled';


const AuthNavigation: React.FC<AuthNavigationProps> = (): React.ReactElement => {
  const { signUpOnClickHandler }: useAuthNavigationReturn = useAuthNavigation();

  return(
    <Styled.Container>
      <NavigationLink name='Login' href='/auth/login'/>
      <Styled.MenuItem>
        <Buttons.Navbar label='Sign Up' onClick={signUpOnClickHandler} />
      </Styled.MenuItem>
    </Styled.Container> 
  );
};

export default AuthNavigation;
