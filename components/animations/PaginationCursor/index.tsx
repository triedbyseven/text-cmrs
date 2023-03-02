import { useAnimationControls } from 'framer-motion';
import React from 'react';
import { PaginationCursorProps } from './interfaces';
import Styled from './styled';

const PaginationCursor: React.FC<PaginationCursorProps> = (props): React.ReactElement => {
  const animation = useAnimationControls();
  const sequence = async (): Promise<void> => {
    animation.start({ x: props.fromLeft * 36 });
    await animation.start({ scale: 1.15 });
    await animation.start({ scale: 1 });
  };

  sequence();

  return(
    <Styled.Container
      transition={{ type: 'spring', 'mass': 0.5, 'damping': 14 }} 
      animate={animation}
    >
      {props.children}
    </Styled.Container>
  );
};

export default PaginationCursor;
