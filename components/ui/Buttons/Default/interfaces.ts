export interface DefaultProps {
  label: string;
  onSubmit: () => void;
  showLoader: boolean;
  disabled: boolean;
};

export interface RippleNode {
  id: string
  isRippling: boolean;
  x: number;
  y: number;
};

export type DefaultState = RippleNode[] 
