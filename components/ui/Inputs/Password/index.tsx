import React, { useRef, useState } from 'react';
import Buttons from '../../Buttons';
import { PasswordProps, PasswordState } from './interfaces';
import Styled from './styled';

const Password: React.FC<PasswordProps> = (props): React.ReactElement => {
  const [state, setState] = useState<PasswordState>({
    isFocused: false
  });
  const myref = useRef<any>(null);

  const onFocusHandler = (): void => {
    setState(prevState => ({ ...prevState, isFocused: !prevState.isFocused }))
  };

  const onBlurHandler = (): void => {
    setState(prevState => ({ ...prevState, isFocused: !prevState.isFocused }))
  };

  const onClearPasswordHandler = (): void => {
    props.onClearPassword();

    myref.current.focus();
    setState({ isFocused: true });
  };

  return(
    <Styled.Container isFocused={state.isFocused}>
      <Styled.InnerContainer>
        <Styled.Label>
          <Styled.Title>Password</Styled.Title>
          <Styled.Input 
            ref={myref}
            type={props.showPassword ? 'text' : 'password'}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />
        </Styled.Label>
        <Buttons.ClearPassword 
          value={props.value} 
          onClearPassword={onClearPasswordHandler} 
        /> 
        <Buttons.ToggleVisibility 
          showPassword={props.showPassword} 
          onTogglePassword={props.onTogglePassword}
        />
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Password;
