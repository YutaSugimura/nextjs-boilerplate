import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Card } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card/default',
  argTypes: { onClick: { action: 'clicked' } },
};

const Template: Story<ComponentProps<typeof Card>> = (args) => <Card {...args} />;
Template.storyName = 'Card/default';

export const Component = Template.bind({});
Component.args = {};
