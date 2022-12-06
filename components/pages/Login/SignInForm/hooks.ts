import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { isLoggedInVar } from '../../../../apollo/reactiveVars';
import { SignInState, UseSignInForm } from './interfaces';
import { apiRequest } from './utils';
import { Sanitize, Validate } from './validate';

const useSignInForm = (): UseSignInForm => {
  const router: NextRouter = useRouter();
  const inputUsernameRef: { current: any } = useRef(null);
  const [state, setState] = useState<SignInState>({
    isSubmitting: false,
    togglePassword: false,
    username: '',
    password: '',
    error: ''
  });

  const hasErrors = (): boolean => state.error ? true : false;
  const toggleSubmitting = (): void => setState(prevState => ({ ...prevState, isSubmitting: !prevState.isSubmitting }));
  const setErrorMessage = (errorMessage: string): void => setState(prevState => ({ ...prevState, error: errorMessage }));

  const navigateToRegister = (): void => {
    router.push('/auth/register');
  };
  
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length > 18) return;

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
      toggleSubmitting();

      const errorUsernameMessage: string = Validate().username(state.username);
      const errorPasswordMessage: string = Validate().password(state.password);

      const hasErrorMessage: string = errorUsernameMessage || errorPasswordMessage;

      if ( hasErrorMessage ) {
        setErrorMessage(hasErrorMessage);
        toggleSubmitting();
        return;
      };

      setErrorMessage('');

      const myRequest = await apiRequest();
      console.log('My Request: ', myRequest);
      
      toggleSubmitting();
      isLoggedInVar(true);
    } catch( error ) {
      console.log(error);
    };
  };

  return {
    state: state,
    hasErrors: hasErrors,
    navigateToRegister: navigateToRegister,
    onChangeHandler: onChangeHandler,
    onClearPassword: onClearPassword,
    onTogglePassword: onTogglePassword,
    onSubmit: onSubmit,
    ref: {
      inputUsernameRef: inputUsernameRef
    }
  };
};

export default useSignInForm;