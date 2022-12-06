import React from 'react';
import Default from './Default';
import { DefaultProps } from './Default/interfaces';

interface TableComponents {
  Default: React.FC<DefaultProps>;
};

const Table: TableComponents = (): void => { };

Table.Default = Default;

export default Table;