import React from 'react';
import { ActiveProps } from './interfaces';
import Styled from './styled';


const Active: React.FC<ActiveProps> = (props): React.ReactElement => {
  return(
    <Styled.Container>
      <Styled.Text>active</Styled.Text>
    </Styled.Container>
  );
};

export default Active;
