import React from 'react';

export interface DeleteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
};

export interface DeleteState {
  isMouseOver: boolean;
};
