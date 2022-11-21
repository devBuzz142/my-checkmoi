import Card from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </Card>
  );
};

export const Default = Template.bind({});
