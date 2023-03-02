import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Details from '.';

export default {
  title: 'Components/Buttons/Details',
  component: Details 
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args): React.ReactElement => <Details {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Details",
  onClick: () => console.log('Emitting')
};