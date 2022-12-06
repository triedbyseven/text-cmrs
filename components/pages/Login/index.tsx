import React from 'react';
import Header from './Header';
import { HeaderProps } from './Header/interfaces';
import SignInForm from './SignInForm';

const Components: {
  Header: React.FC<HeaderProps>;
  SignInForm: React.FC;
 } = (): void => {

};

Components.Header = Header;
Components.SignInForm = SignInForm

export default Components;