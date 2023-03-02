import React from 'react';

export interface EditProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
};

export interface EditState {
  isMouseOver: boolean;
};
