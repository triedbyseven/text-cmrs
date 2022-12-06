import React, { useState, forwardRef } from 'react';
import { TextProps, TextState } from './interfaces';
import Styled from './styled';

const Text: React.FC<TextProps> = forwardRef((props, ref): React.ReactElement => {
  const [state, setState] = useState<TextState>({
    isFocused: false
  });

  const onFocusHandler = (): void => {
    setState(prevState => ({ ...prevState, isFocused: !prevState.isFocused }))
  };
  
  const onBlurHandler = (): void => {
    setState(prevState => ({ ...prevState, isFocused: !prevState.isFocused }))
  };

  return (
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

export default Text;