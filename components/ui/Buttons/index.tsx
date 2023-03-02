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
import Edit from './Edit';
import { EditProps } from './Edit/interfaces';
import Details from './Details';
import { DetailsProps } from './Details/interfaces';
import Delete from './Delete';
import { DeleteProps } from './Delete/interfaces';

const Buttons: {
  Default: React.FC<DefaultProps>;
  Secondary: React.FC<SecondaryProps>;
  Navbar: React.FC<NavbarProps>;
  ClearPassword: React.FC<ClearPasswordProps>;
  ToggleVisibility: React.FC<ToggleVisibilityProps>;
  Edit: React.FC<EditProps>;
  Details: React.FC<DetailsProps>;
  Delete: React.FC<DeleteProps>;
} = (): void => {};

Buttons.Default = Default;
Buttons.Secondary = Secondary;
Buttons.Navbar = Navbar;
Buttons.ClearPassword = ClearPassword;
Buttons.ToggleVisibility = ToggleVisibility;
Buttons.Edit = Edit;
Buttons.Details = Details;
Buttons.Delete = Delete;

export default Buttons;