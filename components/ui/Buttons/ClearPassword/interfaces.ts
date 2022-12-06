export interface ClearPasswordProps {
  value: string;
  onClearPassword: () => any;
};

export interface RippleNode {
  id: string
  isRippling: boolean;
  x: number;
  y: number;
};

export type ClearPasswordState = RippleNode[] 