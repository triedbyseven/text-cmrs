import React from 'react';
import { SlideXProps } from './interfaces';
import Styled from './styled';


const SlideX: React.FC<SlideXProps> = (props): React.ReactElement => {
  return(
    <Styled.Container
      animate={{ 'y': 56 * props.index }}
      transition={{type: 'spring'}} 
    >
      {props.children}
    </Styled.Container>
  );
};

export default SlideX;
