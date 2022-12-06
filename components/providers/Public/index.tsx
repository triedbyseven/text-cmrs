import React, { useEffect } from 'react';
import { isLoggedInVar } from '../../../apollo/reactiveVars';
import Router from 'next/router';
import { useReactiveVar } from '@apollo/client';

export interface PublicProps {
  children: React.ReactNode;
};

const Public: React.FC<PublicProps> = (props): React.ReactElement => {
  const isLoggedInRV = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    if (isLoggedInRV) {
      Router.push('/dashboard');
    };
  }, [isLoggedInRV]);

  if (isLoggedInRV) return <></>;

  return (
    <>
      {props.children}
    </>
  )
};

export default Public;