import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Active from '.';
import '../../../../styles/globals.css';

export default {
  title: 'Components/Labels/Active',
  component: Active 
} as ComponentMeta<typeof Active>;

const Template: ComponentStory<typeof Active> = (args): React.ReactElement => <Active {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};