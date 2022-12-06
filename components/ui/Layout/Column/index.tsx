import React from 'react';
import { ColumnProps } from './interfaces';
import Styled from './styled';


const Column: React.FC<ColumnProps> = (props): React.ReactElement => {
  const dynamicStyles: ColumnProps = {
    ...props,
    children: undefined
  };

  return(
    <Styled.Container style={dynamicStyles}>
      { props.children }
    </Styled.Container>
  );
};

export default Column;
