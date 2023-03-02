import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Default from '.';
import groupItems from '../../../../data/groupItems';
import '../../../../styles/globals.css';

export default {
  title: 'Components/Table/Default',
  component: Default 
} as ComponentMeta<typeof Default>;

const Template: ComponentStory<typeof Default> = (args): React.ReactElement => <div style={{ width: 1000 }}><Default {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = {
  groups: groupItems
};