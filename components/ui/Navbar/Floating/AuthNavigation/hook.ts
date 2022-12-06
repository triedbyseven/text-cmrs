import { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

export interface useAuthNavigationReturn {
  signUpOnClickHandler: () => void; 
};

const useAuthNavigation = (): useAuthNavigationReturn => {
  const router: NextRouter = useRouter();
  const hrefRegister: string = '/auth/register';

  const signUpOnClickHandler = (): void => {
    router.push(hrefRegister);
  };
  
  useEffect(() => {
    router.prefetch(hrefRegister);
  }, []);

  return {
    signUpOnClickHandler: signUpOnClickHandler
  };
};

export default useAuthNavigation;