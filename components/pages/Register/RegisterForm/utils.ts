import { RegisteredUser } from "./interfaces";

/**
 * A mock api request promise function that resolves to a simple object to mock what the 
 * request would return.
 * 
 * @name apiRequest 
 * @param registeredUser Register user object
 * @returns A mock object of the user name.
 */

const apiRequest = (registeredUser: RegisteredUser) => new Promise((resolve, reject) => {
  const user: RegisteredUser = registeredUser;

  setTimeout(() => {
    resolve({ message: 'User has been registered.', username: user.username });
  }, 2000);
});

export {
  apiRequest
};