import React from 'react';
import { DefaultProps } from './interfaces';
import Styled from './styled';


const Default: React.FC<DefaultProps> = (props): React.ReactElement => {
  return(
    <Styled.Container>
      { props.children }
    </Styled.Container>
  );
};

export default Default;
