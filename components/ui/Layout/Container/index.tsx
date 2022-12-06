import React from 'react';
import { ContainerProps } from './interfaces';
import Styled from './styled';


const Container: React.FC<ContainerProps> = (props): React.ReactElement => {
  return(
    <Styled.Container style={{ ...props }}>
      { props.children }
    </Styled.Container>
  );
};

export default Container;
