import React from 'react';
import Animations from '../../../animations';
import Layout from '../../Layout';
import { DefaultProps } from './interfaces';
import Styled from './styled';

const pages = [1, 2, 3, 4, 5];

const Default: React.FC<DefaultProps> = (props): React.ReactElement => {
  const [state, setState] = React.useState({
    current: 0
  });

  const renderPages = (): React.ReactElement[] => {
    return pages.map((page, index) => (
      <Styled.Item 
        onClick={ () => setState({ current: index }) }>
        { page }
      </Styled.Item>
    ));
  };

  return(
    <Styled.Container>
      <Layout.Row height={'100%'}>
        <Animations.PaginationCursor fromLeft={state.current}>
          <Styled.Cursor>{ state.current + 1 }</Styled.Cursor>
        </Animations.PaginationCursor>
        <Layout.Row overflow={'hidden'} borderRadius={14}>
          { renderPages() }
        </Layout.Row>
      </Layout.Row>
    </Styled.Container>
  );
};

export default Default;
