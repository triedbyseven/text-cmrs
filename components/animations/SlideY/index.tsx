import React from 'react';
import { SlideYProps } from './interfaces';
import Styled from './styled';

const SlideY: React.FC<SlideYProps> = (props): React.ReactElement => {
  return(
    <Styled.Container
      initial={{ opacity: 0, x: 12, y: -38 }}
      animate={{ opacity: 1, y: -50 }}
      transition={{ type: 'spring', 'mass': 0.5, 'damping': 9 }} 
    >
      {props.children}
    </Styled.Container>
  );
};

export default SlideY;
