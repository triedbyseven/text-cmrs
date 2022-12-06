import React from 'react';
import { PageProps } from './interfaces';
import Styled from './styled';


const Page: React.FC<PageProps> = (props): React.ReactElement => {
  return(
    <Styled.Container>
      { props.children }
    </Styled.Container>
  );
};

export default Page;
