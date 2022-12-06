import React from 'react';
import Text from './Text';
import { TextProps } from './Text/interfaces';
import Password from './Password';
import { PasswordProps } from './Password/interfaces';
import Phone from './Phone';
import { PhoneProps } from './Phone/interfaces';

const Inputs: {
  Text: React.FC<TextProps>
  Password: React.FC<PasswordProps>;
  Phone: React.FC<PhoneProps>;
} = (): void => { };

Inputs.Text = Text;
Inputs.Password = Password;
Inputs.Phone = Phone;

export default Inputs;