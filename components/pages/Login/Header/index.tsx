import React from 'react';
import Link from 'next/link';
import Icons from '../../../ui/Icons';
import Layout from '../../../ui/Layout';
import { HeaderProps } from './interfaces';
import Styled from './styled';

const Header: React.FC<HeaderProps> = (): React.ReactElement => {
  return(
    <Styled.Container>
      <Layout.Row flexDirection='column'>
        <Layout.Column>
          <Link href='/' passHref>
            <a>
              <Icons.ArrowBack />
            </a>
          </Link>
        </Layout.Column>
      </Layout.Row>
    </Styled.Container>
  );
};

export default Header;
