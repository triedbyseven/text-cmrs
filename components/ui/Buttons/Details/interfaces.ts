import React from 'react';

export interface DetailsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
};

export interface DetailsState {
  isMouseOver: boolean;
};
