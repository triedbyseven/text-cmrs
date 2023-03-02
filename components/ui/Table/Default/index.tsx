import React, { useState } from 'react';
import { GroupItem } from '../../../../data/groupItems';
import Buttons from '../../Buttons';
import Labels from '../../Labels';
import Layout from '../../Layout';
import { DefaultProps } from './interfaces';
import Styled from './styled';

const Default: React.FC<DefaultProps> = (props): React.ReactElement => {
  const [state, setState] = useState<GroupItem[]>(props.groups);

  const renderGroups = (): React.ReactElement[] => {
    return state.map((group: GroupItem): React.ReactElement => (
      <Layout.Row key={ group.id } height={67}>
        <Layout.Column display='flex' alignItems='center'>{ group.name }</Layout.Column>
        <Layout.Column display='flex' alignItems='center'>{ group.lead }</Layout.Column>
        <Layout.Column display='flex' alignItems='center'>{ group.status === 'active' ? <Labels.Active /> : <Labels.Paused /> }</Layout.Column>
        <Layout.Column display='flex' alignItems='center'>
          <Layout.Row>
            <Layout.Column>
              <Buttons.Details label='Details' onClick={() => console.log('Emitting')} />
            </Layout.Column>
            <Layout.Column>
              <Buttons.Edit label='Edit user' onClick={() => console.log('Emitting')} />
            </Layout.Column>
          </Layout.Row>
        </Layout.Column>
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
