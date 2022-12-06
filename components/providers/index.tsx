import React from 'react';
import Private, { PrivateProps } from './Private';
import Public, { PublicProps } from './Public';
import WindowDimensions, { WindowDimensionsProps } from './WindowDimensions';

const Providers: {
  Private: React.FC<PrivateProps>;
  Public: React.FC<PublicProps>;
  WindowDimensions: React.FC<WindowDimensionsProps>;
} = () => {};

Providers.Private = Private;
Providers.Public = Public;
Providers.WindowDimensions = WindowDimensions;

export default Providers;