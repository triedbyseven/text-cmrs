import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Edit from '.';

export default {
  title: 'Components/Buttons/Edit',
  component: Edit 
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args): React.ReactElement => <Edit {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Edit user",
  onClick: () => console.log('Emitting')
};