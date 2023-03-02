import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paused from '.';
import '../../../../styles/globals.css';

export default {
  title: 'Components/Labels/Paused',
  component: Paused 
} as ComponentMeta<typeof Paused>;

const Template: ComponentStory<typeof Paused> = (args): React.ReactElement => <Paused {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};