import React from 'react';
import groupItems from '../../../../data/groupItems';
import Cards from '../../../ui/Cards';
import Layout from '../../../ui/Layout';
import Table from '../../../ui/Table';
import { ContentProps } from './interfaces';
import Styled from './styled';


const Content: React.FC<ContentProps> = (): React.ReactElement => {
  return(
    <Styled.Container>
      <Layout.Row>
        <Layout.Column>
          <Cards.Default fluid>
            <Table.Default groups={groupItems}/>
          </Cards.Default>
        </Layout.Column>
      </Layout.Row>
    </Styled.Container>
  );
};

export default Content;
