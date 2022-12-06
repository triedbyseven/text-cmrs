import { isLoggedInVar } from '../reactiveVars';

export const Query = {
  fields: {
    isLoggedIn: {
      read() {
        return isLoggedInVar();
      }
    }
  }
};