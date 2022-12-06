import { useRef, useState } from 'react';
import { RegisteredUser, RegisterState, UseRegisterForm } from './interfaces';
import { isLoggedInVar } from '../../../../apollo/reactiveVars';
import { apiRequest } from './utils';
import { Validate, Sanitize } from './validate';

const initialState = (): RegisterState => ({
  isSubmitting: false,
  togglePassword: false,
  username: '',
  password: '',
  phone: '',
  error: ''
});

const useRegisterForm = (): UseRegisterForm => {
  const [state, setState] = useState<RegisterState>(initialState());
  const inputUsernameRef: { current: any } = useRef(null);
  const inputPhoneRef: { current: any } = useRef(null);

  const hasErrors = (): boolean => state.error ? true : false;
  const toggleIsSubmitting = (): void => setState(prevState => ({ ...prevState, isSubmitting: !prevState.isSubmitting }));
  const setErrorMessage = (errorMessage: string): void => setState(prevState => ({ ...prevState, error: errorMessage }));

  const navigateBack = (): void => {
    // router.push('/auth/register');
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length > 30) return;

    const key: string = event.target.name;
    const value: string = Sanitize()[key](event.target.value);

    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const onClearPassword = (): void => {
    setState(prevState => ({ ...prevState, password: '' }));
  };

  const onTogglePassword = (): void => {
    setState(prevState => ({ ...prevState, togglePassword: !prevState.togglePassword }));
  };

  const onSubmit = async (): Promise<void> => {
    try {
      toggleIsSubmitting();

      const errorUsernameMessage: string = Validate().username(state.username);
      const errorPasswordMessage: string = Validate().password(state.password);
      const errorValidateMessage: string = Validate().phone(state.phone);

      const hasErrorMessage: string = errorUsernameMessage || errorPasswordMessage || errorValidateMessage;

      if ( hasErrorMessage ) {
        setErrorMessage(hasErrorMessage);
        toggleIsSubmitting();
        return;
      };

      setErrorMessage('');

      const userToRegister: RegisteredUser = {
        'username': state.username, 
        'password': state.password, 
        'phone': state.phone
      };

      const myRequest = await apiRequest(userToRegister);
      console.log('User has been registered successfully: ', myRequest);

      toggleIsSubmitting();
      isLoggedInVar(true);
    } catch (error) {
      console.log(error);
    };
  };

  return {
    state: state,
    hasErrors: hasErrors,
    navigateBack: navigateBack,
    onChangeHandler: onChangeHandler,
    onClearPassword: onClearPassword,
    onTogglePassword: onTogglePassword,
    onSubmit: onSubmit,
    ref: {
      inputUsernameRef: inputUsernameRef,
      inputPhoneRef: inputPhoneRef
    }
  };
};

export default useRegisterForm;