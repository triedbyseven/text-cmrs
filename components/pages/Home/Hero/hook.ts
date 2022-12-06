import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react';

interface useHero {
  getStartedOnClickHandler: any;
};

const useHero = (): useHero => {
  const router: NextRouter = useRouter();
  const href: string = '/auth/register';

  const getStartedOnClickHandler = (): void => {
    router.push(href);
  };

  useEffect(() => {
    router.prefetch(href);
  }, []);

  return {
    getStartedOnClickHandler: getStartedOnClickHandler
  };
};

export default useHero;