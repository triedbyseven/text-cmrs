import React, { forwardRef, useState } from 'react';
import { PhoneProps, PhoneState } from './interfaces';
import Styled from './styled';

const Phone: React.FC<PhoneProps> = forwardRef((props, ref): React.ReactElement => {
  const [state, setState] = useState<PhoneState>({
    isFocused: false
  });

  const onFocusHandler = (): void => {
    setState(prevState => ({ ...prevState, isFocused: !prevState.isFocused }))
  };

  const onBlurHandler = (): void => {
    setState(prevState => ({ ...prevState, isFocused: !prevState.isFocused }))
  };

  return(
    <Styled.Container isFocused={state.isFocused}>
      <Styled.Label>
        <Styled.Title>{ props.label }</Styled.Title>
        <Styled.Input
          ref={ref}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onKeyDown={(event) => {
            const key = event.key;
            if (key === ' ') event.preventDefault();
          }}
        />
      </Styled.Label>
    </Styled.Container>
  );
});

export default Phone;
