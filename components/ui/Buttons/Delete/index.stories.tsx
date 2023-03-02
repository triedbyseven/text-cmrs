import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Delete from '.';

export default {
  title: 'Components/Buttons/Delete',
  component: Delete 
} as ComponentMeta<typeof Delete>;

const Template: ComponentStory<typeof Delete> = (args): React.ReactElement => <Delete {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Delete",
  onClick: () => console.log('Emitting')
};