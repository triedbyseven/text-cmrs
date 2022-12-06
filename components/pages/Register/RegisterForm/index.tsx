import React from 'react';
import Buttons from '../../../ui/Buttons';
import Cards from '../../../ui/Cards';
import Errors from '../../../ui/Errors';
import Inputs from '../../../ui/Inputs';
import Layout from '../../../ui/Layout';
import Typography from '../../../ui/Typography';
import useRegisterForm from './hooks';
import { RegisterFormProps } from './interfaces';

const RegisterForm: React.FC<RegisterFormProps> = (props): React.ReactElement => {
  const useRegisterHook = useRegisterForm();

  return(
    <Cards.Default>
      <Layout.Row flexDirection='column'>
        <Layout.Column>
          <Typography.H6 
            text={props.title}
          />
        </Layout.Column>
        <Layout.Column padding={useRegisterHook.hasErrors() ? '12px' : '0px 0px'}>
          <Errors.Single
            hasError={useRegisterHook.hasErrors()}
            message={useRegisterHook.state.error}
          />
        </Layout.Column>
        <Layout.Column>
          <Inputs.Text
            ref={useRegisterHook.ref.inputUsernameRef}
            label='Username'
            name='username'
            value={useRegisterHook.state.username}
            onChange={useRegisterHook.onChangeHandler}
          />
        </Layout.Column>
        <Layout.Column>
          <Inputs.Password
            name='password'
            value={useRegisterHook.state.password}
            showPassword={useRegisterHook.state.togglePassword}
            onChange={useRegisterHook.onChangeHandler}
            onClearPassword={useRegisterHook.onClearPassword}
            onTogglePassword={useRegisterHook.onTogglePassword}
          />
        </Layout.Column>
        <Layout.Column>
          <Inputs.Phone 
            ref={useRegisterHook.ref.inputPhoneRef}
            label='+1'
            name='phone'
            value={useRegisterHook.state.phone}
            onChange={useRegisterHook.onChangeHandler} 
          />
        </Layout.Column>
        <Layout.Column>
          <Buttons.Default
            label='Sign Me Up'
            onSubmit={useRegisterHook.onSubmit}
            showLoader={useRegisterHook.state.isSubmitting}
            disabled={useRegisterHook.state.isSubmitting}
          />
        </Layout.Column>
      </Layout.Row>
    </Cards.Default>
  );
};

export default RegisterForm;
