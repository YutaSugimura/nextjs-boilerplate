import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { Card } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card/index',
} as Meta;

const Template: Story<ComponentProps<typeof Card>> = (args) => <Card {...args} />;
Template.storyName = 'Card/index';

export const index = Template.bind({});
index.args = {};
