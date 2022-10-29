import Toolbar from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  argTypes: {},
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => {
  return <Toolbar {...args}></Toolbar>;
};

export const Default = Template.bind({});
