import React from 'react';
import { SingleProps } from './interfaces';
import Styled from './styled';


const Single: React.FC<SingleProps> = (props): React.ReactElement | null => {

  if ( !props.hasError ) return null;

  return (
    <Styled.Container>
      <Styled.MessageText>{ props.message }</Styled.MessageText>
    </Styled.Container>
  );
};

export default Single;
