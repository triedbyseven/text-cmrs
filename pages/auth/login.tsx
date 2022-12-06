import type { NextPage } from 'next';
import Head from 'next/head';
import Components from '../../components/pages/Login';
import styled from 'styled-components';
import Providers from '../../components/providers';

const Login: NextPage = () => {

  return (
    <Providers.Public>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login for a user account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Providers.WindowDimensions resize={true}>
        {/* Header  Here */}
        <Components.Header />
        {/* Form  Here */}
        <Styled.FormContainer>
          <Components.SignInForm />
        </Styled.FormContainer>
      </Providers.WindowDimensions>
    </Providers.Public>
  );
};

export default Login;

const Styled = (): void => {};

interface StyledFormContainerProps {
  width?: number;
  height?: number;
};

const FormContainer = styled.div<StyledFormContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

Styled.FormContainer = FormContainer;