import React from 'react';
import Floating from './Floating';
import Vertical from './Vertical';
import { FloatingProps } from './Floating/interfaces';
import { VerticalProps } from './Vertical/interfaces';

const Navbar: {
  Floating: React.FC<FloatingProps>;
  Vertical: React.FC<VerticalProps>;
} = (): void => { };

Navbar.Floating = Floating;
Navbar.Vertical = Vertical;

export default Navbar;