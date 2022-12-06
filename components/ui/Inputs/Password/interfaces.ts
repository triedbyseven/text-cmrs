export interface PasswordProps {
  name: string;
  value: string;
  showPassword: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClearPassword: () => any;
  onTogglePassword: () => any;
};

export interface PasswordState {
  isFocused: boolean;
};
