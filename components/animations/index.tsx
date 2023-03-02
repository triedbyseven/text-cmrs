import React from 'react';
import SlideX from './SlideX';
import { SlideXProps } from './SlideX/interfaces';
import SlideY from './SlideY';
import { SlideYProps } from './SlideY/interfaces';
import PaginationCursor from './PaginationCursor';
import { PaginationCursorProps } from './PaginationCursor/interfaces';

const Animations: {
  SlideX: React.FC<SlideXProps>;
  SlideY: React.FC<SlideYProps>;
  PaginationCursor: React.FC<PaginationCursorProps>;
} = (): void => {

};

Animations.SlideX = SlideX;
Animations.SlideY = SlideY;
Animations.PaginationCursor = PaginationCursor;

export default Animations;