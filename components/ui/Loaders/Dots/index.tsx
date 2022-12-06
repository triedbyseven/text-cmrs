import React from 'react';
import { DotsProps } from './interfaces';
import Styled from './styled';


const Dots: React.FC<DotsProps> = (): React.ReactElement => {
  return(
    <Styled.Container>
      <Styled.Dot 
        animate={{
          y: [3, -3, 3]
        }} 
        transition={{ 
          repeat: Infinity, 
          duration: 0.75
        }}
      />
      <Styled.Dot
        animate={{
          y: [3, -3, 3]
        }}
        transition={{
          repeat: Infinity,
          duration: 0.75,
          delay: 0.25
        }}
      />
      <Styled.Dot
        animate={{
          y: [3, -3, 3]
        }}
        transition={{
          repeat: Infinity,
          duration: 0.75,
          delay: 0.50
        }}
      />
    </Styled.Container>
  );
};

export default Dots;
