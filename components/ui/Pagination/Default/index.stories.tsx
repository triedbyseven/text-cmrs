import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Default from '.';
import '../../../../styles/globals.css';

export default {
  title: 'Components/Pagination/Default',
  component: Default 
} as ComponentMeta<typeof Default>;

const Template: ComponentStory<typeof Default> = (args): React.ReactElement => <Default {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};