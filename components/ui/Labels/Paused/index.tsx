import React from 'react';
import { PausedProps } from './interfaces';
import Styled from './styled';


const Paused: React.FC<PausedProps> = (props): React.ReactElement => {
  return(
    <Styled.Container>
      <Styled.Text>paused</Styled.Text>
    </Styled.Container>
  );
};

export default Paused;
