export interface SignInFormProps {

};

export interface SignInState {
  isSubmitting: boolean;
  togglePassword: boolean;
  username: string;
  password: string;
  error: string;
};

interface ReturnRefs {
  inputUsernameRef: { current: any };
};

export interface UseSignInForm {
  state: SignInState;
  hasErrors: () => boolean;
  navigateToRegister: () => void;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearPassword: () => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  ref: ReturnRefs;
};