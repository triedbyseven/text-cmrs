import React from 'react';
import Buttons from '../../../ui/Buttons';
import Cards from '../../../ui/Cards';
import Errors from '../../../ui/Errors';
import Inputs from '../../../ui/Inputs';
import Layout from '../../../ui/Layout';
import useSignInForm from './hooks';
import { SignInFormProps } from './interfaces';

const SignInForm: React.FC<SignInFormProps> = (props): React.ReactElement | null => {
  const useSignInHook = useSignInForm();

  return(
    <Cards.Default>
      <Layout.Row flexDirection='column'>
        <Layout.Column padding={useSignInHook.hasErrors() ? '12px' : '0px 0px'}>
          <Errors.Single 
            hasError={useSignInHook.hasErrors()}
            message={useSignInHook.state.error}
          />
        </Layout.Column>

        <Layout.Column>
          <Inputs.Text
            ref={useSignInHook.ref.inputUsernameRef}
            label='Username'
            name='username'
            value={useSignInHook.state.username}
            onChange={useSignInHook.onChangeHandler}
          />
        </Layout.Column>

        <Layout.Column>
          <Inputs.Password 
            name='password'
            value={useSignInHook.state.password}
            showPassword={useSignInHook.state.togglePassword}
            onChange={useSignInHook.onChangeHandler}
            onClearPassword={useSignInHook.onClearPassword}
            onTogglePassword={useSignInHook.onTogglePassword}
          />
        </Layout.Column>
      </Layout.Row>

      <Layout.Row flexDirection='row'>
        <Layout.Column>
          <Buttons.Default 
            label='Log In' 
            onSubmit={useSignInHook.onSubmit}
            showLoader={useSignInHook.state.isSubmitting}
            disabled={useSignInHook.state.isSubmitting}
          />
        </Layout.Column>

        <Layout.Column>
          <Buttons.Secondary 
            label='Sign Up'
            onClick={useSignInHook.navigateToRegister}
          />
        </Layout.Column>
      </Layout.Row>
    </Cards.Default>
  );
};

export default SignInForm;
