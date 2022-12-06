import React, { useState } from 'react';
import { GroupItem } from '../../../../data/groupItems';
import Labels from '../../Labels';
import Layout from '../../Layout';
import { DefaultProps } from './interfaces';
import Styled from './styled';


const Default: React.FC<DefaultProps> = (props): React.ReactElement => {
  const [state, setState] = useState<GroupItem[]>(props.groups);

  const renderGroups = (): React.ReactElement[] => {
    return state.map((group: GroupItem) => (
      <Layout.Row key={ group.id }>
        <Layout.Column>{ group.name }</Layout.Column>
        <Layout.Column>{ group.lead }</Layout.Column>
        <Layout.Column>{ group.status === 'active' ? <Labels.Active /> : <Labels.Paused /> }</Layout.Column>
        <Layout.Column></Layout.Column>
      </Layout.Row>
    ));
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Layout.Row>
          <Layout.Column>Name</Layout.Column>
          <Layout.Column>Lead</Layout.Column>
          <Layout.Column>Status</Layout.Column>
          <Layout.Column></Layout.Column>
        </Layout.Row>
      </Styled.Header>

      <Styled.Body>
        { renderGroups() }
      </Styled.Body>
    </Styled.Container>
  );
};

export default Default;
