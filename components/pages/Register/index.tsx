import React from 'react';
import Header from './Header';
import { HeaderProps } from './Header/interfaces';
import RegisterForm from './RegisterForm';
import { RegisterFormProps } from './RegisterForm/interfaces';

interface RegisterComponents {
  Header: React.FC<HeaderProps>;
  RegisterForm: React.FC<RegisterFormProps>;
};

const RegisterComponents: RegisterComponents = (): void => {};

RegisterComponents.Header = Header;
RegisterComponents.RegisterForm = RegisterForm;

export default RegisterComponents;