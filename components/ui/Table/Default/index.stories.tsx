import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Default from '.';
import groupItems from '../../../../data/groupItems';
import '../../../../styles/globals.css';
import Cards from '../../Cards';

export default {
  title: 'Components/Table/Default',
  component: Default 
} as ComponentMeta<typeof Default>;

const Template: ComponentStory<typeof Default> = (args): React.ReactElement => <div style={{ width: 1000 }}><Cards.Default fluid><Default {...args} /></Cards.Default></div>;

export const Primary = Template.bind({});

Primary.args = {
  groups: groupItems
};