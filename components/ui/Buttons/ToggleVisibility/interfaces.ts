export interface ToggleVisibilityProps {
  showPassword: boolean;
  onTogglePassword: () => any;
};

export interface RippleNode {
  id: string
  isRippling: boolean;
  x: number;
  y: number;
};

export type ToggleVisibilityState = RippleNode[] 
