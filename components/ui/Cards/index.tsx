import React from 'react';
import Default from './Default';
import { DefaultProps } from './Default/interfaces';

const Cards: {
  Default: React.FC<DefaultProps>;
} = (): void => { };

Cards.Default = Default;

export default Cards;