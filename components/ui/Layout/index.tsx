import React from 'react';
import Row from './Row';
import { RowProps } from './Row/interfaces';
import Column from './Column';
import { ColumnProps } from './Column/interfaces';
import Container from './Container';
import { ContainerProps } from './Container/interfaces';
import Page from './Page';
import { PageProps } from './Page/interfaces';

interface LayoutProps {
  Row: React.FC<RowProps>;
  Column: React.FC<ColumnProps>;
  Container: React.FC<ContainerProps>;
  Page: React.FC<PageProps>;
};

const Layout: LayoutProps = (): void => {};

Layout.Row = Row;
Layout.Column = Column;
Layout.Container = Container;
Layout.Page = Page;

export default Layout