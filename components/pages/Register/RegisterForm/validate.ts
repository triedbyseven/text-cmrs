
interface ValidateResponse {
  username: (text: string) => string;
  password: (text: string) => string;
  phone: (text: string) => string;
};

const Validate = (): ValidateResponse => {
  const username = (text: string): string => {
    let message: string = '';

    const regexMinumumCharacter: RegExp = /^.{6,}$/;

    if (!regexMinumumCharacter.test(text)) return message = 'Your username must be longer then 6 characters.';

    return message;
  };

  const password = (text: string): string => {
    let message: string = '';

    const regexSpecialCharacter: RegExp = /[@!#$%^&*()]/;
    const regexNumberCharacter: RegExp = /[0-9]/;
    const regexMinumumCharacter: RegExp = /^.{8,}$/;
    const regexNormalCharacter: RegExp = /[a-z]/;

    if (!regexMinumumCharacter.test(text)) return message = 'Your password must be at least 8 characters long.';
    if (!regexNormalCharacter.test(text)) return message = 'Your password must container at least 1 alphabetical characters.';
    if (!regexNumberCharacter.test(text)) return message = 'Your password must a number 0-9.';
    if (!regexSpecialCharacter.test(text)) return message = 'Your password must contain at least 1 @!#$%^&*().';

    return message;
  };

  const phone = (text: string): string => {
    let message: string = '';

    const regexNumberCharacter: RegExp = /[0-9]/;
    const regexMinumumCharacter: RegExp = /^.{12,}$/;

    if (!regexNumberCharacter.test(text)) return message = 'Only numbers 0-9 are accepted.';
    if (!regexMinumumCharacter.test(text)) return message = 'Your phone number be a US 10 digit.';

    return message;
  };

  return {
    username: username,
    password: password,
    phone: phone
  };
};

interface SanitizeResponse {
  [key: string]: (text: string) => string;
  username: (text: string) => string;
  password: (text: string) => string;
  phone: (text: string) => string;
};

const Sanitize = (): SanitizeResponse => {
  const username = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*()_]/;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const password = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*_]/;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const phone = (text: string): string => {
    const regex: RegExp = /[0-9]/;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    if (joinedText.length > 6) return `${joinedText.substring(0, 3)}-${joinedText.substring(3, 6)}-${joinedText.substring(6, 10)}`;

    if (joinedText.length > 3) return `${joinedText.substring(0, 3)}-${joinedText.substring(3, 6)}`;

    return joinedText.substring(0, 3);
  };

  return {
    username: username,
    password: password,
    phone: phone
  };
};

export {
  Validate,
  Sanitize
};