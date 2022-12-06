export interface RegisterFormProps {
  title: string;
};

export interface RegisterState {
  isSubmitting: boolean;
  togglePassword: boolean;
  username: string;
  password: string;
  phone: string;
  error: string;
};

interface ReturnRefs {
  inputUsernameRef: { current: any };
  inputPhoneRef: { current: any };
};

export interface RegisteredUser {
  username: string;
  password: string;
  phone: string;
};

export interface UseRegisterForm {
  state: RegisterState;
  hasErrors: () => boolean;
  navigateBack: () => void;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearPassword: () => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  ref: ReturnRefs;
};