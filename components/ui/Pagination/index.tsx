import React from 'react';
import Default from './Default';
import { DefaultProps } from './Default/interfaces';

const Pagination: {
  Default: React.FC<DefaultProps>;
} = (): void => { };

Pagination.Default = Default;

export default Pagination;