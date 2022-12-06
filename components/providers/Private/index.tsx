import React, { useEffect } from 'react';
import { isLoggedInVar } from '../../../apollo/reactiveVars';
import Router from 'next/router';
import { useReactiveVar } from '@apollo/client';

export interface PrivateProps {
  children: React.ReactNode;
};

const Private: React.FC<PrivateProps> = (props): React.ReactElement => {
  const isLoggedInRV = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    if ( !isLoggedInRV ) { 
      Router.push('/auth/login');
    };
  }, [isLoggedInRV]);

  if ( !isLoggedInRV ) return <></>;

  return (
    <>
      { props.children }
    </>
  ) 
};

export default Private;