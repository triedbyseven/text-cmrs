import Link from 'next/link';
import React from 'react';
import { NavigationLinkProps } from './interfaces';
import Styled from './styled';


const NavigationLink: React.FC<NavigationLinkProps> = (props): React.ReactElement => {
  return(
    <Styled.Container>
      <Link href={props.href} passHref>
        <Styled.MenuItemAhref isActive={false}>
          { props.name }
        </Styled.MenuItemAhref>
      </Link>
    </Styled.Container>
  );
};

export default NavigationLink;
