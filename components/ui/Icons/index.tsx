import React from 'react';
import ArrowBack from './ArrowBack';
import Eye from './Eye';
import EyeSlash from './EyeSlash';
import Stack3D from './Stack3D';
import XCircle from './XCircle';

interface IconsComponents {
  ArrowBack: React.FC;
  Eye: React.FC;
  EyeSlash: React.FC;
  Stack3D: React.FC;
  XCircle: React.FC;
};

const Icons: IconsComponents = (): void => {};

Icons.ArrowBack = ArrowBack;
Icons.Eye = Eye;
Icons.EyeSlash = EyeSlash;
Icons.Stack3D = Stack3D;
Icons.XCircle = XCircle;

export default Icons;