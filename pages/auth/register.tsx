import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Providers from '../../components/providers';
import RegisterComponents from '../../components/pages/Register';

const Register: NextPage = () => {
  return (
    <Providers.Public>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register for a user account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Providers.WindowDimensions resize={true}>
        {/* Header Here */}
        <RegisterComponents.Header />
        {/* Form  Here */}
        <Styled.FormContainer>
          <RegisterComponents.RegisterForm 
            title='Create An Account'
          />
        </ Styled.FormContainer>
      </Providers.WindowDimensions>
    </Providers.Public>
  );
};

export default Register;

const Styled = (): void => { };

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