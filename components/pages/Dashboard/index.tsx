import React from 'react';
import Content from './Content';
import { ContentProps } from './Content/interfaces';
import SideBar from './SideBar';
import { SideBarProps } from './SideBar/interfaces';

const Components: {
  Content: React.FC<ContentProps>;
  SideBar: React.FC<SideBarProps>;
 } = (): void => {

};

Components.Content = Content;
Components.SideBar = SideBar;

export default Components;