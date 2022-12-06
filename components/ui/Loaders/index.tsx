import React from 'react';
import Dots from './Dots';
import { DotsProps } from './Dots/interfaces';

const Loaders: {
  Dots: React.FC<DotsProps>
} = ():void => {};

Loaders.Dots = Dots;

export default Loaders;