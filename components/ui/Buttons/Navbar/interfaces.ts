export interface NavbarProps {
  label: string;
  onClick: () => void;
};

export interface RippleNode {
  id: string
  isRippling: boolean;
  x: number;
  y: number;
};

export type NavbarState = RippleNode[] 
