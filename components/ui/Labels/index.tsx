import React from 'react';
import Active from './Active';
import { ActiveProps } from './Active/interfaces';
import Paused from './Paused';
import { PausedProps } from './Paused/interfaces';

interface LabelsComponents {
  Active: React.FC<ActiveProps>;
  Paused: React.FC<PausedProps>;
};

const Labels: LabelsComponents = (): void => { };

Labels.Active = Active;
Labels.Paused = Paused;

export default Labels;