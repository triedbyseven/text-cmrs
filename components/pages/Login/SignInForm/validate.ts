
interface ValidateResponse {
  username: (text: string) => string;
  password: (text: string) => string;
};

const Validate = (): ValidateResponse => {
  const username = (text: string): string => {
    let message: string = '';

    if (text.length < 6) return message = 'Your username must be longer then 6 characters.';

    return message;
  };

  const password = (text: string): string => {
    let message: string = '';

    if (text.length < 6) return message = 'Your password must be longer then 6 characters.';

    return message; 
  };

  return {
    username: username,
    password: password
  };
};

interface SanitizeResponse {
  [key: string]: (text: string) => string;
  username: (text: string) => string;
  password: (text: string) => string;
};

const Sanitize = (): SanitizeResponse => {
  const username = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*()_]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const password = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*_]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  }; 

  return {
    username: username,
    password: password
  };
};

export {
  Validate,
  Sanitize
};