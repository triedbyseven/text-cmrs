import React from 'react';
import SlideX from './SlideX';
import { SlideXProps } from './SlideX/interfaces';
import SlideY from './SlideY';
import { SlideYProps } from './SlideY/interfaces';

const Animations: {
  SlideX: React.FC<SlideXProps>;
  SlideY: React.FC<SlideYProps>;
} = (): void => {

};

Animations.SlideX = SlideX;
Animations.SlideY = SlideY;

export default Animations;