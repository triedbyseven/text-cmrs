import React from 'react';
import { RowProps } from './interfaces';
import Styled from './styled';


const Row: React.FC<RowProps> = (props): React.ReactElement => {
  const dynamicStyles: React.CSSProperties = {
    ...props
  };

  return(
    <Styled.Container 
      style={props}
    >
      { props.children }
    </Styled.Container>
  );
};

export default Row;
