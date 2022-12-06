import React from 'react';
import Default from './Default';
import { DefaultProps } from './Default/interfaces';
import Navbar from './Navbar';
import { NavbarProps } from './Navbar/interfaces';
import ClearPassword from './ClearPassword';
import { ClearPasswordProps } from './ClearPassword/interfaces';
import ToggleVisibility from './ToggleVisibility';
import { ToggleVisibilityProps } from './ToggleVisibility/interfaces';
import Secondary from './Secondary';
import { SecondaryProps } from './Secondary/interfaces';

const Buttons: {
  Default: React.FC<DefaultProps>;
  Secondary: React.FC<SecondaryProps>;
  Navbar: React.FC<NavbarProps>;
  ClearPassword: React.FC<ClearPasswordProps>;
  ToggleVisibility: React.FC<ToggleVisibilityProps>;
} = (): void => {};

Buttons.Default = Default;
Buttons.Secondary = Secondary;
Buttons.Navbar = Navbar;
Buttons.ClearPassword = ClearPassword;
Buttons.ToggleVisibility = ToggleVisibility;

export default Buttons;