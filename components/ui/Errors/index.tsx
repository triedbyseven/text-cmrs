import React from 'react';
import Single from './Single';
import { SingleProps } from './Single/interfaces';

interface ErrorComponents {
  Single: React.FC<SingleProps>;
};

const Errors: ErrorComponents = (): void => {};

Errors.Single = Single;

export default Errors;