import React from 'react';
import ArrowBack from './ArrowBack';
import Eye from './Eye';
import EyeSlash from './EyeSlash';
import PencilSquare from './PencilSquare';
import Stack3D from './Stack3D';
import XCircle from './XCircle';
import Trash from './Trash';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';

interface IconsComponents {
  ArrowBack: React.FC;
  Eye: React.FC;
  EyeSlash: React.FC;
  PencilSquare: React.FC;
  Stack3D: React.FC;
  XCircle: React.FC;
  Trash: React.FC;
  ChevronLeft: React.FC;
  ChevronRight: React.FC;
};

const Icons: IconsComponents = (): void => {};

Icons.ArrowBack = ArrowBack;
Icons.Eye = Eye;
Icons.EyeSlash = EyeSlash;
Icons.PencilSquare = PencilSquare;
Icons.Stack3D = Stack3D;
Icons.XCircle = XCircle;
Icons.Trash = Trash;
Icons.ChevronLeft = ChevronLeft;
Icons.ChevronRight = ChevronRight;

export default Icons;